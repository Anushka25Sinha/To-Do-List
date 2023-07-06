import React from 'react'
// import DeleteIcon from '@mui/icons-material/Delete';

export default function  (props) {
  return (
    <li className='list-item'>
        {props.item}
        <span className='icons'>
        {/* <DeleteIcond/> */}
        <i className="fa-solid fa-trash"
        onClick={e=>{
          props.DeleteListItem(props.index)
        }}></i>
        </span> 
    </li>

  )
}
