import { useContext } from "react"
import  {Navigate, NavLink} from "react-router-dom"
import { UserContext } from "../context/UserProvider"
const Navbar = () => {
    const { user, setUser} = useContext(UserContext)

    const cambiarEstado = () => {
        setUser(false)
        return <Navigate to="/login" /> 
    }

    return(
        <>
            <div>
                {
                    user ? 
                    (
                        <>
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/about">About</NavLink>
                            <NavLink to="/blog">Blog</NavLink>
                            <button onClick={cambiarEstado}>Salir </button>
                        </>
                    ) 
                    : 
                    (
                        <>
                            <NavLink to="/login">Login</NavLink>
                            <NavLink to="/register">Register</NavLink>                        
                        </>
                    )
                }
            </div>
        </>
    )
}

export default Navbar