import React from "react";
import Header from "./header";

export default function CommonLayout({children} : {children:React.ReactNode})
{

    const isAuth = false;

    return <div className="min-h-screen bg-white">
        {isAuth && <Header />}
        {children}
    </div>
}