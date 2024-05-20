import React, { ReactNode } from "react"

type WeatherBlockProps = {
	children: ReactNode
}

const WeatherBlock: React.FC<WeatherBlockProps> = ({ children }) => {
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				backgroundColor: "#12131B",
				borderRadius: 6,
				height: 50,
				minWidth: 50,
			}}
		>
			{children}
		</div>
	)
}

export default WeatherBlock
