import Navbar from './Navbar'

import React from 'react';
import { useUser } from "@clerk/clerk-react";

const Layout = (props) => {
    const { isLoaded, isSignedIn, user } = useUser();

    console.log(`Loading Layout with isSignedIn: ${isSignedIn}`)
    
    return (
        <>
            <Navbar 
                app_state={props.app_state} 
                app_set_state={props.app_set_state} 
                isLoaded={isLoaded} 
                isSignedIn={isSignedIn} 
                user={user}
            />
            {React.cloneElement(props.children, {isLoaded: isLoaded, isSignedIn: isSignedIn, user: user})}
        </>
    )
}

export default Layout;