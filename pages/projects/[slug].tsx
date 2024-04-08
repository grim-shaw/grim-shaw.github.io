import React from "react"
import fs from "fs"
import path from "path"

import ProjectDetails from "@/components/projectDetails"

export const getStaticPaths = async () => {
	let fileData = []
	const filePath = path.join(process.cwd(), "data", "projects.json")
	const jsonData = fs.readFileSync(filePath, "utf-8")
	fileData = JSON.parse(jsonData)

	const paths = fileData.map((project: any) => {
		return {
			params: { slug: project.title }
		}
	})

	return {
		paths,
		fallback: false
	}
}

export async function getStaticProps({ params }: any) {
	let fileData = []
	const filePath = path.join(process.cwd(), "data", "projects.json")
	const jsonData = fs.readFileSync(filePath, "utf-8")
	fileData = JSON.parse(jsonData)

	const item = fileData.filter(
		(project: any) => project.title === params.slug
	)

	return {
		props: { project: item[0] }
	}
}

export default function Project({ project }: any) {
	return <ProjectDetails project={project} />
}
