import React from "react"
import SingleBlog from "./singleBlog"

export default function Blogs({ blogs }: any) {
	return (
		<div className="w-[100%] flex flex-col justify-start align-middle m-auto">
			{blogs.map((blog: any) => (
				<SingleBlog key={blog.sys.id} blog={blog} />
			))}
		</div>
	)
}
