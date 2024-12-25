import React , {useState} from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import './UserList.css'
import {userRows} from '../../Data'
import { Link } from 'react-router-dom';
import { DeleteOutline } from '@mui/icons-material';

export default function UserList() {
  const [userData , setUserData] = useState(userRows)

 
  const deleteUser = userId => {
    setUserData(userData.filter(user => user.id !== userId))
  }

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 40,
    }, 
    {
      field: "user" , 
      headerName: "User" , 
      width: 200,
      renderCell: (params)=>{
        
        return (
          <Link to="/" className='link'>
            <div className="userListuser">
              <img src={params.row.avatar} alt="" className="userListImg" />
            {params.row.username}
              
            </div>
          </Link>
        )
      }
    },
    {
      field: "email",
      headerName: "Email", 
      width:200,
    },
    {
      field: "transactions",
      headerName:"Transactions",
      width:120,
    },
    {
      field: "action",
      headerName:"Action",
      width:200,
      renderCell: (params)=>{
        return(
          <div className='userListAction'>
          <Link to={`/user/${params.row.id}`} className='link'>
            <button className='userListEdit'>Edit</button>
          </Link>
          <DeleteOutline className='userListIcon' onClick={()=> deleteUser(params.row.id)}/>
          </div>
        )
      }
    }
  ]
  
  return (
    <div className='userList'>
          <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={userData}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 4,
            },
          },
        }}
        pageSizeOptions={[2]}
        disableRowSelectionOnClick
      />
    </Box>
    </div>
  )
}
