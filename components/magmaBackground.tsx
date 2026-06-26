import { useEffect, useRef } from "react"

export default function MagmaBackground({ className }: { className?: string }) {
	const turbulenceRef = useRef<SVGFETurbulenceElement>(null)
	const displacementRef = useRef<SVGFEDisplacementMapElement>(null)
	const layerRef = useRef<SVGGElement>(null)

	useEffect(() => {
		const turbulence = turbulenceRef.current
		const displacement = displacementRef.current
		const layer = layerRef.current
		if (!turbulence || !displacement || !layer) return

		const reduceMotion = window.matchMedia(
			"(prefers-reduced-motion: reduce)"
		).matches
		if (reduceMotion) return

		let frame = 0
		const start = performance.now()
		const wave = (t: number, period: number, phase = 0) =>
			Math.sin((t / period) * Math.PI * 2 + phase)

		const tick = (now: number) => {
			const t = (now - start) / 1000

			const fx = 0.011 + 0.005 * wave(t, 95)
			const fy = 0.013 + 0.005 * wave(t, 70, 1.3)
			turbulence.setAttribute("baseFrequency", `${fx} ${fy}`)

			displacement.setAttribute("scale", `${175 + 45 * wave(t, 71)}`)

			const tx = 45 * wave(t, 150) + 15 * wave(t, 53, 2.1)
			const ty = 35 * wave(t, 97, 0.7) + 12 * wave(t, 41, 4.2)
			layer.setAttribute("transform", `translate(${tx} ${ty})`)

			frame = requestAnimationFrame(tick)
		}

		frame = requestAnimationFrame(tick)
		return () => cancelAnimationFrame(frame)
	}, [])

	return (
		<svg
			className={className}
			viewBox="0 0 800 400"
			preserveAspectRatio="xMidYMid slice"
			xmlns="http://www.w3.org/2000/svg"
		>
			<defs>
				{/* Banded magma palette — alternating deep blue and glowing lava
				    so that warping the gradient produces silky, flowing ribbons. */}
				<linearGradient id="magmaGradient" x1="0" y1="0" x2="0.7" y2="1">
					<stop offset="0%" stopColor="#1e1b4b" />
					<stop offset="12%" stopColor="#2563eb" />
					<stop offset="22%" stopColor="#b91c1c" />
					<stop offset="32%" stopColor="#f97316" />
					<stop offset="42%" stopColor="#fbbf24" />
					<stop offset="52%" stopColor="#ea580c" />
					<stop offset="62%" stopColor="#312e81" />
					<stop offset="74%" stopColor="#1d4ed8" />
					<stop offset="86%" stopColor="#dc2626" />
					<stop offset="100%" stopColor="#1e1b4b" />
				</linearGradient>

				{/* Fractal-noise smoke that slowly morphs, displacing the gradient
				    bands into continuously flowing lava wisps. */}
				<filter id="magmaFlow" x="-20%" y="-20%" width="140%" height="140%">
					<feTurbulence
						ref={turbulenceRef}
						type="fractalNoise"
						baseFrequency="0.011 0.013"
						numOctaves="4"
						seed="7"
						result="noise"
					/>
					<feDisplacementMap
						ref={displacementRef}
						in="SourceGraphic"
						in2="noise"
						scale="175"
						xChannelSelector="R"
						yChannelSelector="G"
					/>
				</filter>
			</defs>

			<rect width="800" height="400" fill="#160f3a" />

			{/* Drifting layer gives the ribbons a slow directional flow on top of
			    the morphing turbulence. */}
			<g ref={layerRef}>
				<rect
					x="-80"
					y="-80"
					width="960"
					height="560"
					fill="url(#magmaGradient)"
					filter="url(#magmaFlow)"
				/>
			</g>
		</svg>
	)
}
