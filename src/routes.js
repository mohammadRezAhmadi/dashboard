import Home from './Pages/home/Home'
import NewUser from './Pages/newUser/NewUser'
import UserList from './Pages/userList/UserList'
import Products from './Pages/products/Products'
import Product from './Pages/product/Product'
let routes = [
    {path: "/" , element: <Home/>},
    {path: "/user" , element: <UserList/>},
    {path: "/newUser" , element: <NewUser/>},
    {path: "/products" , element: <Products/>},
    {path: "/product/:productId" , element: <Product/>},
]

export default routes