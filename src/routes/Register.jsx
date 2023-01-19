import { useContext, useState } from "react"
import { UserContext } from "../context/UserProvider"

const Register = () => {
    const [email, setEmail] = useState('luciano.a.ontiveros@gmail.com')
    const [password, setPassword] = useState("123456")

    const { registerUser } = useContext(UserContext)

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('Procesando el formulario ', email, password)
        try {
            await registerUser(email, password)
        } catch (error) {
            console.log(error.code)
        }
    }
    
    return(
        <>
            <h1>REGISTER</h1>
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
                <button type="submit">Register</button>
            </form>
        </>
    )
}

export default Register