import Image from "next/image"
import React from "react"

export default function Technologies() {
	return (
		<div className="m-auto my-[2em] flex w-[95%] flex-col align-middle text-[1rem] min-[768px]:w-[85%] min-[1025px]:w-[75%] min-[1441px]:w-[50%]">
			<div className="m-auto my-[1em] text-center font-ubuntu text-[1.2rem] text-primary underline underline-offset-4 md:text-[1.3rem]">
				Tools & Technologies
			</div>
			<div className="mx-auto flex w-[95%] flex-col min-[425px]:w-[80%] min-[768px]:w-[80%] min-[1024px]:w-[72.5%] min-[1440px]:w-[60%]">
				<div className="flex flex-row justify-start pt-[0.5em]">
					<div className="w-[7em]">
						<span className="m-auto inline-block w-[7em] rounded-[0.25em] bg-[#f9731629] px-[0.4em] py-[0.4em] text-center font-ubuntu text-[0.7rem] font-semibold text-primary md:text-[0.9rem]">
							LANGUAGES
						</span>
					</div>
					<div className="ml-[1em] flex w-[100%] flex-row flex-wrap justify-start gap-2 font-ubuntu text-[0.7rem] text-secondary md:text-[0.9rem]">
						<span className="rounded-[0.25em] bg-[#2bbc8a29] px-[0.4em] py-[0.4em]">
							Python
						</span>
						<span className="rounded-[0.25em] bg-[#2bbc8a29] px-[0.4em] py-[0.4em]">
							JavaScript
						</span>
						<span className="rounded-[0.25em] bg-[#2bbc8a29] px-[0.4em] py-[0.4em]">
							TypeScript
						</span>
					</div>
				</div>
				<div className="flex flex-row justify-start pt-[0.5em]">
					<div className="w-[7em]">
						<span className="m-auto inline-block w-[7em] rounded-[0.25em] bg-[#f9731629] px-[0.4em] py-[0.4em] text-center font-ubuntu text-[0.7rem] font-semibold text-primary md:text-[0.9rem]">
							ML/DL
						</span>
					</div>
					<div className="ml-[1em] flex w-[100%] flex-row flex-wrap justify-start gap-2 font-ubuntu text-[0.7rem] text-secondary md:text-[0.9rem]">
						<span className="inline-block rounded-[0.25em] bg-[#2bbc8a29] px-[0.4em] py-[0.4em]">
							Numpy
						</span>
						<span className="rounded-[0.25em] bg-[#2bbc8a29] px-[0.4em] py-[0.4em]">
							Pandas
						</span>
						<span className="rounded-[0.25em] bg-[#2bbc8a29] px-[0.4em] py-[0.4em]">
							Matplotlib/Seaborn
						</span>
						<span className="rounded-[0.25em] bg-[#2bbc8a29] px-[0.4em] py-[0.4em]">
							Scikit-learn
						</span>
						<span className="rounded-[0.25em] bg-[#2bbc8a29] px-[0.4em] py-[0.4em]">
							PyTorch
						</span>
						<span className="rounded-[0.25em] bg-[#2bbc8a29] px-[0.4em] py-[0.4em]">
							Optuna
						</span>
					</div>
				</div>
				<div className="flex flex-row justify-start pt-[0.5em]">
					<div className="w-[7em]">
						<span className="m-auto inline-block w-[7em] rounded-[0.25em] bg-[#f9731629] px-[0.4em] py-[0.4em] text-center font-ubuntu text-[0.7rem] font-semibold text-primary md:text-[0.9rem]">
							WEB
						</span>
					</div>
					<div className="ml-[1em] flex w-[100%] flex-row flex-wrap justify-start gap-2 font-ubuntu text-[0.7rem] text-secondary md:text-[0.9rem]">
						<span className="rounded-[0.25em] bg-[#2bbc8a29] px-[0.4em] py-[0.4em]">
							React
						</span>
						<span className="rounded-[0.25em] bg-[#2bbc8a29] px-[0.4em] py-[0.4em]">
							Node
						</span>
						<span className="rounded-[0.25em] bg-[#2bbc8a29] px-[0.4em] py-[0.4em]">
							Express
						</span>
						<span className="rounded-[0.25em] bg-[#2bbc8a29] px-[0.4em] py-[0.4em]">
							Next JS
						</span>
						<span className="rounded-[0.25em] bg-[#2bbc8a29] px-[0.4em] py-[0.4em]">
							Django
						</span>
						<span className="rounded-[0.25em] bg-[#2bbc8a29] px-[0.4em] py-[0.4em]">
							Tailwind CSS
						</span>
					</div>
				</div>
				<div className="flex flex-row justify-start pt-[0.5em]">
					<div className="w-[7em]">
						<span className="m-auto inline-block w-[7em] rounded-[0.25em] bg-[#f9731629] px-[0.4em] py-[0.4em] text-center font-ubuntu text-[0.7rem] font-semibold text-primary md:text-[0.9rem]">
							DATABASE
						</span>
					</div>
					<div className="ml-[1em] flex w-[100%] flex-row flex-wrap justify-start gap-2 font-ubuntu text-[0.7rem] text-secondary md:text-[0.9rem]">
						<span className="rounded-[0.25em] bg-[#2bbc8a29] px-[0.4em] py-[0.4em]">
							MySQL
						</span>
						<span className="rounded-[0.25em] bg-[#2bbc8a29] px-[0.4em] py-[0.4em]">
							Sequelize
						</span>
						<span className="rounded-[0.25em] bg-[#2bbc8a29] px-[0.4em] py-[0.4em]">
							MongoDB
						</span>
						<span className="rounded-[0.25em] bg-[#2bbc8a29] px-[0.4em] py-[0.4em]">
							Mongoose
						</span>
					</div>
				</div>
				<div className="flex flex-row justify-start pt-[0.5em]">
					<div className="w-[7em]">
						<span className="m-auto inline-block w-[7em] rounded-[0.25em] bg-[#f9731629] px-[0.4em] py-[0.4em] text-center font-ubuntu text-[0.7rem] font-semibold text-primary md:text-[0.9rem]">
							TOOLS
						</span>
					</div>
					<div className="ml-[1em] flex w-[100%] flex-row flex-wrap justify-start gap-2 font-ubuntu text-[0.7rem] text-secondary md:text-[0.9rem]">
						<span className="rounded-[0.25em] bg-[#2bbc8a29] px-[0.4em] py-[0.4em]">
							Git
						</span>
						<span className="rounded-[0.25em] bg-[#2bbc8a29] px-[0.4em] py-[0.4em]">
							Github
						</span>
						<span className="rounded-[0.25em] bg-[#2bbc8a29] px-[0.4em] py-[0.4em]">
							Github Actions
						</span>
					</div>
				</div>
				<div className="flex flex-row justify-start pt-[0.5em]">
					<div className="w-[7em]">
						<span className="m-auto inline-block w-[7em] rounded-[0.25em] bg-[#f9731629] px-[0.4em] py-[0.4em] text-center font-ubuntu text-[0.7rem] font-semibold text-primary md:text-[0.9rem]">
							TESTING
						</span>
					</div>
					<div className="ml-[1em] flex w-[100%] flex-row flex-wrap justify-start gap-2 font-ubuntu text-[0.7rem] text-secondary md:text-[0.9rem]">
						<span className="rounded-[0.25em] bg-[#2bbc8a29] px-[0.4em] py-[0.4em]">
							Cypress
						</span>
						<span className="rounded-[0.25em] bg-[#2bbc8a29] px-[0.4em] py-[0.4em]">
							Postman
						</span>
					</div>
				</div>
				<div className="flex flex-row justify-start pt-[0.5em]">
					<div className="w-[7em]">
						<span className="m-auto inline-block w-[7em] rounded-[0.25em] bg-[#f9731629] px-[0.4em] py-[0.4em] text-center font-ubuntu text-[0.7rem] font-semibold text-primary md:text-[0.9rem]">
							DEPLOYMENT
						</span>
					</div>
					<div className="ml-[1em] flex w-[100%] flex-row flex-wrap justify-start gap-2 font-ubuntu text-[0.7rem] text-secondary md:text-[0.9rem]">
						<span className="rounded-[0.25em] bg-[#2bbc8a29] px-[0.4em] py-[0.4em]">
							Vercel
						</span>
						<span className="rounded-[0.25em] bg-[#2bbc8a29] px-[0.4em] py-[0.4em]">
							Github Pages
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}
