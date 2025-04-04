"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

const ClarityAnalytics = () => {
	useEffect(() => {
		Clarity.init(process.env.NEXT_PUBLIC_CLARITY_ID!);
	}, []);

	return null;
};

export default ClarityAnalytics;
