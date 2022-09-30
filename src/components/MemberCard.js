import React from 'react'



function MemberCard({ id, first_name, last_name, position, email, vetted: isVetted, onDeleteMember, onUpdateMember }) {
  // const { id, first_name, last_name, position, email, is_vetted: isVetted } = member

  const handleDeleteClick = () => {
    fetch(`http://localhost:9292/members/${id}`, {
      method: "DELETE"
    })
    .then((resp) => {
      if (resp.ok){
        onDeleteMember(id)
      }
    })
  }

  const handleUpdateVetting = () => {
    fetch(`http://localhost:9292/members/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({vetted: !isVetted})
    })
    .then((resp) => resp.json())
    .then((updatedMember) => onUpdateMember(updatedMember))
  }

  return (
    <div className='App'>
      <table>
        <tbody>
          <tr>
            <td>{first_name}</td>
            <td>{last_name}</td>
            <td>{position}</td>
            <td>{email}</td>
            <td>{isVetted ? (
              <button onClick={handleUpdateVetting}>Pass</button>
            ):(
              <button onClick={handleUpdateVetting}>Fail</button>
            )}</td>

            <td><button onClick={handleDeleteClick}>🗑</button> {/*<button onClick={handleUpdateClick}>✏️</button>*/}</td>
          </tr>
        </tbody>
      </table>

    </div>
  )
}

export default MemberCard