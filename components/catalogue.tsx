import React from "react"
import SingleProject from "./singleProject"

export default function Catalogue({ projects }: any) {
	return (
		<div className="mt-[2em] mb-[4em] w-[85%] h-min-[20em] m-auto flex flex-row flex-wrap gap-4 gap-y-8 tracking-tight">
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
