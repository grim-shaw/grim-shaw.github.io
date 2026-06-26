export default function Clock({
	color = "white",
	className = ""
}: {
	color?: string
	className?: string
}) {
	return (
		<svg
			stroke={color}
			fill={color}
			strokeWidth="0"
			viewBox="0 0 24 24"
			height="1.25em"
			width="1.25em"
			xmlns="http://www.w3.org/2000/svg"
			className={`my-auto scale-110 ${className}`}
		>
			<path d="M12.25 2c-5.514 0-10 4.486-10 10s4.486 10 10 10 10-4.486 10-10-4.486-10-10-10zM18 13h-6.75V6h2v5H18v2z"></path>
		</svg>
	)
}
