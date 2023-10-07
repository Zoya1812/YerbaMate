import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styles from "./style.module.css"
import { Button } from '@mui/material';

export  function FormPropsTextFields() {
return (
<Box
    component="form"
    sx={{'& .MuiTextField-root': { m: 1, width: '40ch' }}}
    noValidate
    autoComplete="off"
    className={styles.box}
>
<div className={styles.root}>
<h1 className={styles.title}>Delivery</h1>
<TextField
    required
    id="standard-required"
    label="Name"
    variant="standard"

/>

<TextField
    required
    id="standard-required"
    label="Email"
    variant="standard"
/>

<TextField
    required
    id="standard-required"
    label="Phone Number"
    variant="standard"
/>

<TextField
    required
    id="standard-required"
    label="Contry"
    variant="standard"
/>

<TextField
    required
    id="standard-required"
    label="City"
    variant="standard"
/>
<TextField
    required
    id="standard-required"
    label="Street"
    variant="standard"
/>
<TextField
    required
    id="standard-required"
    label="House/Building Number"
    variant="standard"
/>
<TextField
    required
    id="standard-required"
    label="Flat/Office Number"
    variant="standard"
/>
<TextField
    id="standard-required"
    label="Floor"
    variant="standard"
    color='success'
/>

</div>
<Button className='button' variant='contained' color='inherit' size='large'> MAKE AN ORDER </Button>

</Box>

);
}
