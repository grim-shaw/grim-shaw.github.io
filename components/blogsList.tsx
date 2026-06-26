import { SingleBlog } from "@/components"

export default function Blogs({ blogs }: any) {
	return (
		<div className="m-auto flex w-[100%] flex-col justify-start align-middle">
			{blogs.map((blog: any) => (
				<SingleBlog key={blog.sys.id} blog={blog} />
			))}
		</div>
	)
}
