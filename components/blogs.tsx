import React from "react"
import SingleBlog from "./singleBlog"

export default function Blogs() {
	return (
		<div className="w-[100%] flex flex-col justify-start align-middle m-auto">
			<SingleBlog />
			<SingleBlog />
			<SingleBlog />
		</div>
	)
}
