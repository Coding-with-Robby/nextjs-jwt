"use client";

import { useFormState } from "react-dom";
import loginAction from "./loginAction";

export default function Login() {
  const [error, formAction] = useFormState(loginAction, undefined);

  return (
    <div>
      <h1>Login</h1>
      <form action={formAction}>
        <input type="email" name="email" />
        <input type="password" name="password" />
        <button type="submit">Login</button>
      </form>

      {error && <p>{error}</p>}
    </div>
  );
}
