import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import {
  DialogActions,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

// function createData() {}

const Users = () => {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const [deletUserId, setDeletUserId] = useState();

  const navigate = useNavigate();
  const users = useSelector((state) => {
    return state.users;
  });

  const addUser = () => {
    navigate('/add-user');
  };

  // let deletUserId;

  // delete user
  const deleteUser = (id) => {
    dispatch({
      type: 'DELETE',
      payload: {
        id: deletUserId,
      },
    });
    setOpen(false);
  };

  const deleteHandler = (id) => {
    setDeletUserId(id);
    setOpen(true);
    // dispatch({
    //   type: 'DELETE',
    //   payload: {
    //     id: id,
    //   },
    // });
  };

  const handleClose = () => {
    setOpen(false);
  };

  // update user
  const updateHandler = (id) => {
    navigate(`/update-user/${id}`);
  };

  return (
    <React.Fragment>
      <div style={{ width: '100%', marginTop: 50 }}>
        <TableContainer sx={{ width: '60%', margin: 'auto' }} component={Paper}>
          <Table aria-label='customized table'>
            <TableHead>
              <TableRow>
                <StyledTableCell align='center'>Name</StyledTableCell>
                <StyledTableCell align='center'>Email</StyledTableCell>
                <StyledTableCell align='center'>Contact</StyledTableCell>
                <StyledTableCell align='center'>Place</StyledTableCell>
                <StyledTableCell align='center'>Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users &&
                users.map((user) => {
                  return (
                    <StyledTableRow key={user.id}>
                      <StyledTableCell
                        align='center'
                        component='th'
                        scope='row'>
                        {user.name}
                      </StyledTableCell>
                      <StyledTableCell align='center'>
                        {user.email}
                      </StyledTableCell>
                      <StyledTableCell align='center'>
                        {user.contact}
                      </StyledTableCell>
                      <StyledTableCell align='center'>
                        {user.place}
                      </StyledTableCell>
                      <StyledTableCell align='center'>
                        <Button
                          onClick={() => {
                            updateHandler(user.id);
                          }}
                          variant='contained'
                          color='primary'
                          style={{ marginRight: 10 }}>
                          Edit
                        </Button>

                        <Button
                          onClick={() => {
                            deleteHandler(user.id);
                          }}
                          variant='contained'
                          color='secondary'>
                          Delete
                        </Button>
                      </StyledTableCell>
                    </StyledTableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <Grid
          container
          spacing={0}
          direction='column'
          alignItems='center'
          justifyContent='center'
          style={{ marginTop: '20px' }}>
          <Button variant='contained' color='primary' onClick={addUser}>
            AddUser
          </Button>
        </Grid>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'>
        <DialogTitle id='alert-dialog-title'>
          {'Are you sure you want to delete user ?'}
        </DialogTitle>
        {/* <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent> */}
        <DialogActions>
          <Button onClick={deleteUser}>Delete</Button>
          <Button onClick={handleClose} autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default Users;
