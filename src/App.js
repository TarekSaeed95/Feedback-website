import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import About from "./base/pages/About"
import Feedback from "./base/pages/Feedback"
import Header from "./base/component/Header"
function App() {
  return (
    <Router>
    <div className="app">
    <Header></Header>
      <Routes>
        <Route exact path="/" element={<Feedback/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </div>
    </Router>
  )
}

export default App

