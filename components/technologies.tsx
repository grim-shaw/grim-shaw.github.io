import technologiesData from "@/data/technologies.json"

export default function Technologies() {
	return (
		<div className="m-auto my-[2em] flex w-[95%] flex-col align-middle text-[1rem] min-[768px]:w-[85%] min-[1025px]:w-[75%] min-[1441px]:w-[50%]">
			<div className="m-auto my-[1em] text-center font-ubuntu text-[1.2rem] text-primary underline underline-offset-4 md:text-[1.3rem]">
				Tools & Technologies
			</div>
			<div className="mx-auto flex w-[95%] flex-col min-[425px]:w-[80%] min-[768px]:w-[80%] min-[1024px]:w-[72.5%] min-[1440px]:w-[60%]">
				{Object.entries(technologiesData).map(([category, stack]) => (
					<div
						key={category}
						className="flex flex-row justify-start pt-[0.5em]"
					>
						<div className="w-[7em]">
							<span className="m-auto inline-block w-[7em] rounded-[0.25em] bg-[#f9731629] px-[0.4em] py-[0.4em] text-center font-ubuntu text-[0.7rem] font-semibold text-primary md:text-[0.9rem]">
								{category}
							</span>
						</div>
						<div className="ml-[1em] flex w-[100%] flex-row flex-wrap justify-start gap-2 font-ubuntu text-[0.7rem] text-secondary md:text-[0.9rem]">
							{stack.map(tech => (
								<span
									key={tech}
									className="rounded-[0.25em] bg-[#2bbc8a29] px-[0.4em] py-[0.4em]"
								>
									{tech}
								</span>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
