import fs from "fs"
import path from "path"
import Head from "next/head"
import { motion } from "framer-motion"

import { Catalogue } from "@/components"

const variants = {
	hidden: { opacity: 0, x: 0, y: 20 },
	enter: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: -0, y: 20 }
}

export async function getStaticProps() {
	let fileData = []
	const filePath = path.join(process.cwd(), "data", "projects.json")
	const jsonData = fs.readFileSync(filePath, "utf-8")
	fileData = JSON.parse(jsonData)
	return {
		props: {
			projects: fileData
		}
	}
}

export default function Projects({ projects }: any) {
	return (
		<motion.section
			initial={"hidden"}
			animate={"enter"}
			exit={"exit"}
			variants={variants}
			transition={{ duration: 0.4, type: "easeInOut" }}
		>
			<Head>
				<title>Usama Qureshi | Projects</title>
			</Head>
			<div className="m-auto flex flex-col justify-center align-middle">
				<div className="m-auto mt-[7em] text-center">
					<p className="font-jetbrain text-[1.25rem] text-primary">Projects</p>
				</div>
				<Catalogue projects={projects} />
			</div>
		</motion.section>
	)
}
