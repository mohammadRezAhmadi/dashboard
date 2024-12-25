import React , {useState} from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './Product.css'
import Chart from '../../Components/chart/Chart'
import {productDataChart , products} from './../../Data'
import PublishIcon from '@mui/icons-material/Publish';
export default function Product() {

  const param = useParams().productId;
  console.log(param);
  
  const [dataProduct , setDataProduct] = useState(products.find(product => product.id == param))
  console.log("product data " + Object.entries(dataProduct));
  
  const [chartProductData , setCharProductData] = useState(productDataChart.find(product => product.id == param))
  
  return (
    <div className='product'>
        <div className="productTitleContainer">
            <h1 className="productTitle">Product</h1>
            <Link>
                <button className='productAddButton'>Create</button>
            </Link>
        </div>
        <div className="productTop">
          <div className="productTopLeft">
            <Chart title="Sales in month" data={chartProductData.dataChart} dataKey="sales"/>
          </div>
          <div className="productTopRight">
            <div className="productTopInfo">
              <img src={dataProduct.avatar} alt="Dell laptop" className='productImg'/>
              <span className='productName'>{dataProduct.title}</span>
            </div>

            <div className="productInfoBottom">
              <div className="productInfoItem">
                <div className="productinfoKey">ID:</div>
                <div className="productinfoValue">{dataProduct.id}</div>
              </div>
              <div className="productInfoItem">
                <div className="productinfoKey">Name:</div>
                <div className="productinfoValue">{dataProduct.title}</div>
              </div>
              <div className="productInfoItem">
                <div className="productinfoKey">Price:</div>
                <div className="productinfoValue">{dataProduct.price}</div>
              </div>
              <div className="productInfoItem">
                <div className="productinfoKey">َActive:</div>
                <div className="productinfoValue">Yes</div>
              </div>
              <div className="productInfoItem">
                <div className="productinfoKey">In Stock:</div>
                <div className="productinfoValue">No</div>
              </div>
            </div>
          </div>
        </div>

        <div className="productBottom">
          <form className="productForm">
            <div className="productFormLeft">
              <label>Product Name</label>
              <input type="text" placeholder='Dell Laptop'/>

              <label>In Stock</label>
              <select id="inStock">
              <option value="yes">Yes</option>
              <option value="No">No</option>
              </select>
              <label>Active</label>
              <select id="inActive">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="productFormRight">
              <div className="productUploader">
                <img src={dataProduct.avatar} alt="" />
                <label>
                  <PublishIcon/>
                </label>
              </div>
                <input type="file" className='productUploaderBtn'/>
            </div>
          </form>
        </div>
    </div>
  )
}
