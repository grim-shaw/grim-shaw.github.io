import Image from "next/image"
import Link from "next/link"
import React from "react"
import Head from "next/head"
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
			className="m-auto mx-auto flex min-h-[24em] w-[90%] flex-col justify-center pt-[8em] text-center align-middle text-primary min-[390px]:w-[85%] sm:w-[80%] md:w-[65%] lg:w-[50%]"
		>
			<Head>
				<title>Projects | {title}</title>
			</Head>
			<div className="ml-0 flex flex-row justify-start text-left font-ubuntu text-[1.1rem] font-semibold md:text-[1.2rem]">
				<span className="underline underline-offset-4">Projects</span>
				&nbsp;{">"}&nbsp;{title}
				<span className="m-auto ml-[1em] inline-block rounded-[0.25em] bg-[#f9731629] px-[0.2em] py-[0.2em] text-center font-ubuntu text-[0.9rem] font-light text-primary">
					{year}
				</span>
			</div>
			<div className="mx-auto mt-[2em] break-words text-justify font-oxygen text-[0.75rem] text-white opacity-85 md:text-[0.8rem]">
				<p className="my-[0.5em] w-[6.5em] rounded-[0.25em] bg-[#f9731629] px-[0.1em] py-[0.1em] text-center font-ubuntu text-[1rem] font-semibold text-primary md:text-[1.1rem]">
					Description
				</p>
				{description}
			</div>
			<div className="mb-[1em] mt-[3em] flex flex-row text-left">
				<p>
					<span className="m-auto inline-block rounded-[0.25em] bg-[#f9731629] px-[0.25em] py-[0.2em] text-center font-ubuntu text-[0.775rem] font-light text-primary sm:text-[0.88rem] md:text-[0.9rem]">
						Source
					</span>
					<span className="mx-[0.5em]">-</span>
					<Link href={githubUrl}>
						<span className="cursor-pointer text-wrap break-words rounded-[0.25em] bg-[#2bbc8a29] px-[0.5em] py-[0.5em] font-oxygen text-[0.65rem] text-secondary hover:underline hover:underline-offset-4 sm:text-[0.75rem] md:text-[0.8rem]">
							{githubUrl}
						</span>
					</Link>
				</p>
			</div>
			{projectUrl ? (
				<div className="mb-[0.5em] flex flex-row text-left">
					<p>
						<span className="m-auto inline-block rounded-[0.25em] bg-[#f9731629] px-[0.25em] py-[0.2em] text-center font-ubuntu font-light  text-primary sm:text-[0.88rem] md:text-[0.9rem]">
							Demo
						</span>
						<span className="mx-[0.5em]">-</span>
						<Link href={projectUrl}>
							<span className="cursor-pointer text-wrap break-words rounded-[0.25em] bg-[#2bbc8a29] px-[0.5em] py-[0.5em] font-oxygen text-[0.8em] text-secondary hover:underline hover:underline-offset-4">
								{projectUrl}
							</span>
						</Link>
					</p>
				</div>
			) : null}
			<div className="mb-[1em] flex flex-row text-left">
				<p>
					<span className="m-auto mr-[0.5em] inline-block rounded-[0.25em] bg-[#f9731629] px-[0.25em] py-[0.2em] text-center font-ubuntu text-[0.8rem] font-light text-primary sm:text-[0.88rem] md:text-[0.9rem]">
						Stack
					</span>
					-
					{stack.map((technology: string) => {
						return (
							<span
								key={technology}
								className="ml-[0.5em] rounded-[0.25em] bg-[#2bbc8a29] px-[0.5em] py-[0.5em] font-oxygen text-[0.65rem] font-semibold text-secondary sm:text-[0.75rem] md:text-[0.8em]"
							>
								{technology}
							</span>
						)
					})}
				</p>
			</div>
			{images && images.length > 0 ? (
				<div className="mx-auto mb-[1em] mt-[2em] flex w-[100%] flex-col justify-center">
					{images.map((image: string) => {
						return (
							<div
								key={image}
								className="relative mb-[1em] h-[20em] overflow-clip shadow-md shadow-black"
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
