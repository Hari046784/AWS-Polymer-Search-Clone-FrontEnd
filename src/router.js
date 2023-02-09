import Header from "./Components/header/header";
import {BrowserRouter,Navigate, Route, Routes} from "react-router-dom";
import Query from './Pages/query/query';
import Chart from './Pages/Chart/chart';
import DismissHeader from './Components/dismissHeader/dismissHeader';
import Sidebar from './Components/sidebar/sidebar';
import { useContext } from "react";
import { DataContext } from "./Context/context";



export default function Router()
{
    const {loading,error}=useContext(DataContext)
    return(
      <BrowserRouter>
            <DismissHeader/>
            <Header/>
            {
                loading?<p>loading...</p>:error?<p>oops sorry,something went wrong</p>:(
              <div className="d-flex">
              <Sidebar/>
              <Routes>
                <Route path="/search" element={<Query/>}/>
                <Route path="/chart" element={<Chart/>}/>
                <Route path="/" 
                  element={<Navigate to="/search"/>}
                />
              </Routes>
              </div>
            )}
      </BrowserRouter>
    )
}