import React from "react"

import hook from "./hook"
import TabBar from "../../molecules/TabBar"

const Profile: React.FC = () => {
	const { pseudo, email, password, spots, score, travels, avatar, setPseudo, setEmail, setPassword, viewport } = hook()

	return (
		<div id="profile">
			<TabBar />
			<div id="profile-content" style={{ width: viewport.width, height: viewport.height * 0.95 }}>
				<img src={avatar} alt="avatar" />

				<h2>{pseudo}</h2>

				<div id="profile-info">
					<div className="profile-info-data">
						<label>Pseudo</label>
						<input type="text" value={pseudo} onChange={(e) => setPseudo(e.target.value)} />

						<label>Email</label>
						<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

						<label>Password</label>
						<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
					</div>

					<div className="profile-info-data">
						<label>Spots</label>
						<input type="number" value={spots} readOnly />

						<label>Score</label>
						<input type="number" value={score} readOnly />

						<label>Travels</label>
						<input type="number" value={travels} readOnly />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Profile
