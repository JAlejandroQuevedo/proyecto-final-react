import React, { useState } from 'react'
import { Checkout } from './Checkout'

export const CheckoutContainer = () => {
    const [userInfo, setUserInfo] = useState({
        name: "",
        lastName: ""
    })

    const envioDeFormulario = (e) => {
        e.preventDefault()
        //Aca manipulo lo que quiero hacer con los datos del formulario
        console.log('Se envio el formulario');
        console.log(userInfo)
    }
    const capturar = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
    }
    /*     const capturarNombre = (e) => {
            setUserInfo({ ...userInfo, name: e.target.value })
    
        }
        const capturarApellido = (e) => {
            setUserInfo({ ...userInfo, lastName: e.target.value })
    
    
        } */
    return (
        <>
            <Checkout envioDeFormulario={envioDeFormulario} capturar={capturar} />
        </>
    )
}
