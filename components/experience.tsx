import * as React from "react"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Typography from "@mui/material/Typography"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import Box from "@mui/material/Box"

interface TabPanelProps {
	children?: React.ReactNode
	index: number
	value: number
}

const theme = createTheme({
	palette: {
		primary: { main: "#2bbc8a" }
	}
})

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			className="font-ubuntu color-[]"
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					{/* <Typography>{children}</Typography> */}
					{children}
				</Box>
			)}
		</div>
	)
}

function a11yProps(index: number) {
	return {
		id: `vertical-tab-${index}`,
		"aria-controls": `vertical-tabpanel-${index}`
	}
}

export default function Experience() {
	const [value, setValue] = React.useState(0)

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue)
	}

	return (
		<div className="m-auto my-[2em] text-center bg-[#202023] flex flex-col justify-center align-middle">
			<p className="font-ubuntu text-[#2bbc8a] m-auto mt-[1em] text-[1.25rem]">
				Experience
			</p>
			<div className="flex flex-col justify-center align-middle min-w-[35em] m-auto mt-[1em]">
				<ThemeProvider theme={theme}>
					<Box
						sx={{
							flexGrow: 1,
							bgcolor: "#202023",
							display: "flex",
							minHeight: "24em",
							color: "white"
						}}
					>
						<Tabs
							orientation="vertical"
							value={value}
							onChange={handleChange}
							aria-label="Work Experiences"
							sx={{
								borderRight: 1,
								borderColor: "#2bbc8a"
							}}
							TabIndicatorProps={{
								style: {
									backgroundColor: "#2bbc8a",
									color: "#2bbc8a"
								}
							}}
						>
							<Tab
								label="ThinkSoft"
								{...a11yProps(0)}
								sx={{
									color: "white",
									fontFamily: "Ubuntu Mono"
								}}
							/>
							<Tab
								label="Arbisoft"
								{...a11yProps(1)}
								sx={{
									color: "white",
									fontFamily: "Ubuntu Mono"
								}}
							/>
						</Tabs>
						<TabPanel value={value} index={0}>
							<p className="w-[30em] break-words text-wrap text-left">
								Worked as Full-Stack Intern on a cutting-edge
								web development tool called WebbsAI that
								combines drag-and-drop functionality with
								Generative AI assistance to simplify website
								creation process.
							</p>
							<br />
							<div className="w-[30em] break-words text-wrap text-left">
								<li>
									<span>
										Implemented secure and efficient API
										endpoints using the
										&apos;next-connect&apos; package.
									</span>
								</li>
								<li>
									<span>
										Added a comprehensive SEO and OpenGraph
										settings feature with SERP preview for
										websites created using WebbsAI.
									</span>
								</li>
								<li>
									<span>
										Introduced a feature for wrapping
										selected text with typography components
										in web editor.
									</span>
								</li>
								<li>
									<span>
										Leveraged TypeScript to ensure type
										safety and produce robust code,
										enhancing reliability and
										maintainability.
									</span>
								</li>
								<li>
									<span>
										Developed WebbsAI product website using
										Next.js, Tailwind CSS, and TypeScript.
									</span>
								</li>
							</div>
						</TabPanel>
						<TabPanel value={value} index={1}>
							<p className="w-[30em] text-left">
								Starting in June, 2024
							</p>
						</TabPanel>
					</Box>
				</ThemeProvider>
			</div>
		</div>
	)
}
