import React from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Catalogue from "@/components/catalogue"
import { motion } from "framer-motion"

export default function Projects() {
	return (
		<motion.div
			initial={{ y: 25, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{
				duration: 0.75
			}}
		>
			<Navbar />
			<div className="m-auto text-center">
				<p className="text-white text-[1.25rem] font-jetbrain my-[2em]">
					Projects
				</p>
			</div>
			<Catalogue />
			<Footer />
		</motion.div>
	)
}
