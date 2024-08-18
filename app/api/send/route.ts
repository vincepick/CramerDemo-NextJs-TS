import { EmailTemplate } from '../../components/email-template';
import { Resend } from 'resend';
import * as React from 'react';
3
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const response = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["vincepick@gmail.com"],
      subject: "Hello world",
      react: EmailTemplate({ firstName: "squigdame" }) as React.ReactElement,
    });

    return Response.json(response);
  } catch (error) {
    return Response.json({ error }, { status: 600 });
  }
}


// import { Resend } from "resend";
// import WelcomeTemplate from "../../emails/WelcomeTemplate";
// import { NextResponse } from "next/server";
// import { NextApiRequest, NextApiResponse } from "next/types";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST() {
//   try {
//     const response = await resend.emails.send({
//       from: "Acme <onboarding@resend.dev>",
//       to: ["vincepick@gmail.com"],
//       subject: "Hello world",
//       react: WelcomeTemplate({ userFirstname: "John" }) as React.ReactElement,
//     });

//     return Response.json(response);
//   } catch (error) {
//     return Response.json({ error }, { status: 600 });
//   }
// }

// export async function POST() {
//   try {
//     const { data, error } = await resend.emails.send({
//       from: "Acme <onboarding@resend.dev>",
//       to: ["vincepick@gmail.com"],
//       subject: "Hello world",
//       react: WelcomeTemplate({ userFirstname: "John" }),
//     });

//     if (error) {
//       return Response.json({ error }, { status: 500 });
//     }

//     return Response.json(data);
//   } catch (error) {
//     return Response.json({ error }, { status: 500 });
//   }
// }

// export async function POST() {
//   await resend.emails.send({
//     from: "mynextjsprojectexample.com",
//     to: "vincepick@gmail.com",
//     subject: "...",
//     react: <WelcomeTemplate name="Mosh" />,
//   });

//   return NextResponse.json({});
// }
