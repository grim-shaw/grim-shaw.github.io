import { useEffect, useRef } from "react"

export default function MagmaBackground({ className }: { className?: string }) {
	const svgRef = useRef<SVGSVGElement>(null)

	useEffect(() => {
		const animations = svgRef.current?.querySelectorAll<SVGAnimationElement>(
			"animate, animateTransform"
		)
		animations?.forEach(animation => animation.beginElement?.())
	}, [])

	return (
		<svg
			ref={svgRef}
			className={className}
			viewBox="0 0 800 400"
			preserveAspectRatio="xMidYMid slice"
			xmlns="http://www.w3.org/2000/svg"
		>
			<defs>
				{/* Banded magma palette — alternating deep black and glowing lava
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
						type="fractalNoise"
						baseFrequency="0.009 0.014"
						numOctaves="4"
						seed="7"
						result="noise"
					>
						<animate
							attributeName="baseFrequency"
							dur="95s"
							values="0.009 0.014; 0.016 0.008; 0.007 0.018; 0.013 0.010; 0.018 0.015; 0.008 0.012; 0.009 0.014"
							repeatCount="indefinite"
							calcMode="spline"
							keyTimes="0; 0.17; 0.31; 0.48; 0.66; 0.83; 1"
							keySplines="0.45 0 0.55 1; 0.45 0 0.55 1; 0.45 0 0.55 1; 0.45 0 0.55 1; 0.45 0 0.55 1; 0.45 0 0.55 1"
						/>
						<animate
							attributeName="seed"
							dur="173s"
							values="7; 9; 12; 8; 7"
							repeatCount="indefinite"
							calcMode="discrete"
							keyTimes="0; 0.28; 0.55; 0.78; 1"
						/>
					</feTurbulence>
					<feDisplacementMap
						in="SourceGraphic"
						in2="noise"
						scale="170"
						xChannelSelector="R"
						yChannelSelector="G"
					>
						<animate
							attributeName="scale"
							dur="71s"
							values="170; 215; 140; 195; 160; 170"
							repeatCount="indefinite"
							calcMode="spline"
							keyTimes="0; 0.22; 0.44; 0.63; 0.81; 1"
							keySplines="0.45 0 0.55 1; 0.45 0 0.55 1; 0.45 0 0.55 1; 0.45 0 0.55 1; 0.45 0 0.55 1"
						/>
					</feDisplacementMap>
				</filter>
			</defs>

			<rect width="800" height="400" fill="#160f3a" />

			{/* Drifting layer gives the ribbons a slow directional flow on top of
			    the morphing turbulence. */}
			<g>
				<animateTransform
					attributeName="transform"
					type="translate"
					values="0 0; -55 0; -55 -38; 0 -38; 42 28; 42 -8; -20 34; 0 0"
					dur="150s"
					repeatCount="indefinite"
					calcMode="spline"
					keyTimes="0; 0.15; 0.28; 0.42; 0.57; 0.71; 0.86; 1"
					keySplines="0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1"
				/>
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
