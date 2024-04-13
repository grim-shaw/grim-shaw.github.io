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
			className="w-[75%] font-oxygen text-[0.7rem] sm:text-[0.75rem] md:text-[0.8rem] lg:text-[0.85rem]"
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
		<div className="m-auto my-[2em] flex w-[100%] flex-col justify-center text-wrap bg-[#202023] text-center align-middle min-[390px]:w-[90%] sm:w-[80%] md:w-[70%] min-[1024px]:w-[60%] min-[1440px]:w-[50%]">
			<p className="m-auto mt-[1em] w-[100%] font-ubuntu text-[1.2rem] text-primary underline underline-offset-4 md:text-[1.3rem]">
				Education & Experience
			</p>
			<div className="m-auto mt-[1em] flex w-[100%] flex-col justify-center align-middle ">
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
								borderColor: "#F97316",
								width: "25%"
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
									fontFamily: "Ubuntu Mono",
									fontSize: "0.875rem",
									width: "100%",
									paddingLeft: "2px",
									wordWrap: "break-word",
									"@media (max-width: 600px)": {
										fontSize: "0.8rem"
									},
									"@media (max-width: 450px)": {
										fontSize: "0.7rem"
									}
								}}
							/>
							<Tab
								label="Computer Science Undergrad"
								{...a11yProps(1)}
								sx={{
									color: "white",
									fontFamily: "Ubuntu Mono",
									fontSize: "0.875rem",
									width: "100%",
									paddingLeft: "2px",
									wordWrap: "break-word",
									"@media (max-width: 600px)": {
										fontSize: "0.8rem"
									},
									"@media (max-width: 450px)": {
										fontSize: "0.7rem"
									}
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
							<div className="mb-[1em] w-[100%] text-left font-semibold leading-6 text-primary">
								Full Stack Intern @ ThinkSoft -{" "}
								<span className="rounded-[0.25em] bg-[#2bbc8a29] px-[0.5em] py-[0.5em] font-ubuntu text-[1em] text-secondary">
									March, 2023 - July, 2023
								</span>
							</div>
							<div className="w-[100%] text-wrap break-words text-left">
								Worked on a cutting-edge web development tool
								called WebbsAI that combines drag-and-drop
								functionality with Generative AI assistance to
								simplify website creation process.
							</div>
							<br />
							<div className="w-[100%] text-wrap break-words text-left">
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
								<div className="mt-[1em] w-[100%] text-left text-primary">
									Tech Stack
									<br />
									<p className="mt-[1em] flex w-[100%] flex-row flex-wrap">
										<span className="mb-[0.5em] mr-[0.4em] rounded-[0.25em] bg-[#2bbc8a29] px-[0.5em] py-[0.5em] font-ubuntu text-[0.9em] text-secondary">
											TypeScript
										</span>
										<span className="mb-[0.5em] mr-[0.4em] rounded-[0.25em] bg-[#2bbc8a29] px-[0.5em] py-[0.5em] font-ubuntu text-[0.9em] text-secondary">
											Next JS
										</span>
										<span className="mb-[0.5em] mr-[0.4em] rounded-[0.25em] bg-[#2bbc8a29] px-[0.5em] py-[0.5em] font-ubuntu text-[0.9em] text-secondary">
											Tailwind CSS
										</span>
										<span className="mb-[0.5em] mr-[0.4em] rounded-[0.25em] bg-[#2bbc8a29] px-[0.5em] py-[0.5em] font-ubuntu text-[0.9em] text-secondary">
											MongoDB
										</span>
										<span className="mb-[0.5em] mr-[0.4em] rounded-[0.25em] bg-[#2bbc8a29] px-[0.5em] py-[0.5em] font-ubuntu text-[0.9em] text-secondary">
											Mongoose
										</span>
										<span className="mb-[0.5em] rounded-[0.25em] bg-[#2bbc8a29] px-[0.5em] py-[0.5em] font-ubuntu text-[0.9em] text-secondary">
											Git/Github
										</span>
									</p>
								</div>
							</div>
						</TabPanel>
						<TabPanel value={value} index={1}>
							<div className="mb-[1em] w-[100%] text-left font-semibold leading-6 text-primary">
								Bachelor in Computer Science @ National
								University of Science & Technology (NUST) -{" "}
								<span className="rounded-[0.25em] bg-[#2bbc8a29] px-[0.5em] py-[0.5em] font-ubuntu text-[1em] text-secondary">
									June, 2020 - June, 2024
								</span>
							</div>
							<div className="w-[100%] text-left">
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
							<div className="mt-[1em] w-[100%] text-left text-primary">
								Major Courses
								<br />
								<p className="mt-[1em] flex w-[100%] flex-row flex-wrap">
									<span className="mb-[0.5em] mr-[0.4em] rounded-[0.25em] bg-[#2bbc8a29] px-[0.5em] py-[0.5em] font-ubuntu text-[0.9em] text-secondary">
										Data Structures & Algorithms
									</span>
									<span className="mb-[0.5em] mr-[0.4em] rounded-[0.25em] bg-[#2bbc8a29] px-[0.5em] py-[0.5em] font-ubuntu text-[0.9em] text-secondary">
										Database Systems
									</span>
									<span className="mb-[0.5em] mr-[0.4em] rounded-[0.25em] bg-[#2bbc8a29] px-[0.5em] py-[0.5em] font-ubuntu text-[0.9em] text-secondary">
										Operating System
									</span>
									<span className="mb-[0.5em] rounded-[0.25em] bg-[#2bbc8a29] px-[0.5em] py-[0.5em] font-ubuntu text-[0.9em] text-secondary">
										Theory of Automata
									</span>
									<span className="mb-[0.5em] mr-[0.4em] rounded-[0.25em] bg-[#2bbc8a29] px-[0.5em] py-[0.5em] font-ubuntu text-[0.9em] text-secondary">
										Computer Architecture & Assembly
										Language
									</span>
									<span className="mb-[0.5em] mr-[0.4em] rounded-[0.25em] bg-[#2bbc8a29] px-[0.5em] py-[0.5em] font-ubuntu text-[0.9em] text-secondary">
										Artificial Intelligence
									</span>
									<span className="mb-[0.5em] mr-[0.4em] rounded-[0.25em] bg-[#2bbc8a29] px-[0.5em] py-[0.5em] font-ubuntu text-[0.9em] text-secondary">
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
