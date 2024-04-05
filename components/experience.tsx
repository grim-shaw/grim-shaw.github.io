import * as React from "react"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import Fade from "@mui/material/Fade"
import Box from "@mui/material/Box"

interface TabPanelProps {
	children?: React.ReactNode
	index: number
	value: number
}

const theme = createTheme({
	palette: {
		primary: { main: "#F97316" }
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
			className="font-oxygen text-[0.85rem] w-[100%]"
			{...other}
		>
			{value === index && (
				<Fade in={value === index} timeout={1500}>
					<Box sx={{ p: 3 }}>{children}</Box>
				</Fade>
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
		<div className="m-auto my-[2em] text-center bg-[#202023] flex flex-col justify-center align-middle w-[80%]">
			<p className="font-ubuntu text-primary m-auto mt-[1em] text-[1.3rem] underline underline-offset-4">
				Education & Experience
			</p>
			<div className="flex flex-col justify-center align-middle min-w-[38em] m-auto mt-[1em]">
				<ThemeProvider theme={theme}>
					<Box
						sx={{
							flexGrow: 1,
							bgcolor: "#202023",
							display: "flex",
							minHeight: "22em",
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
								borderColor: "#F97316"
							}}
							TabIndicatorProps={{
								style: {
									backgroundColor: "#F97316",
									color: "#F97316"
								}
							}}
						>
							{/* <Tab
								label="Software Engineer"
								{...a11yProps(0)}
								sx={{
									color: "white",
									fontFamily: "Ubuntu Mono"
								}}
							/> */}
							<Tab
								label="Software Engineering Intern"
								{...a11yProps(0)}
								sx={{
									color: "white",
									fontFamily: "Ubuntu Mono"
								}}
							/>
							<Tab
								label="Computer Science Undergrad"
								{...a11yProps(1)}
								sx={{
									color: "white",
									fontFamily: "Ubuntu Mono"
								}}
							/>
						</Tabs>
						{/* <TabPanel value={value} index={0}>
							<p className="w-[38em] text-left mb-[1em] text-primary font-semibold">
								Software Engineer @ Arbisoft -{" "}
								<span className="font-ubuntu text-[1em] text-secondary px-[0.5em] py-[0.5em] rounded-[0.25em] bg-[#2bbc8a29]">
									June, 2024 -
								</span>
							</p>
							<p className="w-[38em] text-left"></p>
						</TabPanel> */}
						<TabPanel value={value} index={0}>
							<div className="w-[41em] text-left mb-[1em] text-primary font-semibold">
								Full Stack Intern @ ThinkSoft -{" "}
								<span className="font-ubuntu text-[1em] text-secondary px-[0.5em] py-[0.5em] rounded-[0.25em] bg-[#2bbc8a29]">
									March, 2023 - July, 2023
								</span>
							</div>
							<div className="w-[41em] break-words text-wrap text-left">
								Worked on a cutting-edge web development tool
								called WebbsAI that combines drag-and-drop
								functionality with Generative AI assistance to
								simplify website creation process.
							</div>
							<br />
							<div className="w-[41em] break-words text-wrap text-left">
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
								<div className="w-[41em] text-left mt-[1em] text-primary">
									Tech Stack
									<br />
									<p className="w-[100%] mt-[1em] flex flex-row flex-wrap">
										<span className="font-ubuntu text-[0.9em] text-secondary px-[0.5em] py-[0.5em] mr-[0.4em] mb-[0.5em] rounded-[0.25em] bg-[#2bbc8a29]">
											TypeScript
										</span>
										<span className="font-ubuntu text-[0.9em] text-secondary px-[0.5em] py-[0.5em] mr-[0.4em] mb-[0.5em] rounded-[0.25em] bg-[#2bbc8a29]">
											Next JS
										</span>
										<span className="font-ubuntu text-[0.9em] text-secondary px-[0.5em] py-[0.5em] mr-[0.4em] mb-[0.5em] rounded-[0.25em] bg-[#2bbc8a29]">
											Tailwind CSS
										</span>
										<span className="font-ubuntu text-[0.9em] text-secondary px-[0.5em] py-[0.5em] mr-[0.4em] mb-[0.5em] rounded-[0.25em] bg-[#2bbc8a29]">
											MongoDB
										</span>
										<span className="font-ubuntu text-[0.9em] text-secondary px-[0.5em] py-[0.5em] mr-[0.4em] mb-[0.5em] rounded-[0.25em] bg-[#2bbc8a29]">
											Mongoose
										</span>
										<span className="font-ubuntu text-[0.9em] text-secondary px-[0.5em] py-[0.5em] mb-[0.5em] rounded-[0.25em] bg-[#2bbc8a29]">
											Git/Github
										</span>
									</p>
								</div>
							</div>
						</TabPanel>
						<TabPanel value={value} index={1}>
							<div className="w-[41em] text-left mb-[1em] leading-6 text-primary font-semibold">
								Bachelor in Computer Science @ National
								University of Science & Technology (NUST) -{" "}
								<span className="font-ubuntu text-[1em] text-secondary px-[0.5em] py-[0.5em] rounded-[0.25em] bg-[#2bbc8a29]">
									June, 2020 - June, 2024
								</span>
							</div>
							<div className="w-[41em] text-left">
								Studied computer science from School of
								Electrical Engineering and Computer Science
								(SEECS) at NUST. <br />
								Graduated with CGPA of 3.82/4.00. Received
								GPA-Based Academic Scholarship in 7 out of 8
								semsters.
								<br />
								Worked as an Executive in IEEE SEECS in
								Publication chapter for duration of 1 year.{" "}
								<br />
								Final Year Project was &ldquo;Explainable
								Diabetic Retinopathy Severity Grading using Deep
								Learning&rdquo; <br />
							</div>
							<div className="w-[41em] text-left mt-[1em] text-primary">
								Major Courses
								<br />
								<p className="w-[100%] mt-[1em] flex flex-row flex-wrap">
									<span className="font-ubuntu text-[0.9em] text-secondary px-[0.5em] py-[0.5em] mr-[0.4em] mb-[0.5em] rounded-[0.25em] bg-[#2bbc8a29]">
										Data Structures & Algorithms
									</span>
									<span className="font-ubuntu text-[0.9em] text-secondary px-[0.5em] py-[0.5em] mr-[0.4em] mb-[0.5em] rounded-[0.25em] bg-[#2bbc8a29]">
										Database Systems
									</span>
									<span className="font-ubuntu text-[0.9em] text-secondary px-[0.5em] py-[0.5em] mr-[0.4em] mb-[0.5em] rounded-[0.25em] bg-[#2bbc8a29]">
										Operating System
									</span>
									<span className="font-ubuntu text-[0.9em] text-secondary px-[0.5em] py-[0.5em] mb-[0.5em] rounded-[0.25em] bg-[#2bbc8a29]">
										Theory of Automata
									</span>
									<span className="font-ubuntu text-[0.9em] text-secondary px-[0.5em] py-[0.5em] mr-[0.4em] mb-[0.5em] rounded-[0.25em] bg-[#2bbc8a29]">
										Computer Architecture & Assembly
										Language
									</span>
									<span className="font-ubuntu text-[0.9em] text-secondary px-[0.5em] py-[0.5em] mr-[0.4em] mb-[0.5em] rounded-[0.25em] bg-[#2bbc8a29]">
										Artificial Intelligence
									</span>
									<span className="font-ubuntu text-[0.9em] text-secondary px-[0.5em] py-[0.5em] mr-[0.4em] mb-[0.5em] rounded-[0.25em] bg-[#2bbc8a29]">
										Deep Learning
									</span>
								</p>
							</div>
						</TabPanel>
					</Box>
				</ThemeProvider>
			</div>
		</div>
	)
}
