import React from "react"
import fs from "fs"
import path from "path"
import { motion } from "framer-motion"

import Catalogue from "@/components/catalogue"

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
			<div className="flex flex-col justify-center align-middle m-auto">
				<div className="m-auto text-center mt-[7em]">
					<p className="text-primary text-[1.25rem] font-jetbrain">
						Projects
					</p>
				</div>
				<Catalogue projects={projects} />
			</div>
		</motion.section>
	)
}
