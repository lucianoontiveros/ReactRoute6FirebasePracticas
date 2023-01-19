import { useContext } from "react"
import  {NavLink} from "react-router-dom"
import { UserContext } from "../context/UserProvider"
const Navbar = () => {
    const { user, singOutUser } = useContext(UserContext)

    const cambiarEstado = async () => {
        try {
            await singOutUser();
        } catch (error) {
            console.log(error.code)
        }
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