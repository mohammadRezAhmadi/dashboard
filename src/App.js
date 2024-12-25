import { useRoutes } from "react-router-dom";
import './App.css'
import route from './routes'
import Topbar from "./Components/topbar/Topbar";
import Sidebar from "./Components/sidebar/Sidebar";

function App() {
  let router = useRoutes(route)
  return (
    <>
    <Topbar />
    <div className="container">
    <Sidebar />
    {router}
    </div>
    </>
  );
}

export default App;
