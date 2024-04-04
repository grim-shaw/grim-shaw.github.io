import React from "react"
import SingleProject from "./singleProject"

export default function Catalogue() {
	return (
		<div className="mt-[2em] mb-[4em] w-[85%] h-min-[20em] m-auto flex flex-row flex-wrap gap-4 gap-y-8 tracking-tight">
			<SingleProject
				title={"Search Engine"}
				featuredText={
					"It is a search engine built on top of json files as corpus of text."
				}
				projectUrl={"https://github.com/Grimmer107/Search-Engine"}
			/>
			<SingleProject
				title={"Search Engine"}
				featuredText={
					"It is a search engine built on top of json files as corpus of text."
				}
				projectUrl={"https://github.com/Grimmer107/Search-Engine"}
			/>
			<SingleProject
				title={"Search Engine"}
				featuredText={
					"It is a search engine built on top of json files as corpus of text."
				}
				projectUrl={"https://github.com/Grimmer107/Search-Engine"}
			/>
			<SingleProject
				title={"Search Engine"}
				featuredText={
					"It is a search engine built on top of json files as corpus of text."
				}
				projectUrl={"https://github.com/Grimmer107/Search-Engine"}
			/>
			<SingleProject
				title={"Search Engine"}
				featuredText={
					"It is a search engine built on top of json files as corpus of text."
				}
				projectUrl={"https://github.com/Grimmer107/Search-Engine"}
			/>
		</div>
	)
}
