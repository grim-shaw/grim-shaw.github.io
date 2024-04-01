import Intro from "@/components/intro"
import Experience from "@/components/experience"
import { motion } from "framer-motion"

export default function Home() {
	return (
		<motion.div
			initial={{ y: 25, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{
				duration: 0.75
			}}
		>
			<Intro />
			<Experience />
		</motion.div>
	)
}
