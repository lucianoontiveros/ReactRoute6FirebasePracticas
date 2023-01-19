import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Nabar"
import About from "./routes/About"
import Blog from "./routes/blog"
import Home from "./routes/Home"
import Login from "./routes/Login"
import Register from "./routes/Register"
import RequireAuth from "./components/RequiereAuth"
import { UserContext } from "./context/UserProvider"
import { useContext } from "react"

const App = () => {

  const {user} = useContext(UserContext)

  if(user === false) {
    return <p>Loading User</p>
  }

  return (
    <>
      <Navbar/>
      <Routes>
          <Route path="/" element={<RequireAuth>
            <Home/>
          </RequireAuth>}>Home</Route>
          <Route path="/register" element={ <Register/>}>Register</Route>
          <Route path="/blog" element={
            <RequireAuth>
              <Blog/>
            </RequireAuth>}>Blog</Route>
          <Route path="/login" element={<Login/>}>Login</Route>
          <Route path="/about" element={
            <RequireAuth>
              <About/>
            </RequireAuth>
          }>About</Route>
      </Routes>
    </>
  ) 
  
}

export default App
