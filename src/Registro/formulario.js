import { useState } from "react";
import React {useState} from "react";

export default function Formulario() {
    const [usuario, setUsuario] = useState("");
    const [correo, setCorreo] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [confirmacion, setConfirmacion] = useState("");
    const [terminos, setTerminos] = useState(false);


    return (
        <>
        <h2> Por favor, ingresa los siguientes datos para crear tu cuenta en Nomadapp</h2>
        <form>
            \\ TENGO QUE PONER EL LABEL SI NO VA NADA AFUERA?
            <label htmlFor="usuario"></label>
            <input
             type="text"
              id="usuario" 
              name="usuario"
              \\ defaultVALUE???
              value={usuario}
              onchange={(e) => setUsuario(e.target.value)}
              defaultValue="Usuario"
              />
              <label htmlFor="correo"></label>
            <input
             type="text"
              id="correo" 
              name="correo"
              \\ defaultVALUE???
              value={correo}
              onchange={(e) => setCorreo(e.target.value)}
              defaultValue="correo Electrónico"
              />
               <input
             type="text"
              id="contraseña" 
              name="contraseña"
              \\ defaultVALUE???
              value={contraseña}
              onchange={(e) => setContraseña(e.target.value)}
              defaultValue="contraseña"
              />
              <input
             type="text"
              id="confirmarcontraseña" 
              name="confirmarcontraseña"
              \\ defaultVALUE???
              value={confirmacion}
              onchange={(e) => setConfirmacion(e.target.value)}
              defaultValue="confirmar contraseña"
              />
              <br/>
              <label htmlFor="terminos"> He leído y acepto los términos y condiciones</label>
              <input 
              type="checkbox"
              id="terminos"
              name="terminos"
              onChange={(e) => setTerminos(e.target.checked)}
              />
              
        </form>
        </>
    )
}