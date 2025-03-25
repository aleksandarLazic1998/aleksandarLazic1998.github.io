import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
	name: string;
	email: string;
	subject: string;
	message: string;
};
const resend = new Resend("re_EVjhSzJw_D1GS7JT4XP82PPiHDpD87RKR");

export async function POST(req: Request) {
	const body = await req.json();

	console.log(body, "body");

	try {
		const { data, error } = await resend.emails.send({
			from: `${body.email}`,
			to: ["aleksandar.lazic.d@gmail.com"],
			subject: body.subject,
			react: EmailTemplate(body),
		});

		if (error) {
			return Response.json({ error }, { status: 500 });
		}

		return Response.json(data);
	} catch (error) {
		return Response.json({ error }, { status: 500 });
	}
}
