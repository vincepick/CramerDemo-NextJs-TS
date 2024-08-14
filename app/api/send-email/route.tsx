import { Resend } from "resend";
import WelcomeTemplate from "../../../emails/WelcomeTemplate";
import { NextResponse } from "next/server";

new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  await resend.emails.send({
    from: "mynextjsprojectexample.com",
    to: "vincepick@gmail.com",
    subject: "...",
    react: <WelcomeTemplate name="Mosh" />,
  });

  return NextResponse.json({});
}
