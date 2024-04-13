import React from "react"
import SingleProject from "./singleProject"

export default function Catalogue({ projects }: any) {
	return (
		<div className="h-min-[20em] mx-auto mb-[4em] mt-[2em] flex w-[100%] flex-wrap justify-center gap-4 gap-y-8 tracking-tight">
			{projects &&
				projects.length > 0 &&
				projects.map((project: any) => {
					return (
						<SingleProject
							key={project.title}
							title={project.title}
							featuredText={project.featuredText}
							featuredImage={project.featuredImage}
						/>
					)
				})}
		</div>
	)
}
