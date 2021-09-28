import React from 'react'
import { Link } from 'react-router-dom'
import Signup from '../authenticate/Signup'

const List = (props) => {
const familyList = props.familyNames.map((family,idx) => {
    return <Link to={{pathname: "/signup", state: family}}>
            <div>
                {family}
            </div>
            </Link>
})
    
    return (
        <div className="homeList">
            <ul>
              {familyList}
            </ul>
        </div>
    )
}

export default List;