import { useState } from 'react';
import { Box, Grid, TextField, Card, CardContent, CardAction } from '@mui/material';
import MyCheckbox from './checkbox';

export default function Formulario() {
  const [usuario, setUsuario] = useState('');
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [confirmacion, setConfirmacion] = useState('');
  const [terminos, setTerminos] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Has creado una cuenta correctamente');
  };
  console.log(usuario, correo, contraseña, confirmacion, terminos);
  return (
    <>
      <h2> Por favor, ingresa los siguientes datos para crear tu cuenta en Nomadapp</h2>
      <Box my={2}>
        <Grid container direction='row' spacing={2}>
          <Grid item xs={20} sm={20} md={20} lg={20} xl={20}>
            <Card>
              <CardContent>
                <TextField
                  error={false}
                  label='Usuario'
                  type='text'
                  name='usuario'
                  margin='dense'
                  fullWidth
                  variant='outlined'
                />
                <Grid container direction='row' spacing={2}>
                  <Grid item xs={20} sm={20} md={20} lg={20} xl={20}>
                    <Card>
                      <TextField
                        error={false}
                        label='Correo electrónico'
                        type='text'
                        name='Correo electrónico'
                        margin='dense'
                        fullWidth
                        variant='outlined'
                      />
                      
                    </Card>
                  </Grid>
                </Grid>
                <Grid container direction='row' spacing={2}>
                  <Grid item xs={20} sm={20} md={20} lg={20} xl={20}>
                    <Card>
                      <TextField
                        error={false}
                        label='Contraseña'
                        type='text'
                        name='Contraseña'
                        margin='dense'
                        fullWidth
                        variant='outlined'
                      />
                      
                    </Card>
                  </Grid>
                </Grid>
                <Grid container direction='row' spacing={2}>
                  <Grid item xs={20} sm={20} md={20} lg={20} xl={20}>
                    <Card>
                      <TextField
                        error={false}
                        label='Confirmar Contraseña'
                        type='text'
                        name='Confirmar Contraseña'
                        margin='dense'
                        fullWidth
                        variant='outlined'
                      />
                      
                    </Card>
                  </Grid>
                </Grid>
                
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        
      </Box>

      <MyCheckbox />
      
      <label htmlFor='terminos'> He leído y acepto los términos y condiciones</label>
      <input
        type='checkbox'
        value={terminos}
        id='terminos'
        name='terminos'
        onChange={(e) => setTerminos(e.target.checked)}
      />
      <input type='submit' />
    </>
  );
};

export default Formulario;