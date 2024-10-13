import { NextResponse } from "next/server";
import type { NextMiddleware } from "next/server";

type TMiddleware = (middleware: NextMiddleware) => NextMiddleware;

export function middlewarechain(
  functions: TMiddleware[],
  index = 0
): NextMiddleware {
  const current = functions[index];

  if (current) {
    const next = middlewarechain(functions, index + 1);
    return current(next);
  }

  return () => NextResponse.next();
}
