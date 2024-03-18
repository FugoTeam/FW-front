import React from "react"
import HomeHook from "./hook"
import Map from "react-map-gl"
import { GiCog, GiPositionMarker, GiDodge, GiAnglerFish, GiBoatFishing, GiHamburgerMenu, GiBinoculars, Gi3DMeeple } from "react-icons/gi"

const Home: React.FC = () => {
	const { viewport, scrollToLanding, isMenuOpen, setIsMenuOpen, handleOpenMenu, handleCloseMenu } = HomeHook()

	return (
		<div id="home">
			<div id="tab-bar">
				<button style={{ backgroundColor: "transparent" }}>
					<GiHamburgerMenu color="#FFF" />
				</button>
				<div id="searchbar">
					<GiBinoculars color="#000" style={{ position: "absolute", top: "8px", left: "10px" }} />
					<input type="search" placeholder="Search..." />
				</div>

				<button onClick={scrollToLanding} style={{ height: viewport.height * 0.05 }} className="scroll-button">
					🌍
				</button>
			</div>

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
