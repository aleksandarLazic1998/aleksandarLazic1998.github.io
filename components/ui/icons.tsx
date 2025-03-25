import { Javascript } from "./icons/javascript";
import { Node } from "./icons/node";
import { Typescript } from "./icons/typescript";
import { React } from "./icons/react";
import { Next } from "./icons/next";
import { TailwindIcon } from "./icons/tailwindicon";
import { SassIcon } from "./icons/sassicon";
import { CssIcon } from "./icons/cssicon";
import { NgnixIcon } from "./icons/ngnixicon";
import { Redux } from "./icons/redux";
import { Sequelize } from "./icons/sequelizeicon";
import { MongooseIcon } from "./icons/mongoose";
import { MongodbIcon } from "./icons/mongodb";
import { PostgresqlIcon } from "./icons/postgresql";
import { DockerIcon } from "./icons/docker";
import { MysqlIcon } from "./icons/mysql";
import { RedisIcon } from "./icons/redis";
import { NestIcon } from "./icons/nest";
import { AWSIcon } from "./icons/aws";
import { GraphQLIcon } from "./icons/graphql";
import { JestIcon } from "./icons/jest";
import { SupabaseIcon } from "./icons/supabase";
import { ExpressIcon } from "./icons/express";
import { GitIcon } from "./icons/git";
import { CICDIcon } from "./icons/ci_cd";

enum IconsEnum {
	javascript = "javascript", //
	typescript = "typescript", //
	"node.js" = "node.js", //
	react = "react", //
	nextjs = "next.js", //
	redux = "redux", //
	tailwind = "tailwind", //
	sass = "sass", //
	css = "css", //
	sequelize = "sequelize",
	mongoose = "mongoose",
	postgresql = "postgresql", //
	mysql = "mysql", //
	mongodb = "mongodb", //
	redis = "redis", //
	jest = "jest", //
	docker = "docker", //
	nginx = "nginx", //
	nest = "nest", //
	aws = "aws", //
	graphql = "graphql", //
	supabase = "supabase", //
	express = "express", //
	git = "git",
	ci_cd = "ci_cd",
}

function Icons({
	icon,
	className,
}: {
	icon: keyof typeof IconsEnum;
	className: string;
}) {
	const iconsObject: Record<string, React.ReactNode> = {
		[IconsEnum.javascript]: <Javascript className={className} />,
		[IconsEnum.typescript]: <Typescript className={className} />,
		[IconsEnum["node.js"]]: <Node className={className} />,
		[IconsEnum.react]: <React className={className} />,
		[IconsEnum.nextjs]: <Next className={className} />,
		[IconsEnum.redux]: <Redux className={className} />,
		[IconsEnum.css]: <CssIcon className={className} />,
		[IconsEnum.tailwind]: <TailwindIcon className={className} />,
		[IconsEnum.sass]: <SassIcon className={className} />,
		[IconsEnum.sequelize]: <Sequelize className={className} />,
		[IconsEnum.mongoose]: <MongooseIcon className={className} />,
		[IconsEnum.postgresql]: <PostgresqlIcon className={className} />,
		[IconsEnum.mongodb]: <MongodbIcon className={className} />,
		[IconsEnum.nginx]: <NgnixIcon className={className} />,
		[IconsEnum.docker]: <DockerIcon className={className} />,
		[IconsEnum.mysql]: <MysqlIcon className={className} />,
		[IconsEnum.redis]: <RedisIcon className={className} />,
		[IconsEnum.nest]: <NestIcon className={className} />,
		[IconsEnum.aws]: <AWSIcon className={className} />,
		[IconsEnum.graphql]: <GraphQLIcon className={className} />,
		[IconsEnum.jest]: <JestIcon className={className} />,
		[IconsEnum.supabase]: <SupabaseIcon className={className} />,
		[IconsEnum.express]: <ExpressIcon className={className} />,
		[IconsEnum.ci_cd]: <CICDIcon className={className} />,
		[IconsEnum.git]: <GitIcon className={className} />,
	};

	return iconsObject[icon] || <>Icon not found!</>;
}

export { Icons, IconsEnum };
