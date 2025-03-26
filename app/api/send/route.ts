import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import formidable, { errors as formidableErrors } from "formidable";
import fs from "fs";
import path from "path";

export const config = {
	api: {
		bodyParser: false, // Required for formidable
	},
};

export function POST(req: NextApiRequest, res: NextApiResponse) {
	// const form = formidable({});

	// form.parse(req, (err, fields, files) => {
	// 	if (err) {
	// 		res.status(500).json({ error: "Failed to send email" });
	// 		return;
	// 	}

	// 	console.log({ fields, files });

	// 	res.json({ fields, files });
	// });

	// form.uploadDir = "./public/uploads"; // Adjust if needed
	// form.keepExtensions = true;

	// form.parse(req, async (err, fields, files) => {
	// 	if (err) return res.status(500).json({ error: "File upload error" });

	// 	const { name, email, subject, message } = fields;
	// 	// const file = files.file as formidable.File;

	// 	// if (!file || file.mimetype !== "application/pdf") {
	// 	// 	return res.status(400).json({ error: "Invalid file type" });
	// 	// }

	// 	const transporter = nodemailer.createTransport({
	// 		service: "Gmail",
	// 		auth: {
	// 			user: process.env.MY_EMAIL,
	// 			pass: process.env.MY_PASSWORD,
	// 		},
	// 	});

	// 	console.log(fields);

	// 	try {
	// 		await transporter.sendMail({
	// 			from: email as string,
	// 			to: "aleksandar.lazic.d@gmail.com",
	// 			subject: `New Contact Request from ${name}`,
	// 			text: `${name} sent a message with content: ${message}`,
	// 			// attachments: [
	// 			// 	{ filename: path.basename(file.filepath), path: file.filepath },
	// 			// ],
	// 		});

	// 		res.status(200).json({ message: "Email sent successfully" });
	// 	} catch (error) {
	// 		console.error("Error sending email:", error);
	// 		res.status(500).json({ error: "Failed to send email" });
	// 	} finally {
	// 		// fs.unlinkSync(file.filepath);
	// 	}
	// });
}
