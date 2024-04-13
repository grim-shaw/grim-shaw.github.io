import Link from "next/link"
import React from "react"

export default function ContactSection() {
	return (
		<div className="m-auto mb-[8em] mt-[4em] flex w-[80%] flex-col justify-center md:w-[70%] lg:w-[50%]">
			<p className="m-auto my-[0.25em] font-ubuntu text-[1.2rem] text-primary underline underline-offset-4 md:text-[1.3rem]">
				Contact
			</p>
			<p className="text-center font-oxygen text-[0.75rem] leading-8 text-white sm:text-[0.85rem]">
				You can reach out to me through{" "}
				<Link href={"https://www.linkedin.com/in/usamaqureshi01/"}>
					<span className="h-[2.5em] w-[2.5em] cursor-pointer">
						<svg
							stroke="#71717a"
							fill="#71717a"
							strokeWidth="0"
							viewBox="0 0 24 24"
							className="inline h-[1.75em] w-[1.75em] flex-shrink-0 transition-colors duration-300 hover:fill-white hover:stroke-white"
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
				<span className="rounded-[0.25em] bg-[#ff63c329] px-[0.4em] py-[0.4em] text-[#ff63c3]">
					usama7.qureshi@gmail.com
				</span>
			</p>
		</div>
	)
}
