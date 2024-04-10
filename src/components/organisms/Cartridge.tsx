import Fugo from "../../assets/logo_first_dark.svg?react"
import "../../Cartridge.scss"

const Cartridge: React.FC = () => {
	return (
		<div className="box">
			<div className="cartridge">
				<div className="square-indent"></div>
				<div className="rectangle-indent-1"></div>
				<div className="rectangle-indent-2"></div>
				<div className="line-indent-1"></div>
				<div className="line-indent-2"></div>
				<div className="line-indent-3"></div>
				<div className="line-indent-4"></div>
				<div className="line-indent-5"></div>
				<div className="line-indent-6"></div>
				<div className="ellipse-indent"></div>
				<div className="triangle"></div>
				<div className="cover">
					<div className="cover-copy">
						<div className="logo-container">
							<Fugo />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Cartridge
