import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import App from "./App.tsx"
import Profile from "./components/pages/Profile"
// import ErrorPage from "./components/pages/Error"
import "./index.css"

const router = createBrowserRouter([
	{ path: "/", element: <App /> },
	{ path: "/profile", element: <Profile /> },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
