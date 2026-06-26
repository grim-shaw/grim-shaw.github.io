import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock } from "../public/icons"

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
				<div className="mb-[0.25em] h-[6em] w-[100%] overflow-clip">
					<p className="text-wrap break-words text-[0.75rem] font-normal text-[#A1A1AA] sm:text-[0.8rem] md:text-[0.85rem]">
						{featuredText}
					</p>
				</div>
				<div className="mt-[1em] flex justify-items-start align-middle text-[0.6rem] font-normal text-white min-[390px]:text-[0.7rem] md:text-[0.8rem]">
					<Calendar />
					<p className="my-auto pt-[2px]">
						&nbsp;{getFormatedTime(publishedTime)}
						<span className="mx-[1em] scale-110">|</span>
					</p>
					<Clock />
					<p className="my-auto ml-[12px] pt-[2px]">{readingTime} min</p>
				</div>
			</div>
		</div>
	)
}
