import { NextRequest, NextResponse } from "next/server";
import schema from "../auth/schema";
import { prisma } from "@/prisma/client";
import bcrypt from "bcrypt";

export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany({});
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

  const hashedPassword = await bcrypt.hash(body.hashedPassword, 10);
  const newUser = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
      hashedPassword,
    },
  });
  return NextResponse.json(newUser, { status: 201 });
}
