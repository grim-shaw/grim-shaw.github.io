import Image from "next/image"
import Link from "next/link"
import React from "react"

// import { Inter } from "next/font/google"
// const inter = Inter({ subsets: ["latin"] })

export default function Navbar() {
	return (
		<div
			className={`flex flex-row m-0 pb-[0.5em] z-10 pt-[1em] mb-[1em] backdrop-filter backdrop-blur-[16px] backdrop-saturate-150 fixed justify-center h-[4em] align-middle font-jetbrain text-[0.9rem] w-[100%]`}
		>
			<Link href={"/"}>
				<div className="flex flex-row justify-center align-middle m-0 my-auto h-[2.5em] px-[1em] border-[1px] text-[#bbb] border-[#413f3f] hover:border-[#c0bbbb] cursor-pointer rounded-[10px] mx-[1em]">
					<Image
						width={20}
						height={20}
						src={
							"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAf9JREFUWEflmD9Lw0AYxk1DKYpDJxddFLoE/QDOgiDiIK466RcQCeJncHX1MzgUlQo6OjpULS2KUqlLPoCIEitceAr3ppf3EvPngl2Oa+6SJ788773vnTWh+ZuftYaaQ6Vhr+9DK8k8zNGebJxAKuihcy6BqPgnol99bkn/v936Un/lWGYQl6iSoLECIYwSq/U2BJnG5o+WpZ7OKmPJgqguyRBBYwWqhC066xKJvVY0wZvBpxj/sjslzQNReFSX5IhgaQR27tfEmztLl6JVEdueC0h5X7Zor7yqaEEQ+O68gHj9aFq0126wnCYmaJxA+mlptFKClBxIgSD6lCQ8GdeLVukEImrjek+1OIJkUi+GCBorkAsOVdRyaSU1gsYLRHQh11IPrs58S+sdR45G8589+O8EppVRRlGcNsHcBep6TpVJMvdg4QJRQXO5mBPKfdrMc3HuAvFAFA1csHA5l9aB6KMexP1ry8EV3/cjt76hitp4gSovgsTC6UfkV6bRisHUe42DoBKPTdBYgdSLEEpPENLaF0/WHfHIXrcbSZLdFxsnkJJEH+UYdxZDDUrPZrZ2DsWQx3ZbtP1+P5Kk9tmMcQIpibSO32zbFhvjfdfVIpn7+WBmArkUF/c6FXrRbI71ojbBuAK48cYLxAtAKH0hZJjCCJZGIGeFwglyAn8Bt6aWR2TfwTgAAAAASUVORK5CYII="
						}
						alt="About"
						className="m-0 my-auto"
					/>
					<p className="m-0 mx-auto my-auto ml-1">About</p>
				</div>
			</Link>
			<Link href={"/projects"}>
				<div className="flex flex-row justify-center align-middle m-0 my-auto h-[2.5em] px-[1em] border-[1px] text-[#bbb] border-[#413f3f] hover:border-[#c0bbbb] cursor-pointer rounded-[10px] mx-[1em]">
					<Image
						width={20}
						height={20}
						src={
							"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAXlJREFUWEdjZBjkgHGQu48Bw4FcXFz/B9LR3759Q3HT0HEgesh9DQ1CCUju1evA/K9brFDFfY6B+d8OOKOIcznsBfPPnz+PIn7/9n28ERQUBrEXFpLwEBxyDhzIdEhUCA5aB5qZmWF124cPH6jq5i9fvqCY9+3bNzAfZg/ONDjqQGi4Df8Q3D/VEmuaM4zeTpW0SHEIDnoHwoKJ2rkXZi7FIThkHEgoqg+5e2JNk3Y78adVqoXgoHUgvdIeLPhJrkmGjAOTFiZRpdyDGTIpeBJW88gOwUHvQKoGHwMDA3ruHf5pEOZDq8bDVA3MXcWGsL4HirlEtwfRc/GgdyClwUco7aFXrQRb1NQuB2nuwPNLsde5sPYhrjoZFjJGa1dj7YOgxwzZaXDQO5DcNIir1YLLPLJDcNA7kNhi5li9LdgvbkuWkeSnJW4upPWLyS0HB8yBJAUHljoX1lohZA7d0iCpmYNgQQ1TMDrCSiCOCQ4BE0oj9JYf9KP8AAwOCkcMzeo6AAAAAElFTkSuQmCC"
						}
						alt="Project"
						className="m-0 my-auto"
					/>
					<p className="m-0 mx-auto my-auto ml-1">Projects</p>
				</div>
			</Link>
			<Link href={"/blogs"}>
				<div className="flex flex-row justify-center align-middle m-0 my-auto h-[2.5em] px-[1em] border-[1px] text-[#bbb] border-[#413f3f] hover:border-[#c0bbbb] cursor-pointer rounded-[10px] mx-[1em]">
					<Image
						width={20}
						height={20}
						src={
							"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAlFJREFUWEfVmT9IQkEcx7XmJ4QRBBItbZGiLc7SVtmQ0GJbRottDRaKRlMQ5BI4SdIgLQk6iAkiRJNiW7VE5WTSoNAiZfi7fuK7ON97vhPu3fJ793535/f3ud/94Wk2MYokSd2eK5VKQQu/3w+Wd73dbptZGnrvmU7DCIwcRiDA6EkUbCwSAxuOhrnUkR6LpCJB4QTi1JZLZQguuB8E6131gs1kM2Dj5/Ghfrq9Ur32UIPxaJL/CBpGYKvVgohqVRIZlumZ6WGLjulLX6VluYwNHXYH+R2tBA0n0OEkkbJKvV4f6rfb7eDPHSfBSo1vsO6zbVk/1TlIExRW4EgJN9DJarXKhggGya6w2SVEX9/fwG5dH4HVTFB4gfQqVit4L+CEps8vU2CRXKVSgbrL5SLEso9gE0+50QgKL1AtMVzFvo056HJ/d0u6fnrArO+uycjF4+QkwtLpdEYjKLxAtVOMOUeTy19OQIxLCxawizukjiV0EIJHvC1pXsXCC1SaYvcyIaJEbna+De3cgR+wF4kq2GKhqI+g8AJZU6w252hym75TiNmzQla3boLCC6SnWG/O4X2y2WjyISi8QJxivTlHB8o9B4UVaLGQE6D1cUMg/J2t9AnB2ucw52w2mwwizozuVWwcgaUvIJAvwCeb/tnK2ueUNnhuOdgnKLpAJPKUnIRHVs4pkeO+DyJBwwikCeE3HHzPWrXox5s3t5OEJiiMQPzsppRTvPyab9TCChwgQjY8qkiSxAuabBzNX1hNJpPwAsdCSuugQ/8C0DrYONr/AqWg4EdKn+XrAAAAAElFTkSuQmCC"
						}
						alt="Blog"
						className="m-0 my-auto"
					/>
					<p className="m-0 mx-auto my-auto ml-1">Blog</p>
				</div>
			</Link>
			<Link href={"https://github.com/Grimmer107"}>
				<div className="flex flex-row justify-center align-middle m-0 my-auto h-[2.5em] px-[1em] border-[1px] text-[#bbb] border-[#413f3f] hover:border-[#c0bbbb] cursor-pointer rounded-[10px] mx-[1em]">
					<Image
						width={20}
						height={20}
						src={
							"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAlFJREFUWEfVmLtKA0EUhg1iETD2ETtJbATFlHaxtLFSMAHB0sZOsPLSCGkkCj5BougrCNamWBMrQ6JdRDshEawk4pn9zcwwl911i9k0k90zc+afb8+cuaTG9L+hb0oZ6sRhMvZj6txZgSSsXNokOrX6JShhMBAelZ7gx9AP+VcRTJbAp3abRuJ5D1RixMAHe1Ccsh/ZvwzNStAlgcKnDUsmKEFdvUH/k0ydbkeIeZ5gMgViZP8lhPaZqUmlq8gEEyOQi41YYBYKS+RHBhA6BhXo3RKIvPV1dxSLMDhJFw/or0wyNEFnBWIN7jevBXKZxXXhedC6MZLV1Z/4YCuUTBJAsKJo82DiBILE7doyjfzq+Z3Kau1ESdBWP3aCtg5llbb6EQSO+0vdBvVVq7PY6zfZfhAdbs/PClpsBHX1RwKP/dm8QKXnPfr+vyn8uBhMuEBbErw/rAaKTZAb5cOYCDogEBLMn9omVGcPSw5+FDtq9wRqjpfhhO6W9wV4F+dbSpjpIou5fI5lg073RZi1cqNfgokRqPvsNIB8Li+NOFo0jsiJZw+dN56gmwKzjSERWjkrkUDuJsGPFUYu7p+879MSdF4glEPo9E6BXmFfhthDPZzKdIepoHZ532eKQbI5L5AbAcVktsGyT6Y8589eNutwN4ObB/lQFdZuI6m9m3FZIGBK+e8vb5EdpzEFAWpns9vuBXU5j49VtwRWeiwf7s2ob4UrPRaTMdiNN7VcP+KO2lmBEIZve/oqZqS3FnuurLISdrxH7bB2tJP9yPkw5brAHy6QY3VmdklZAAAAAElFTkSuQmCC"
						}
						alt="Github"
						className="m-0 my-auto"
					/>
					<p className="m-0 mx-auto my-auto ml-1">Github</p>
				</div>
			</Link>
		</div>
	)
}
