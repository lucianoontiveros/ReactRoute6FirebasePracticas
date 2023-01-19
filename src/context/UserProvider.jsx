import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react"
import { auth } from "../firebase"

export const UserContext = createContext()

const UserProvider = ({children}) => {
    const [user, setUser ] = useState(false)
    const registerUser = (email, password) => createUserWithEmailAndPassword(auth, email, password)
    const loginUser  = (email, password) => signInWithEmailAndPassword(auth, email, password)
    const singOutUser = () => signOut(auth)

    useEffect( () => {
        const unSuscribe = onAuthStateChanged(auth, user => {
            console.log(user)
            if(user){
                const { email, photoURL, displayName, uid } = user
                setUser({email, photoURL, displayName, uid })
            } else {
                setUser(null)
            }
        });

        return () => unSuscribe()
    }, [])

    return(
        <>
            <UserContext.Provider value={{user, setUser, registerUser, loginUser, singOutUser}}>
                { children }
            </UserContext.Provider> 
        </>
    )
}


export default UserProvider