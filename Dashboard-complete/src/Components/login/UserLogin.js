import React from 'react';
import { Grid } from '@mui/material';
import { useNavigate } from "react-router-dom";
import {
  GridContainer,
  Btn,
  Heading1,
  Head2,
  Heading3,
  Heading4,
  Form,
  LeftBox,
  FgBtn, 
  SigBtn,

  // Fingr,
} from './userLogin.styled';
import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { FingerPrint } from '../../asserts/fingerprint';

const UserLogin = () => {
  const [values, setValues] = React.useState({
    email: '',
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  
    
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
  const navigate=useNavigate();


   const   onClickHandler =()=>{
    fetch('http://192.168.8.105:3000/student/login', {
      // Adding method type
      method: 'POST',

       // Adding body or contents to send
      body: JSON.stringify(values),

      // Adding headers to the request
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.json())
           
           
      // Displaying results to console
      .then((json) =>
       
      { console.log('json=>',json);
       if (json.message==='Successfully login'){
        navigate('/DashBorad')
      }else{
        alert(json.message)
      }})
    }
   const onSignUp =()=>{
    navigate('/SignUp')
   }

  return (
    <div>
      <Grid container style={{ display: 'flex' }}>
        <GridContainer
          item
          md={7}
          sm={7}
          xs={7}
        >
          < LeftBox>
            <Heading1> <span ><FingerPrint  /></span>Syntizen</Heading1>
            <Head2>Solution for all your company needs</Head2>
          </ LeftBox>
        </GridContainer>

        <Grid item md={5} sm={5} xs={5}  >
          <Box>
            <Heading3>Hello Again! 👋🏼 </Heading3>
            <Heading4>Welcome Back</Heading4>
            <Form>
              <FormControl sx={{ m: 1, width: '60%' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-email">
                  Email Address
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-email"
                  value={values.email}
                  onChange={handleChange('email')}
                  label="Email"
                />
              </FormControl>
              <FormControl sx={{ m: 1, width: '60%' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={values.showPassword ? 'text' : 'password'}
                  value={values.password}
                  onChange={handleChange('password')}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
            </Form>
            <Btn onClick={onClickHandler}>Login</Btn>
            <br />
            <FgBtn  >Forgot Password ?</FgBtn>
            <SigBtn  onClick={onSignUp} >SignUp</SigBtn>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default UserLogin;
