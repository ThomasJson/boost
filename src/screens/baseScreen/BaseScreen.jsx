import "./baseScreen.scss";
import React from 'react';
import { Outlet } from "react-router-dom";

import TopNav from "../../components/topNav/TopNav";
import BottomNav from "../../components/bottomNav/BottomNav";

const BaseScreen = () => {
    return (
        <>
            <TopNav />
            <Outlet />
            <BottomNav />
        </>
    );
};

export default BaseScreen;