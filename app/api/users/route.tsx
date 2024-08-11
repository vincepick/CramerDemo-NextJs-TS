import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany({
    where: {
      email: "elizabeth@gmail.com",
    },
  });
  return NextResponse.json(users); //this can return any kind of object
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  //validate
  //if invalid, return 400

  //if empty string or doesnt exist
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  //Checking if user already exists
  const user = await prisma.user.findUnique({
    where: { email: body.email },
  });

  if (user)
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  const newUser = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
    },
  });
  return NextResponse.json(newUser, { status: 201 });
}
