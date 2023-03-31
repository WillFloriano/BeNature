import {db} from "../firebase/config"
import {
    getAuth,
    createUserWithEmailAndPassword,
    siginInWithEmailAndPassword,
    updateProfile,
    siginOut
} from "firebase/auth"

import { useState, useEffect } from "react"
import { async } from "@firebase/util"

export const useAuthentication = () => {
    const [error, setError] = useState(null)
    const[loading, setLoading] = useState(null)


    const[cancelled, setCancelled] = useState(false)

    const auth = getAuth();

    function checkIfIsCancelled() {
        if(cancelled) {
            return;
        }
    }

    const createUser = async (data) =>  {
        checkIfIsCancelled()

        setLoading(true)
        setError(null)

        try {
            const {user} = await createUserWithEmailAndPassword(
                auth, 
                data.email,
                data.password
            )

                await updateProfile(user, {displayName: data.displayName})

                setLoading(false);

                return user

        } catch (error) {
            let systemErrorMEssage

            if(error.message.includes("Password")) {
                systemErrorMEssage = "A senha precisa conter pelo menos 6 caracteres!";
            }else if(error.message.includes("email-already")){
                systemErrorMEssage = "E-mail já cadastrado!";
            }else{
                systemErrorMEssage = "Ocorreu um erro, por favor tebte mais tarde.";
            }

            setLoading(false);
            setError(systemErrorMEssage);
        }

        setLoading(false)
    };

    useEffect(() => {
        return () => setCancelled(true);
    }, []);

    return {
        auth,
        createUser,
        error,
        loading,
    }
}