import { Route, Routes } from "react-router-dom"
import HomePage from "./screens/Landing"
import Navigation from "./screens/Nav"

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path = "/" element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App
