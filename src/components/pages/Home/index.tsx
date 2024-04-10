import React from "react"
import Map from "react-map-gl"
import { GiCog, GiPositionMarker, GiDodge, GiAnglerFish, GiBoatFishing, Gi3DMeeple } from "react-icons/gi"

import HomeHook from "./hook"
import TabBar from "../../molecules/TabBar"

const Home: React.FC = () => {
	const { viewport, isMenuOpen, setIsMenuOpen, handleOpenMenu, handleCloseMenu } = HomeHook()

	return (
		<div id="home">
			<TabBar />

			<Map
				mapboxAccessToken="pk.eyJ1IjoiY2RlZ3VlbGxlIiwiYSI6ImNscmhzcnY0YzAyaXQyanF2Nzh5ODE0cmQifQ.s1SCK5c1vFlz3c4T4-adyA"
				initialViewState={{
					longitude: 122.4,
					latitude: 37.8,
					zoom: 2,
				}}
				style={{ width: viewport.width, height: viewport.height * 0.95, zIndex: 0 }}
				mapStyle="mapbox://styles/mapbox/streets-v9"
			/>

			<button
				className="menu-button f0"
				onClick={() => {
					if (isMenuOpen) {
						handleCloseMenu()
					} else {
						handleOpenMenu()
					}
					setIsMenuOpen(!isMenuOpen)
				}}
			>
				<GiCog />
			</button>

			<div>
				<button className="menu-button f1">
					<GiPositionMarker />
				</button>
				<button className="menu-button f2">
					<GiDodge />
				</button>
				<button className="menu-button f3">
					<GiAnglerFish />
				</button>
				<button className="menu-button f4">
					<GiBoatFishing />
				</button>
				<button className="menu-button f5">
					<Gi3DMeeple />
				</button>
			</div>
		</div>
	)
}

export default Home
