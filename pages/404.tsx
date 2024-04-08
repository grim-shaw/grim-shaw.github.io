import Link from "next/link"
import Image from "next/image"

export default function NotFound() {
	return (
		<main className="flex flex-col m-auto text-center w-[100%] h-[85vh] pt-[4em]">
			<Image
				src={"/Astronaut.svg"}
				alt={"Not found"}
				width={500}
				height={500}
				className="m-auto"
			/>
			<p className="text-secondary font-ubuntu text-[1.2rem]">
				Oops! The page was not found
			</p>
			<p className="font-ubuntu text-[1.2rem] text-secondary hover:underline underline-offset-4">
				<Link href="/">Return Home</Link>
			</p>
		</main>
	)
}
