import React, {useState} from "react";
import Input from '../components/homeFilter/Input'
import List from '../components/homeFilter/List'

const HomeContainer = (props) => {
    // manage state of list
    const [familyToDisplay, setFamilyToDisplay] = useState(props.familyNames);
    // manage state of the input
    const [filterValue, setFilterValue] = useState('');

   
    const handleFilterChange = e => {
        // value coming from search input
        const newValue = e.target.value;
        // set filtered value to search value
        setFilterValue(newValue);
        // iterate through the fruits list 
        // change value to lowercase and return any matches of the word
            // console.log('family', newValue.toLowerCase());
            if(newValue === 'z' || newValue === 'za' || 
               newValue === 'zar' || newValue === 'zard') {  
                setFamilyToDisplay([])
            } else {
                const filteredFamilyList = props.familyNames.filter(family => {
                    return family.toLowerCase().includes(newValue.toLowerCase())
                });
                // set displayed fruit list to matches from the list
                setFamilyToDisplay(filteredFamilyList);
            }
    }

    return (
        <div className="homeContainer">
            <Input value={filterValue} onChange={handleFilterChange}/>
            <List familyNames={familyToDisplay}/>
        </div>
    )
} 

export default HomeContainer;