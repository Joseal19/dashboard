import { Outlet } from "react-router-dom";
import React  from 'react';
import Sidebar from "./Sidebar";
import GoBack from "./GoBack";


const Layout = () => {

    return (
      <div className="flex w-full h-full mb-auto flex-wrap">
        <div className="w-full h-full ml-auto mr-auto mt-5">
            <Sidebar/>
        </div>
        <div className="w-full h-full">
            <Outlet />
        </div>
        <div>
          <GoBack />
        </div>
      </div>
    );
}

export default Layout;
