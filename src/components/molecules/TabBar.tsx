import React, { useEffect, useState } from "react"
import { GiExitDoor } from "react-icons/gi"
import { useNavigate } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { useGeolocation } from "@uidotdev/usehooks"
import moment from "moment"
import "moment/dist/locale/fr"

import Bronze from "../../assets/Bronze.png"
import Silver from "../../assets/Silver.png"
import Gold from "../../assets/Gold.png"
import Platinum from "../../assets/Platinium.png"
import Logo from "../../assets/Fugo_logo.svg?react"
import getWeather from "../../api/openweathermap"
import WeatherBlock from "../atoms/weatherBlock"
import Avatar from "../../assets/Avatar.png"

const TabBar: React.FC = () => {
	const [latitude, setLatitude] = useState(0)
	const [longitude, setLongitude] = useState(0)
	const [weather, setWeather] = useState(null as { id: number; main: string; description: string; icon: string } | null)
	const [humidity, setHumidity] = useState(0)
	const [currentDate, setCurrentDate] = useState("")

	const state = useGeolocation()

	useEffect(() => {
		setCurrentDate(moment().locale("fr").format("dddd DD/MM"))
	}, [])

	useEffect(() => {
		console.log(currentDate)
	}, [currentDate])

	useEffect(() => {
		if (state.latitude) {
			setLatitude(state.latitude)
		}
		if (state.longitude) {
			setLongitude(state.longitude)
		}
	}, [state])

	const { data, isLoading, isFetching } = useQuery({ queryKey: ["weather"], queryFn: async () => await getWeather(latitude, longitude) })

	useEffect(() => {
		if (data && !isLoading && !isFetching) {
			setWeather(data.weather[0])
			setHumidity(data.main.humidity)
		}
	}, [data, isLoading, isFetching])

	const scrollToLanding = () => {
		window.scrollTo({ top: 0, behavior: "smooth" })
	}

	const navigate = useNavigate()

	const fugos = [Bronze, Silver, Gold, Platinum]

	return (
		<div id="tab-bar">
			<div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", gap: 10 }}>
				<button
					style={{ backgroundColor: "transparent" }}
					onClick={() => {
						navigate("/")
						scrollToLanding()
					}}
				>
					<GiExitDoor color="#12131B" size={30} />
				</button>
				<p style={{ fontWeight: 600, color: "#12131B" }}>Welcome Clément</p>
				{weather && (
					<WeatherBlock>
						<img src={`http://openweathermap.org/img/wn/${weather.icon}.png`} alt={weather.main} />
					</WeatherBlock>
				)}
				{humidity !== 0 && (
					<WeatherBlock>
						<p>{humidity}</p>
						<p>%</p>
					</WeatherBlock>
				)}
				<div>
					<p style={{ fontWeight: 600, color: "#12131B" }}>{currentDate.split(" ")[0].charAt(0).toUpperCase() + currentDate.split(" ")[0].slice(1)}</p>
					<p style={{ fontWeight: 600, color: "#12131B" }}>{currentDate.split(" ")[1]}</p>
				</div>
			</div>

			<Logo height={40} />

			<div
				style={{
					marginRight: "20px",
					display: "flex",
					alignItems: "center",
					gap: "20px",
					backgroundColor: "#E2493D",
					borderTopLeftRadius: 8,
					borderBottomLeftRadius: 8,
					paddingLeft: 10,
					paddingRight: 10,
					border: "1px solid #000",
				}}
			>
				<img
					src={fugos[0]}
					alt="Bronze"
					width={25}
					height={45}
					style={{ cursor: "pointer", marginBottom: 5 }}
					onClick={() => {
						navigate("/profile")
					}}
				/>
				<div>
					<p style={{ fontWeight: 600, color: "#12131B" }}>Clément</p>
					<p style={{ fontWeight: 600, color: "#12131B" }}>Deguelle</p>
				</div>
				<img src={Avatar} alt="avatar" width={40} height={40} />
			</div>
		</div>
	)
}

export default TabBar
