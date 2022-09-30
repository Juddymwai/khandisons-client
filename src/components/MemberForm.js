import React, { useState } from 'react'
import { TextField, Button, makeStyles } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "Center",
    alignItems: "center",
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: "300px"
    },

    '& .MuiButtonBase-root': {
      margin: theme.spacing(2)
    }
  }
}));

function MemberForm( { handleClose, onAddMember } ) {

  const classes = useStyles();
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [position, setPosition] = useState("")

  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, email, position);

    const addMember = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      position: position
    }

    fetch("http://localhost:9292/members", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(addMember)
    })
    .then((resp) => resp.json())
    .then((newMember) => onAddMember(newMember))

    handleClose();
  }

  return (
      <form className={classes.root} onSubmit={handleSubmit}>
        <TextField 
          label="First Name" 
          variant="filled" 
          required
          value={firstName}
          onChange = {(e) => setFirstName(e.target.value)}
        />

        <TextField 
          label="Last Name" 
          variant="filled" 
          required
          value={lastName}
          onChange = {(e) => setLastName(e.target.value)}
        />

        <TextField 
          label="Email Address" 
          variant="filled" 
          type="email" 
          required
          value={email}
          onChange = {(e) => setEmail(e.target.value)}
        />

        <TextField 
          label="Position" 
          variant="filled" 
          type="text" 
          required
          value={position}
          onChange = {(e) => setPosition(e.target.value)}
        />

        <div>
          <Button variant="contained" onClick={handleClose}>Cancel</Button>
          <Button type="submit" variant="contained">Add Member</Button>
        </div>
      </form>
  )
}

export default MemberForm