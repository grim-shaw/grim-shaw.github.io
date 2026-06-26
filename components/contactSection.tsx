import Link from "next/link"

import { IconLinkedin } from "../public/icons"

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
						<IconLinkedin />
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
