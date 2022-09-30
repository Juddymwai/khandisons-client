import { ExpansionPanelActions } from '@material-ui/core'
import React from 'react'
import MemberCard from './MemberCard'



function MembersList( { members, onDeleteMember, onUpdateMember } ) {


  return (
    <div>   
      <table>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Position</th>
          <th>Email Address</th>
          <th>Vetted</th>
        </tr>
      </table>

      {members.map((member) => {
        
        return (
          <div>
            <MemberCard
              key={member.id}
              id={member.id}
              first_name={member.firstName}
              last_name={member.lastName}
              email={member.email}
              position={member.position}
              vetted={member.vetted}
              onDeleteMember={onDeleteMember}
              onUpdateMember={onUpdateMember}
            />
          </div>

        )
        })}
    </div>
  )
}
export default MembersList