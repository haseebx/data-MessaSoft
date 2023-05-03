import React from 'react';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
  GridContainer,
  Btn,
  LeftBox,
  Heading1,
  Head2,
  Heading3,
  Form,
  FgBtn,
} from './Signup.styled';
import { Box } from '@mui/material';
// import IconButton from '@mui/material/IconButton';
// import InputAdornment from '@mui/material/InputAdornment';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { FingerPrint } from '../../asserts/fingerprint';

const SignUp = () => {
  const [values, setValues] = React.useState({
    firstName: '',
    lastName: '',
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

  const navigate = useNavigate();

  const onSignInHandler = () => {
    navigate('/');
  };
  const onRegisterHandler = () => {
    fetch('http://192.168.8.105:3000/student/create', {
      // Adding method type
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => 
      {if (json.message==='User has been created successfully '){
        onSignInHandler()
      }else{
        alert(json.message)
      }
    
    }
      );
  };
  return (
    <div>
      <Grid container style={{ display: 'flex'   }}>
        <GridContainer item md={7} sm={7}>
        < LeftBox>
            <Heading1> <span ><FingerPrint  /></span>Syntizen</Heading1>
            <Head2>Solution for all your company needs</Head2>
          </ LeftBox>
        </GridContainer>

        <Grid item md={5} sm={5} xs={5}>
          <Box>
            <Heading3>Sign Up!</Heading3>
            <Form>
              <FormControl sx={{ m: 1, width: '60%' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-email">
                  First Name
                </InputLabel>
                <OutlinedInput
                  value={values.firstName}
                  onChange={handleChange('firstName')}
                  label="firstName"
                />
              </FormControl>
              <FormControl sx={{ m: 1, width: '60%' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-email">
                  Last Name
                </InputLabel>
                <OutlinedInput
                  value={values.lastName}
                  onChange={handleChange('lastName')}
                  label="lastName"
                />
              </FormControl>

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
                  label="Password"
                />
              </FormControl>
            </Form>
            <Btn onClick={onRegisterHandler}> Register</Btn>
            <br />
            <FgBtn onClick={onSignInHandler}>Sign In</FgBtn>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignUp;
