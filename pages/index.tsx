import Head from "next/head"
import { motion } from "framer-motion"

import { Intro, Experience, Technologies, ContactSection } from "@/components"

const variants = {
	hidden: { opacity: 0, x: 0, y: 20 },
	enter: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: -0, y: 20 }
}

export default function Home() {
	return (
		<motion.div
			initial={"hidden"}
			animate={"enter"}
			exit={"exit"}
			variants={variants}
			transition={{ duration: 0.4, type: "easeInOut" }}
		>
			<Head>
				<title>Usama Qureshi | Home</title>
			</Head>
			<Intro />
			<Experience />
			<Technologies />
			<ContactSection />
		</motion.div>
	)
}
