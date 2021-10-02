import React from 'react'

const KnownMember = (props) => {
   const membersList = props.members.profile.user.allUsers;

   console.log(membersList)

    const filteredList = membersList.map(m => {       
        let memberLast = m.lastName;

        if (memberLast === 'Brown') {
              return memberLast
        } else {
            console.log('didnt work')
        }
    })

    return <div className="knownMemDiv">
        <h1>Known Members</h1>
        <li>
        {filteredList}
        </li>
    </div>
}

export default KnownMember;