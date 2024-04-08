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
		fallback: true
	}
}

export async function getStaticProps({ params }: any) {
	let fileData = []
	const filePath = path.join(process.cwd(), "data", "projects.json")
	const jsonData = fs.readFileSync(filePath, "utf-8")
	fileData = JSON.parse(jsonData)

	const items = fileData.filter(
		(project: any) => project.title === params.slug
	)

	if (!items.length) {
		return {
			redirect: {
				destination: "/",
				permanent: false
			}
		}
	}

	return {
		props: { project: items[0] },
		revalidate: 100
	}
}

export default function Project({ project }: any) {
	if (!project) {
		return (
			<section className="text-primary text-[1.25rem] text-center font-ubuntu flex flex-col justify-center align-middle m-auto w-[50%] mx-auto h-[85vh] pt-[8em]">
				Loading....
			</section>
		)
	}

	return <ProjectDetails project={project} />
}
