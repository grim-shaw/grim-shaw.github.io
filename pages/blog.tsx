import React from "react"
import { motion } from "framer-motion"
import Blogs from "@/components/blogs"

export default function Blog() {
	return (
		<motion.div
			initial={{ y: 25, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{
				duration: 0.75
			}}
		>
			<section className="flex flex-col justify-center align-middle m-auto w-[100%] h-[24em] pt-[4em]">
				<div className="m-auto text-center w-[100%] h-[20em] relative">
					<video
						width="100%"
						height="100%"
						autoPlay
						loop
						muted
						preload="none"
						className="inset-0 opacity-30 object-cover absolute h-[20em]"
					>
						<source src="/masthead.webm" type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				</div>
				<div className="m-auto text-center w-[100%] text-[#F97316] absolute opacity-90">
					<p className="text-[2.25rem] font-jetbrain font-medium">
						Blog
					</p>
					<p className="text-white text-[1rem] font-ubuntu m-auto text-center mt-[1em] w-[60%]">
						Welcome to my blog domain where I share personal stories
						about things I&apos;ve learned, projects I&apos;m
						hacking on and just general findings. I also write for
						other publications.
					</p>
				</div>
			</section>
			<section className="flex flex-col justify-center align-middle m-auto w-[100%] py-[3em]">
				<div className="m-auto flex flex-row text-left w-[70%] mb-[1em]">
					<svg
						stroke="white"
						fill="white"
						stroke-width="0"
						viewBox="0 0 24 24"
						height="1.25em"
						width="1.25em"
						xmlns="http://www.w3.org/2000/svg"
						className="my-auto"
					>
						<path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 19V5h16l.002 14H4z"></path>
						<path d="M6 7h12v2H6zm0 4h12v2H6zm0 4h6v2H6z"></path>
					</svg>
					<p className="text-[1.25rem] font-ubuntu text-white ml-[0.5em]">
						Explore All
					</p>
				</div>
				<Blogs />
			</section>
		</motion.div>
	)
}
