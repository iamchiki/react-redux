import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Grid, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateUser = () => {
  //   navigation and state hooks
  const users = useSelector((state) => {
    return state.users;
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userId } = useParams();

  const user = users.find((user) => {
    return user.id === userId;
  });

  // input states
  const [nameState, setNameState] = useState({
    name: user.name,
    nameError: false,
    nameHelper: '',
  });
  const [emailState, setEmailState] = useState({
    email: user.email,
    emailError: false,
    emailHelper: '',
  });
  const [contactState, setContactState] = useState({
    contact: user.contact,
    contactError: false,
    contactHelper: '',
  });
  const [placeState, setPlaceState] = useState({
    place: user.place,
    placeError: false,
    placeHelper: '',
  });

  //   submit user
  const submitHandler = (e) => {
    e.preventDefault();
    if (nameState.name === '') {
      setNameState({
        ...nameState,
        nameError: true,
        nameHelper: 'Please Enter Name',
      });
    }
    if (emailState.email === '') {
      setEmailState({
        ...emailState,
        emailError: true,
        emailHelper: 'Please Enter Email',
      });
    }
    if (contactState.contact === '') {
      setContactState({
        ...contactState,
        contactError: true,
        contactHelper: 'Please Enter Contact',
      });
    }
    if (placeState.place === '') {
      setPlaceState({
        ...placeState,
        placeError: true,
        placeHelper: 'Please Enter Place',
      });
    }

    // validating and submitting user
    if (
      nameState.name !== '' &&
      emailState.email !== '' &&
      contactState.contact !== '' &&
      placeState.place !== ''
    ) {
      dispatch({
        type: 'UPDATE',
        payload: {
          id: userId,
          name: nameState.name,
          email: emailState.email,
          contact: contactState.contact,
          place: placeState.place,
        },
      });
      navigate('/users');
    }
  };
  return (
    <Grid
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justifyContent='center'
      style={{ minHeight: '100vh' }}>
      <Typography variant='h3' gutterBottom component='div'>
        Update User
      </Typography>
      <Box
        component='form'
        sx={{
          '& .MuiTextField-root': { m: 1, width: '50ch' },
        }}
        noValidate
        autoComplete='off'>
        <div>
          <TextField
            error={nameState.nameError}
            id='outlined-error-helper-text'
            label='Name'
            value={nameState.name}
            helperText={nameState.nameHelper}
            onChange={(e) => {
              setNameState({
                name: e.currentTarget.value,
                nameError: false,
                nameHelper: '',
              });
            }}
          />
        </div>
        <div>
          <TextField
            error={emailState.emailError}
            id='outlined-error-helper-text'
            label='Email'
            value={emailState.email}
            helperText={emailState.emailHelper}
            onChange={(e) => {
              setEmailState({
                email: e.currentTarget.value,
                emailError: false,
                emailHelper: '',
              });
            }}
          />
        </div>
        <div>
          <TextField
            error={contactState.contactError}
            id='outlined-error-helper-text'
            label='Contact'
            type='number'
            value={contactState.contact}
            helperText={contactState.contactHelper}
            onChange={(e) => {
              setContactState({
                contact: e.currentTarget.value,
                contactError: false,
                contactHelper: '',
              });
            }}
          />
        </div>
        <div>
          <TextField
            error={placeState.placeError}
            id='outlined-error-helper-text'
            label='Place'
            value={placeState.place}
            helperText={placeState.placeHelper}
            onChange={(e) => {
              setPlaceState({
                place: e.currentTarget.value,
                placeError: false,
                placeHelper: '',
              });
            }}
          />
        </div>
        <Grid
          container
          spacing={0}
          direction='column'
          alignItems='center'
          justifyContent='center'
          style={{ margin: '20px' }}>
          <Button
            variant='contained'
            color='primary'
            onClick={submitHandler}
            type='submit'>
            Update User
          </Button>
        </Grid>
      </Box>
    </Grid>
  );
};

export default UpdateUser;
