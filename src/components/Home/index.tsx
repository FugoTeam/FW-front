import HomeHook from "./hook"
import Map from "react-map-gl"
import { GiCog, GiPositionMarker, GiDodge, GiAnglerFish, GiBoatFishing } from "react-icons/gi"

function Home() {
	const { viewport, scrollToLanding, isMenuOpen, setIsMenuOpen } = HomeHook()

	return (
		<div id="home">
			<button onClick={scrollToLanding} style={{ height: viewport.height * 0.05 }}>
				🌍
			</button>
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
			<button className="menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
				<GiCog />
			</button>
			{isMenuOpen ? (
				<>
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
				</>
			) : null}
		</div>
	)
}

export default Home
