import Link from "next/link"
import React from "react"

export default function ContactSection() {
	return (
		<div className="w-[50%] flex flex-col justify-center m-auto mt-[4em] mb-[8em]">
			<p className="font-ubuntu text-primary m-auto my-[0.25em] text-[1.3rem] underline underline-offset-4">
				Contact
			</p>
			<p className="text-center text-[0.85em] text-white font-oxygen leading-8">
				You can reach out to me through{" "}
				<Link href={"https://www.linkedin.com/in/usamaqureshi01/"}>
					<span className="w-[2.5em] h-[2.5em] cursor-pointer">
						<svg
							stroke="#71717a"
							fill="#71717a"
							stroke-width="0"
							viewBox="0 0 24 24"
							className="flex-shrink-0 h-[1.75em] inline w-[1.75em] hover:stroke-white hover:fill-white transition-colors duration-300"
							aria-hidden="true"
							height="1.5em"
							width="1.5em"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path>
						</svg>
					</span>
				</Link>{" "}
				as well as on my mail address at&nbsp;
				<span className="text-[#ff63c3] bg-[#ff63c329] px-[0.4em] py-[0.4em] rounded-[0.25em]">
					usama7.qureshi@gmail.com
				</span>
			</p>
		</div>
	)
}
