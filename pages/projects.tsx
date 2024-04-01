import React from "react"
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
			<div className="flex flex-col justify-center align-middle m-auto">
				<div className="m-auto text-center mt-[6em]">
					<p className="text-white text-[1.25rem] font-jetbrain">
						Projects
					</p>
				</div>
				<Catalogue />
			</div>
		</motion.div>
	)
}
