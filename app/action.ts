"use server";

import { Argon2id } from "oslo/password";

export async function action() {
  const argon = new Argon2id();
  console.log(argon);
}
