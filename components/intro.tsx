import Image from "next/image"
import React from "react"

export default function Intro() {
	return (
		<div className="flex flex-col justify-center align-middle m-auto">
			<div className="m-auto mt-[6em] text-center">
				<Image
					src={"/me1.jpg"}
					alt="profile"
					width={150}
					height={150}
					className="rounded-[50%] m-auto shadow-md shadow-black"
				/>
				<p className="font-ubuntu text-white m-auto mt-[1em] text-[1.25rem]">
					Usama Qureshi
				</p>
				<p className="font-ubuntu text-white m-auto p-[0.75rem] mt-[0.75rem] rounded-[0.5rem] text-center text-[1rem] bg-[#ffffff14] shadow-md shadow-black">
					Full Stack / Machine Learning Engineer
				</p>
			</div>
			<div className="m-auto mt-[2em] text-center">
				<p className="font-ubuntu text-primary m-auto mt-[1em] text-[1.3rem] underline underline-offset-4">
					Bio
				</p>
				<p className="font-oxygen text-white m-auto mt-[1em] text-[0.85rem] w-[40em] text-justify break-words">
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
