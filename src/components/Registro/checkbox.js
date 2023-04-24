import {Box, FormControlLabel, Checkbox } from "@mui/material"
import { useState } from "react"


export const MyCheckbox = () => {
    const [aceptarTyC, setAceptarTyC  ] = useState(false)
    console.log({aceptarTyC})
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAceptarTyC(event.target.checked)
    }
    return (
        <Box>
        <Box>
            <FormControlLabel
            label= "He leído y acepto los términos y condiciones"
            control={<Checkbox checked={aceptarTyC} onChange={handleChange} />}
            />
        </Box>
        </Box>

    )
}