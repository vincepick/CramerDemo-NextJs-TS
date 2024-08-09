import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export function GET(request: NextRequest) {
  return NextResponse.json("hello"); //this can return any kind of object
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  //validate
  //if invalid, return 400

  //if empty string or doesnt exist
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  return NextResponse.json(
    { id: 1, name: body.name, test: body.bloke },
    { status: 201 }
  );
}
