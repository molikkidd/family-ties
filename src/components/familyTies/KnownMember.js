import React from 'react'
import MemberCard from './MemberCard'

const KnownMember = (props) => {
    const allMembers = props.members.map(member=> {
            return <MemberCard firstName={member.firstName} 
                    lastName={member.lastName} 
                    proImage={member.bio[0].profileImage}/> 
   })
    return <div className="knownMemDiv">
                {/* <div>
                    <h1>Known Members</h1>
                </div> */}
                <div className="memberDiv">
                    {allMembers}
                </div>
            </div>
}

export default KnownMember;