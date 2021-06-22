import React from 'react'
import {FormControl} from 'react-bootstrap';


const Filter = ({setSearch}) => {
    return (
        <div>
        <FormControl type="text" placeholder="Search by name" className="mr-sm-2 w-100 m-2 " onChange={(e)=>
            setSearch(e.target.value)
        }/>
        </div>
    )
}

export default Filter
