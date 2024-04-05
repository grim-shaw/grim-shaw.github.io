import Image from "next/image"
import Link from "next/link"
import React from "react"

const Month = {
	"01": "January",
	"02": "February",
	"03": "March",
	"04": "April",
	"05": "May",
	"06": "June",
	"07": "July",
	"08": "August",
	"09": "September",
	"10": "October",
	"11": "November",
	"12": "December"
} as any

function getFormatedTime(time: string) {
	const timeParts = time.split("-")
	return `${timeParts[2]} ${Month[timeParts[1]]}, ${timeParts[0]}`
}

export default function SingleBlog({ blog }: any) {
	const {
		title,
		slug,
		thumbnail,
		tags,
		readingTime,
		publishedTime,
		featuredText,
		blogContent
	} = blog.fields

	return (
		<div className="m-auto my-[1em] bg-[#18181B] shadow-md shadow-black hover:shadow-lg hover:shadow-black transition-shadow duration-500 ease-out cursor-pointer border-[1px] rounded-[0.5rem] border-[#27272A] py-[1em] px-[1.5em] w-[70%] h-[15em] flex flex-row justify-center align-middle">
			<div className="relative h-[12em] w-[40em] m-auto flex flex-col justify-center align-middle rounded-[0.5em] mr-[1em] overflow-clip">
				<Image
					src={`https:${thumbnail.fields.file.url}`}
					alt={thumbnail.fields.title}
					layout="fill"
					style={{ objectFit: "cover" }}
					className="absolute inset-0 rounded-[0.5em] transition-transform duration-500 transform hover:scale-125 ease-out"
				/>
			</div>
			<div className="font-oxygen font-semibold py-[1em]">
				<div className="m-auto">
					<p className="break-words text-wrap text-[#F97316] hover:underline underline-offset-2">
						<Link href={`blogs/${slug}`}>{title}</Link>
					</p>
					<div
						className="h-[6em] w-[30em]"
						style={{
							whiteSpace: "nowrap",
							overflow: "hidden",
							textOverflow: "ellipsis"
						}}
					>
						<p className="text-[#A1A1AA] text-[0.85rem] font-normal text-wrap">
							{featuredText}
						</p>
					</div>
					<div className="flex flex-row text-white text-[0.8rem] justify-items-start align-middle mt-[1em] font-normal">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="inline-block fill-white h-6 scale-75 w-[1.375rem] my-auto"
							aria-hidden="true"
						>
							<path d="M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z"></path>
							<path d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z"></path>
						</svg>
						<p className="my-auto">
							&nbsp;{getFormatedTime(publishedTime)}&nbsp;&nbsp;
							<span className="scale-110">|</span>&nbsp;&nbsp;
						</p>
						<svg
							stroke="white"
							fill="white"
							stroke-width="0"
							viewBox="0 0 24 24"
							height="1.25em"
							width="1.25em"
							xmlns="http://www.w3.org/2000/svg"
							className="scale-110 my-auto"
						>
							<path d="M12.25 2c-5.514 0-10 4.486-10 10s4.486 10 10 10 10-4.486 10-10-4.486-10-10-10zM18 13h-6.75V6h2v5H18v2z"></path>
						</svg>
						<p className="my-auto ml-[12px]">{readingTime} min</p>
					</div>
				</div>
			</div>
		</div>
	)
}
