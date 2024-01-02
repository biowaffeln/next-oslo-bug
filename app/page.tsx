import { Argon2id } from "oslo/password";
import { Test } from "./client";

export default async function Page() {
  const argon = new Argon2id();
  console.log(argon);

  return (
    <div>
      <Test />
    </div>
  );
}
