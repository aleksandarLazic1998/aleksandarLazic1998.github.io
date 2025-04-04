"use client";
import React, { useEffect } from "react";
import ReactGA from "react-ga";

const Analytics = () => {
	useEffect(() => {
		ReactGA.initialize(process.env.NEXT_PUBLIC_ANALYTICS_ID!);
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);

	return null;
};

export default Analytics;
