import React from "react"
import fs from "fs"
import path from "path"
import { motion } from "framer-motion"

import Catalogue from "@/components/catalogue"

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
			initial={{ y: 25, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{
				duration: 0.75
			}}
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
