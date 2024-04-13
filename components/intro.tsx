import Image from "next/image"
import React from "react"

export default function Intro() {
	return (
		<div className="m-auto flex w-[100%] flex-col justify-center align-middle">
			<div className="m-auto mt-[6em] text-center">
				<Image
					src={"/me1.jpg"}
					alt="profile"
					width={150}
					height={150}
					className="m-auto rounded-[50%] shadow-md shadow-black"
				/>
				<p className="m-auto mt-[1em] font-ubuntu text-[1.25rem] text-white">
					Usama Qureshi
				</p>
				<p className="m-auto mt-[0.75rem] rounded-[0.5rem] bg-[#ffffff14] p-[0.75rem] text-center font-ubuntu text-[0.8rem] text-white shadow-md shadow-black sm:text-[0.9rem] md:text-[1rem]">
					Full Stack / Machine Learning Engineer
				</p>
			</div>
			<div className="m-auto mt-[2em] w-[80%] text-center sm:w-[70%] md:w-[60%] lg:w-[50%]">
				<p className="m-auto mt-[1em] font-ubuntu text-[1.2rem] text-primary underline underline-offset-4 md:text-[1.3rem]">
					Bio
				</p>
				<p className="m-auto mt-[1em] w-[100%] break-words text-justify font-oxygen text-[0.775rem] text-white md:text-[0.85rem] min-[1024px]:w-[85%] min-[1440px]:w-[80%]">
					&nbsp;&nbsp; I am a full-stack developer with deep interest
					in machine learning. I have passion for designing and
					developing software to solve real world problems. In my
					spare time, I like to figure out mathematical background of
					different deep learning architectures and gain insight into
					their ability to learn. I have bachelor in computer science
					from National University of Science & Technology.
				</p>
			</div>
		</div>
	)
}
