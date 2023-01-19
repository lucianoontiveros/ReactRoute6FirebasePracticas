import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../context/UserProvider"

const Login = () => {
    const { loginUser } = useContext(UserContext)
    const navigate = useNavigate()
    const [email, setEmail] = useState('luciano.a.ontiveros@gmail.com')
    const [password, setPassword] = useState("123456")

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('Procesando el formulario ', email, password)
        try {
            await loginUser(email, password)
        } catch (error) {
            console.log(error.code)
        }
    }

     return(
        <>  
            <h1>LOGIN</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type='email'
                    placeholder="Ingrese Email" 
                    value={email}
                    onChange={ e=> setEmail(e.target.value)}
                />
                <input 
                    type='password'
                    placeholder="Ingrese password" 
                    value={password}
                    onChange={ e=> setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </>
     )
}

export default Login