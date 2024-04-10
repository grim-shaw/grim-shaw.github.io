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
		<div className="m-auto my-[1em] flex min-h-[15em] w-[90%] flex-col justify-center rounded-[0.5rem] border-[1px] border-[#27272A] bg-[#18181B] px-[1.5em] py-[1.5em] align-middle shadow-md shadow-black transition-shadow duration-500 ease-out hover:shadow-lg hover:shadow-black min-[390px]:w-[70%] md:flex md:flex-row  md:py-[1em]">
			<div className="relative m-auto mr-[1em] flex h-[12em] w-[100%] flex-col justify-center overflow-clip rounded-[0.5em] align-middle md:w-[40%]">
				<Image
					src={`https:${thumbnail.fields.file.url}`}
					alt={thumbnail.fields.title}
					layout="fill"
					style={{ objectFit: "cover" }}
					className="absolute inset-0 h-[100%] transform rounded-[0.5em] transition-transform duration-500 ease-out hover:scale-125"
				/>
			</div>
			<div className="w-[100%] pt-[1em] font-oxygen font-semibold md:w-[60%]">
				<p className="text-wrap break-words text-[0.8rem] text-[#F97316] underline-offset-2 hover:underline sm:text-[0.85rem] md:text-[1rem]">
					<Link href={`blogs/${slug}`}>{title}</Link>
				</p>
				<div
					className="mb-[0.25em] h-[6em] w-[100%] overflow-clip"
					// style={{
					// 	whiteSpace: "nowrap",
					// 	overflow: "hidden",
					// 	textOverflow: "ellipsis"
					// }}
				>
					<p className="text-wrap break-words text-[0.75rem] font-normal text-[#A1A1AA] sm:text-[0.8rem] md:text-[0.85rem]">
						{featuredText}
					</p>
				</div>
				<div className="mt-[1em] flex justify-items-start align-middle text-[0.6rem] font-normal text-white min-[390px]:text-[0.7rem] md:text-[0.8rem]">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="my-auto inline-block h-6 w-[1.375rem] scale-75 fill-white"
						aria-hidden="true"
					>
						<path d="M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z"></path>
						<path d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z"></path>
					</svg>
					<p className="my-auto">
						&nbsp;{getFormatedTime(publishedTime)}
						<span className="mx-[1em] scale-110">|</span>
					</p>
					<svg
						stroke="white"
						fill="white"
						strokeWidth="0"
						viewBox="0 0 24 24"
						height="1.25em"
						width="1.25em"
						xmlns="http://www.w3.org/2000/svg"
						className="my-auto scale-110"
					>
						<path d="M12.25 2c-5.514 0-10 4.486-10 10s4.486 10 10 10 10-4.486 10-10-4.486-10-10-10zM18 13h-6.75V6h2v5H18v2z"></path>
					</svg>
					<p className="my-auto ml-[12px]">{readingTime} min</p>
				</div>
			</div>
		</div>
	)
}
