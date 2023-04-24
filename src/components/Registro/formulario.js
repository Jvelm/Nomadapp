import { useState } from "react";


export default function Formulario() {
    const [usuario, setUsuario] = useState("");
    const [correo, setCorreo] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [confirmacion, setConfirmacion] = useState("");
    const [terminos, setTerminos] = useState(false);

    const handleSubmit= e => {
        e.preventDefault();
        alert("Has creado una cuenta correctamente")
    }
    console.log(usuario, correo, contraseña, confirmacion, terminos)
    return (
        <>
        <h2> Por favor, ingresa los siguientes datos para crear tu cuenta en Nomadapp</h2>
        <form onSubmit={handleSubmit}>
            <input
             type="text"
              id="usuario" 
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              />
              <label htmlFor="correo"></label>
            <input
             type="text"
              id="correo" 
              name="correo"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              />
               <input
             type="text"
              id="contraseña" 
              name="contraseña"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}

              />
              <input
             type="text"
              id="confirmarcontraseña" 
              name="confirmarcontraseña"
              value={confirmacion}
              onChange={(e) => setConfirmacion(e.target.value)}
              />
              <br/>
              <label htmlFor="terminos"> He leído y acepto los términos y condiciones</label>
              <input 
              type="checkbox"
              value={terminos}
              id="terminos"
              name="terminos"
              onChange={(e) => setTerminos(e.target.checked)}
              />
              <input type="submit"/>
              
        </form>
        </>
    )
}