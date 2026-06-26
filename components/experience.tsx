import * as React from "react"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import Fade from "@mui/material/Fade"
import Box from "@mui/material/Box"

import experienceData from "@/data/experience.json"

interface TabPanelProps {
	children?: React.ReactNode
	index: number
	value: number
}

interface ExperienceEntry {
	name: string
	period: string
	description: string
	points: string[]
	skillsLabel: string
	technology: string[]
}

const theme = createTheme({
	palette: {
		primary: { main: "#F97316" }
	}
})

const experiences = Object.entries(
	experienceData as Record<string, ExperienceEntry>
)

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
							{experiences.map(([label], index) => (
								<Tab
									key={label}
									label={label}
									{...a11yProps(index)}
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
							))}
						</Tabs>
						{experiences.map(([label, experience], index) => (
							<TabPanel key={label} value={value} index={index}>
								<div className="mb-[1em] w-[100%] text-left font-semibold leading-6 text-primary">
									{experience.name} -{" "}
									<span className="rounded-[0.25em] bg-[#2bbc8a29] px-[0.5em] py-[0.5em] font-ubuntu text-[1em] text-secondary">
										{experience.period}
									</span>
								</div>
								<div className="mb-4 w-[100%] text-wrap break-words text-left">
									{experience.description
										.split("\n")
										.map((line, lineIndex) => (
											<React.Fragment key={lineIndex}>
												{line}
												<br />
											</React.Fragment>
										))}
								</div>
								<div className="w-[100%] text-wrap break-words text-left">
									{experience.points.map(
										(point, pointIndex) => (
											<li
												key={pointIndex}
												className="ml-3"
											>
												<span>{point}</span>
											</li>
										)
									)}
									<div className="mt-[1em] w-[100%] text-left text-primary">
										{experience.skillsLabel}
										<br />
										<p className="mt-[1em] flex w-[100%] flex-row flex-wrap">
											{experience.technology.map(
												(tech, techIndex) => (
													<span
														key={techIndex}
														className="mb-[0.5em] mr-[0.4em] rounded-[0.25em] bg-[#2bbc8a29] px-[0.5em] py-[0.5em] font-ubuntu text-[0.9em] text-secondary"
													>
														{tech}
													</span>
												)
											)}
										</p>
									</div>
								</div>
							</TabPanel>
						))}
					</Box>
				</ThemeProvider>
			</div>
		</div>
	)
}
