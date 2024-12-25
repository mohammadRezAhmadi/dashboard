import React , {useState} from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import './Products.css'
import {products} from '../../Data'
import { Link } from 'react-router-dom';
import { DeleteOutline } from '@mui/icons-material';

export default function Products() {
  const [productData , setProductData] = useState(products)

 
  const deleteProduct = productId => {
    setProductData(productData.filter(product => product.id !== productId))
    console.log(productId);
    console.log(productData);
    
    
  }

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 40,
    }, 
    {
      field: "dsasd" , 
      headerName: "product" , 
      width: 200,
      renderCell: (params)=>{
        
        return (
          <Link to={`/product/${params.row.id}`} className='link'>
            <div className="userListuser">
              <img src={params.row.avatar} alt="" className="userListImg" />
            {params.row.title}
              
            </div>
          </Link>
        )
      }
    },
    {
      field: "price",
      headerName:"Price",
      width:120,
    },
    {
      field: "action",
      headerName:"Action",
      width:200,
      renderCell: (params)=>{
        return(
          <div className='userListAction'>
          <Link to={`/product/${params.row.id}`} className='link'>
            <button className='userListEdit'>Edit</button>
          </Link>
          <DeleteOutline className='userListIcon' onClick={()=> deleteProduct(params.row.id)}/>
          </div>
        )
      }
    }
  ]
  
  return (
    <div className='userList'>
          <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={productData}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 3,
            },
          },
        }}
      checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
    </div>
  )
}
