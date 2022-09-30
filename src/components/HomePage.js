import React, { useState, useEffect } from "react";
import { Button, Dialog } from '@material-ui/core'
import MemberForm from "./MemberForm";
import MembersList from "./MembersList";
import Search from "./Search";

 
 function HomePage() {
  const [open, setOpen] = useState(false);
  const [members, setMembers] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch("http://localhost:9292/members")
    .then((resp) => resp.json())
    .then((data) => setMembers(data))
  }, [])

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleAddMember = (newMember) => {
    setMembers([...members, newMember])
  }

  const handleDelete = (id) => {
    const updatedList = members.filter((member) => member.id !== id)
    setMembers(updatedList)
  }

  const handleDisplayMembers = members.filter((member) => {
    return member
    
  })

  const handleUpdateMember = (updatedMember) => {
    const updateMember = members.map((member) => {
      return member.id === updatedMember.id ? updatedMember : member
    })
    setMembers(updateMember)
  }

   return (
      <div>

        <Dialog open={open} onClose={handleClose}>
          <MemberForm handleClose={handleClose} onAddMember={handleAddMember}/>
        </Dialog>

        <div>
          <Search searchTerm={searchTerm} onSearchChange={setSearchTerm}/>
        </div>

        <div>
          
          <MembersList
            members={handleDisplayMembers}
            onDeleteMember={handleDelete}
            onUpdateMember={handleUpdateMember}
          />
        </div>

        <div className="button">
          <Button variant="contained" color="primary" onClick={handleOpen}>Add New Member</Button>
        </div>
      </div>
   )
 }
 
 export default HomePage