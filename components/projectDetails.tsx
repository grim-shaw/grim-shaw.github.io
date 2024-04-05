import Image from "next/image"
import Link from "next/link"
import React from "react"
import { motion } from "framer-motion"

const variants = {
	hidden: { opacity: 0, x: 0, y: 20 },
	enter: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: -0, y: 20 }
}

export default function ProjectDetails({ project }: any) {
	const { title, projectUrl, githubUrl, description, year, images, stack } =
		project
	return (
		<motion.div
			initial={"hidden"}
			animate={"enter"}
			exit={"exit"}
			variants={variants}
			transition={{ duration: 0.4, type: "easeInOut" }}
			className="text-primary text-center flex flex-col justify-center align-middle m-auto w-[50%] mx-auto min-h-[24em] pt-[8em]"
		>
			<div className="text-left font-ubuntu font-semibold text-[1.2rem] px-[2.8em] flex flex-row">
				<span className="underline underline-offset-4">Projects</span>
				&nbsp;{">"}&nbsp;{title}
				<span className="text-primary bg-[#f9731629] font-ubuntu font-light text-[0.9rem] m-auto ml-[1em] px-[0.2em] py-[0.2em] text-center rounded-[0.25em] inline-block">
					{year}
				</span>
			</div>
			<div className="font-oxygen break-words text-justify text-[0.8rem] mt-[2em] text-white opacity-85 pl-[4em]">
				<p className="font-ubuntu bg-[#f9731629] text-primary text-[1.1rem] px-[0.1em] py-[0.1em] rounded-[0.25em] font-semibold my-[0.5em] w-[6.5em] text-center">
					Description
				</p>
				{description}
			</div>
			<div className="text-left flex flex-row px-[3em] mt-[3em] mb-[1em]">
				<p>
					<span className="text-primary mr-[0.5em] bg-[#f9731629] font-ubuntu font-light text-[0.9rem] m-auto px-[0.25em] py-[0.2em] text-center rounded-[0.25em] inline-block">
						Source
					</span>
					-
					<Link href={githubUrl}>
						<span className="ml-[0.5em] text-[0.8em] font-oxygen text-secondary px-[0.5em] py-[0.5em] rounded-[0.25em] bg-[#2bbc8a29] hover:underline hover:underline-offset-4 cursor-pointer">
							{githubUrl}
						</span>
					</Link>
				</p>
			</div>
			{projectUrl ? (
				<div className="text-left flex flex-row px-[3em] mb-[0.5em]">
					<p>
						<span className="text-primary mr-[0.5em] bg-[#f9731629] font-ubuntu font-light text-[0.9rem] m-auto px-[0.25em] py-[0.2em] text-center rounded-[0.25em] inline-block">
							Demo
						</span>
						-
						<Link href={projectUrl}>
							<span className="ml-[0.5em] text-[0.8em] font-oxygen text-secondary px-[0.5em] py-[0.5em] rounded-[0.25em] bg-[#2bbc8a29] hover:underline hover:underline-offset-4 cursor-pointer">
								{projectUrl}
							</span>
						</Link>
					</p>
				</div>
			) : null}
			<div className="text-left flex flex-row px-[3em] mb-[1em]">
				<p>
					<span className="text-primary mr-[0.5em] bg-[#f9731629] font-ubuntu font-light text-[0.9rem] m-auto px-[0.25em] py-[0.2em] text-center rounded-[0.25em] inline-block">
						Stack
					</span>
					-
					{stack.map((technology: string) => {
						return (
							<span
								key={technology}
								className="ml-[0.5em] font-semibold text-[0.8em] font-oxygen text-secondary px-[0.5em] py-[0.5em] rounded-[0.25em] bg-[#2bbc8a29]"
							>
								{technology}
							</span>
						)
					})}
				</p>
			</div>
			{images && images.length > 0 ? (
				<div className="flex flex-col w-[100%] mt-[2em] mb-[1em] pl-[3em] mx-auto justify-center">
					{images.map((image: string) => {
						return (
							<div
								key={image}
								className="h-[20em] overflow-clip relative mb-[1em] shadow-md shadow-black"
							>
								<Image
									src={image}
									layout={"fill"}
									style={{ objectFit: "cover" }}
									alt={"project images"}
								/>
							</div>
						)
					})}
				</div>
			) : null}
		</motion.div>
	)
}
