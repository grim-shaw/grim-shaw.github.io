import React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function SingleProject(props: any) {
	const { title, featuredText, featuredImage } = props

	return (
		<div className="duration-400 flex h-[20em] w-[18em] flex-col justify-start rounded-[1em] border-[1px] border-[#27272A] bg-[#18181B] shadow-md shadow-black transition-all ease-linear hover:shadow-lg hover:shadow-black min-[390px]:w-[20em]">
			<div className="relative h-[10em] w-[17.9em] overflow-clip rounded-t-[1em] min-[390px]:w-[19.9em]">
				<Image
					src={featuredImage}
					alt={"project feature image"}
					layout={"fill"}
					style={{ objectFit: "cover" }}
					className="transform transition-transform duration-500 ease-out hover:scale-125"
				/>
			</div>
			<div className="flex flex-col p-[1em]">
				<p className="font-ubuntu text-[1.1rem] font-semibold text-primary">
					{title}
				</p>
				<p className="font-oxygen text-[0.8rem] text-white opacity-80">
					{featuredText}
				</p>
				<Link href={`/projects/${title}`}>
					<motion.div
						data-ripple-light="true"
						whileHover={{ scale: 1.05 }}
						className="mt-[2em] rounded-[0.5em] border-[1px] border-[#27272A] bg-[#18181B] py-[0.25em] text-center font-ubuntu text-[0.9em] font-semibold text-primary transition-colors duration-200 ease-linear hover:bg-primary hover:text-black"
					>
						<p role="button">Details</p>
					</motion.div>
				</Link>
			</div>
		</div>
	)
}
