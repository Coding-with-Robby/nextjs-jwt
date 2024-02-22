import validateEmail from "@/app/helpers/validateEmail";
import validatePassword from "@/app/helpers/validatePassword";
import prisma from "@/app/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  // Read data off req body
  const body = await request.json();
  const { email, password } = body;

  // Validate data
  if (!validateEmail(email) || !validatePassword(password)) {
    return Response.json(
      {
        error: "Invalid email or password",
      },
      { status: 400 }
    );
  }

  // Hash the password
  const hash = bcrypt.hashSync(password, 8);

  // Create a user in db
  await prisma.user.create({
    data: {
      email,
      password: hash,
    },
  });

  // return something
  return Response.json({});
}
