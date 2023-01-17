import { useContext } from "react"
import { UserContext } from "../context/UserProvider"

const Login = () => {
    const { user, setUser} = useContext(UserContext)
     return(
        <>  
            <h1>Login</h1>
            { user ? 
                (
                    <>
                        <h5>"En linea"</h5>
                        <button onClick={() => setUser(false) }>Salir </button>
                    </>
                ) 
                : 
                (
                    <>
                        <h5>"Offline"</h5>
                        <button onClick={() => setUser(true) }>Acceder</button>
                    </>
                ) 
            }
        
            
        </>
     )
}

export default Login