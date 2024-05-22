const getWeather = async (latitude: number, longitude: number) => {
	const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=0c7f95c1b5aefaf6cfb63fb8327faf05`)
	const data = await response.json()
	return data
}

export default getWeather
