import React from "react"
import { motion } from "framer-motion"
import BlogsList from "@/components/blogsList"
import { createClient } from "contentful"
import Head from "next/head"

const variants = {
	hidden: { opacity: 0, x: 0, y: 20 },
	enter: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: -0, y: 20 }
}

export async function getStaticProps() {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID as string,
		accessToken: process.env.CONTENTFUL_ACCESS_KEY as string
	})

	const res = await client.getEntries({ content_type: "tech-blog" })

	return {
		props: {
			blogs: res.items
		}
	}
}

export default function Blog({ blogs }: any) {
	return (
		<motion.div
			initial={"hidden"}
			animate={"enter"}
			exit={"exit"}
			variants={variants}
			transition={{ duration: 0.4, type: "easeInOut" }}
		>
			<Head>
				<title>Usama Qureshi | Blogs</title>
			</Head>
			<section className="m-auto flex h-[24em] w-[100%] flex-col justify-center pt-[4em] align-middle">
				<div className="relative m-auto h-[20em] w-[100%] text-center">
					<video
						width="100%"
						height="100%"
						autoPlay
						loop
						muted
						preload="none"
						className="absolute inset-0 h-[20em] object-cover opacity-30"
					>
						<source src="/masthead.webm" type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				</div>
				<div className="absolute m-auto w-[100%] text-center text-[#F97316] opacity-90">
					<p className="font-jetbrain text-[2.25rem] font-medium">
						Blog
					</p>
					<p className="m-auto mt-[1em] w-[90%] text-center font-ubuntu text-[0.85rem] text-white md:w-[60%] md:text-[1rem]">
						Welcome to my blog domain where I share personal stories
						about things I&apos;ve learned, projects I&apos;m
						hacking on and just general findings. I also write for
						other publications.
					</p>
				</div>
			</section>
			<section className="m-auto flex w-[100%] flex-col justify-center py-[3em] align-middle">
				<div className="m-auto mb-[1em] flex w-[90%] flex-row text-left min-[390px]:w-[70%]">
					<svg
						stroke="white"
						fill="white"
						strokeWidth="0"
						viewBox="0 0 24 24"
						height="1.25em"
						width="1.25em"
						xmlns="http://www.w3.org/2000/svg"
						className="my-auto"
					>
						<path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 19V5h16l.002 14H4z"></path>
						<path d="M6 7h12v2H6zm0 4h12v2H6zm0 4h6v2H6z"></path>
					</svg>
					<p className="ml-[0.5em] font-ubuntu text-[1.1rem] text-white min-[390px]:text-[1.25rem]">
						Explore All
					</p>
				</div>
				<BlogsList blogs={blogs} />
			</section>
		</motion.div>
	)
}
