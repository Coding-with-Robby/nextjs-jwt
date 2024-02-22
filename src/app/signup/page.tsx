"use client";

import { redirect } from "next/navigation";
import { useFormState } from "react-dom";
import signupAction from "./signupAction";

export default function Signup() {
  const [error, formAction] = useFormState(signupAction, undefined);

  return (
    <div>
      <h1>Signup</h1>
      <form action={formAction}>
        <input type="email" name="email" />
        <input type="password" name="password" />
        <button type="submit">Signup</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}
