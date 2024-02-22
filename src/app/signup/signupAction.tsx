"use server";

import { redirect } from "next/navigation";

export default async function signupAction(
  currentState: any,
  formData: FormData
): Promise<string> {
  // Get the data off the form
  const email = formData.get("email");
  const password = formData.get("password");

  //  Send to our api route
  const res = await fetch(process.env.ROOT_URL + "/api/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const json = await res.json();

  // Redirect to login if success
  if (res.ok) {
    redirect("/login");
  } else {
    return json.error;
  }
}
