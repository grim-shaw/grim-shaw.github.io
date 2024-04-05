import Image from "next/image"
import React from "react"

export default function Technologies() {
	return (
		<div className="w-[50%] flex flex-col justify-start m-auto my-[2em]">
			<div className="font-ubuntu text-primary m-auto my-[1em] text-[1.3rem]">
				Tools & Technologies
			</div>
			<div className="flex flex-row justify-start pl-[3em] pt-[0.5em]">
				<div className="w-[7.4em]">
					<span className="text-primary bg-[#f9731629] font-ubuntu font-semibold text-[0.9rem] m-auto ml-[1em] px-[0.4em] py-[0.4em] text-center rounded-[0.25em] inline-block">
						LANGUAGES
					</span>
					<span className="text-white mx-[0.25em]">-</span>&nbsp;
				</div>
				<div className="flex flex-row flex-wrap justify-center gap-2">
					<span className="font-ubuntu text-[0.9em] text-secondary px-[0.4em] py-[0.4em] rounded-[0.25em] bg-[#2bbc8a29]">
						Python
					</span>
					<span className="font-ubuntu text-[0.9em] text-secondary px-[0.4em] py-[0.4em] rounded-[0.25em] bg-[#2bbc8a29]">
						JavaScript
					</span>
					<span className="font-ubuntu text-[0.9em] text-secondary px-[0.4em] py-[0.4em] rounded-[0.25em] bg-[#2bbc8a29]">
						TypeScript
					</span>
				</div>
			</div>
			<div className="flex flex-row justify-start pl-[3em] pt-[0.5em]">
				<div className="w-[8.35em]">
					<span className="text-primary bg-[#f9731629] font-ubuntu font-semibold text-[0.9rem] m-auto ml-[1em] px-[0.4em] py-[0.4em] text-center rounded-[0.25em]">
						ML/DL
					</span>
					<span className="text-white mx-[0.25em]">-</span>&nbsp;
				</div>
				<div className="flex flex-row flex-wrap justify-start gap-2 ">
					<span className="font-ubuntu text-[0.9em] text-secondary px-[0.4em] py-[0.4em] rounded-[0.25em] bg-[#2bbc8a29]">
						Numpy
					</span>
					<span className="font-ubuntu text-[0.9em] text-secondary px-[0.4em] py-[0.4em] rounded-[0.25em] bg-[#2bbc8a29]">
						Pandas
					</span>
					<span className="font-ubuntu text-[0.9em] text-secondary px-[0.4em] py-[0.4em] rounded-[0.25em] bg-[#2bbc8a29]">
						Matplotlib/Seaborn
					</span>
					<span className="font-ubuntu text-[0.9em] text-secondary px-[0.4em] py-[0.4em] rounded-[0.25em] bg-[#2bbc8a29]">
						Scikit-learn
					</span>
					<span className="font-ubuntu text-[0.9em] text-secondary px-[0.4em] py-[0.4em] rounded-[0.25em] bg-[#2bbc8a29]">
						PyTorch
					</span>
					<span className="font-ubuntu text-[0.9em] text-secondary px-[0.4em] py-[0.4em] rounded-[0.25em] bg-[#2bbc8a29]">
						Optuna
					</span>
				</div>
			</div>
			<div className="flex flex-row justify-start pl-[3em] pt-[0.5em]">
				<div className="w-[7.5em]">
					<span className="text-primary bg-[#f9731629] font-ubuntu font-semibold text-[0.9rem] m-auto ml-[1em] px-[0.4em] py-[0.4em] text-center rounded-[0.25em] inline-block">
						WEB
					</span>
					<span className="text-white mx-[0.25em]">-</span>&nbsp;
				</div>
				<div className="flex flex-row flex-wrap justify-center gap-x-2">
					<span className="font-ubuntu text-[0.9em] text-secondary px-[0.4em] py-[0.4em] rounded-[0.25em] bg-[#2bbc8a29]">
						React
					</span>
					<span className="font-ubuntu text-[0.9em] text-secondary px-[0.4em] py-[0.4em] rounded-[0.25em] bg-[#2bbc8a29]">
						Node
					</span>
					<span className="font-ubuntu text-[0.9em] text-secondary px-[0.4em] py-[0.4em] rounded-[0.25em] bg-[#2bbc8a29]">
						Express
					</span>
					<span className="font-ubuntu text-[0.9em] text-secondary px-[0.4em] py-[0.4em] rounded-[0.25em] bg-[#2bbc8a29]">
						Next JS
					</span>
					<span className="font-ubuntu text-[0.9em] text-secondary px-[0.4em] py-[0.4em] rounded-[0.25em] bg-[#2bbc8a29]">
						Django
					</span>
					<span className="font-ubuntu text-[0.9em] text-secondary px-[0.4em] py-[0.4em] rounded-[0.25em] bg-[#2bbc8a29]">
						Tailwind CSS
					</span>
				</div>
			</div>
			<div className="flex flex-row justify-start pl-[3em] pt-[0.5em]">
				<div className="w-[7.5em]">
					<span className="text-primary bg-[#f9731629] font-ubuntu font-semibold text-[0.9rem] m-auto ml-[1em] px-[0.4em] py-[0.4em] text-center rounded-[0.25em] inline-block">
						DATABASE
					</span>
					<span className="text-white mx-[0.25em]">-</span>&nbsp;
				</div>
				<div className="flex flex-row flex-wrap justify-center gap-x-2">
					<span className="font-ubuntu text-[0.9em] text-secondary px-[0.4em] py-[0.4em] rounded-[0.25em] bg-[#2bbc8a29]">
						MySQL
					</span>
					<span className="font-ubuntu text-[0.9em] text-secondary px-[0.4em] py-[0.4em] rounded-[0.25em] bg-[#2bbc8a29]">
						Sequelize
					</span>
					<span className="font-ubuntu text-[0.9em] text-secondary px-[0.4em] py-[0.4em] rounded-[0.25em] bg-[#2bbc8a29]">
						MongoDB
					</span>
					<span className="font-ubuntu text-[0.9em] text-secondary px-[0.4em] py-[0.4em] rounded-[0.25em] bg-[#2bbc8a29]">
						Mongoose
					</span>
				</div>
			</div>
			<div className="flex flex-row justify-start pl-[3em] pt-[0.5em]">
				<div className="w-[7.5em]">
					<span className="text-primary bg-[#f9731629] font-ubuntu font-semibold text-[0.9rem] m-auto ml-[1em] px-[0.4em] py-[0.4em] text-center rounded-[0.25em] inline-block">
						TOOLS
					</span>
					<span className="text-white mx-[0.25em]">-</span>&nbsp;
				</div>
				<div className="flex flex-row flex-wrap justify-center gap-x-2">
					<span className="font-ubuntu text-[0.9em] text-secondary px-[0.4em] py-[0.4em] rounded-[0.25em] bg-[#2bbc8a29]">
						Git
					</span>
					<span className="font-ubuntu text-[0.9em] text-secondary px-[0.4em] py-[0.4em] rounded-[0.25em] bg-[#2bbc8a29]">
						Github
					</span>
					<span className="font-ubuntu text-[0.9em] text-secondary px-[0.4em] py-[0.4em] rounded-[0.25em] bg-[#2bbc8a29]">
						Github Actions
					</span>
				</div>
			</div>
			<div className="flex flex-row justify-start pl-[3em] pt-[0.5em]">
				<div className="w-[7.5em]">
					<span className="text-primary bg-[#f9731629] font-ubuntu font-semibold text-[0.9rem] m-auto ml-[1em] px-[0.4em] py-[0.4em] text-center rounded-[0.25em] inline-block">
						TESTING
					</span>
					<span className="text-white mx-[0.25em]">-</span>&nbsp;
				</div>
				<div className="flex flex-row flex-wrap justify-center gap-x-2">
					<span className="font-ubuntu text-[0.9em] text-secondary px-[0.4em] py-[0.4em] rounded-[0.25em] bg-[#2bbc8a29]">
						Cypress
					</span>
					<span className="font-ubuntu text-[0.9em] text-secondary px-[0.4em] py-[0.4em] rounded-[0.25em] bg-[#2bbc8a29]">
						Postman
					</span>
				</div>
			</div>
			<div className="flex flex-row justify-start pl-[3em] pt-[0.5em]">
				<div className="w-[7.5em]">
					<span className="text-primary bg-[#f9731629] font-ubuntu font-semibold text-[0.9rem] m-auto ml-[1em] px-[0.4em] py-[0.4em] text-center rounded-[0.25em] inline-block">
						DEPLOYMENT
					</span>
					<span className="text-white mx-[0.25em]">-</span>&nbsp;
				</div>
				<div className="flex flex-row flex-wrap justify-center gap-x-2">
					<span className="font-ubuntu text-[0.9em] text-secondary px-[0.4em] py-[0.4em] rounded-[0.25em] bg-[#2bbc8a29]">
						Vercel
					</span>
					<span className="font-ubuntu text-[0.9em] text-secondary px-[0.4em] py-[0.4em] rounded-[0.25em] bg-[#2bbc8a29]">
						Github Pages
					</span>
				</div>
			</div>
		</div>
	)
}
