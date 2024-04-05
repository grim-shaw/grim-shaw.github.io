import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;500;700&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Oxygen+Mono&family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
					rel="stylesheet"
				/>
				<link rel="icon" href="/favicon.jpg" sizes="any" />
			</Head>
			<body className="bg-[#202023]">
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
