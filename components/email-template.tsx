import * as React from "react";

type ResponseData = {
	name: string;
	email: string;
	subject: string;
	message: string;
};

type EmailTemplateProps = Partial<ResponseData>;

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = (
	props
) => (
	<div>
		<p>Subject, {props.subject}!</p>
		<p>Message, {props.message}!</p>
	</div>
);
