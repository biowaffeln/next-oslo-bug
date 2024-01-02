"use client";
import { action } from "./action";

export function Test() {
  return (
    <form action={action}>
      <button>submit</button>
    </form>
  );
}
