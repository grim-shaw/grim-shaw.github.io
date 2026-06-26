import "@/styles/globals.css"
import type { AppProps } from "next/app"
import Head from "next/head"
import { useRouter } from "next/router"
import { motion, AnimatePresence } from "framer-motion"
import { Navbar, Footer } from "@/components"

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter()

	return (
		<>
			<Head>
				<title>Usama Qureshi</title>
			</Head>
			<Navbar />
			<AnimatePresence mode="wait">
				<motion.div
					key={router.route}
					initial="initialState"
					animate="animateState"
					exit="exitState"
					transition={{
						duration: 1.5
					}}
					variants={{
						initialState: {
							opacity: 0
						},
						animateState: {
							opacity: 1
						},
						exitState: {}
					}}
					className="base-page-size"
				>
					<Component {...pageProps} />
				</motion.div>
			</AnimatePresence>
			<Footer />
		</>
	)
}
