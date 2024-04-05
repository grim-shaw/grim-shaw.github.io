import Intro from "@/components/intro"
import Experience from "@/components/experience"
import Technologies from "@/components/technologies"
import { motion } from "framer-motion"

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
			<Intro />
			<Experience />
			<Technologies />
		</motion.div>
	)
}
