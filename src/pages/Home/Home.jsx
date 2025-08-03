import React, {useEffect} from 'react';
import {cn} from "@/lib/utils.js";
import {useNavigate} from "react-router-dom";

const Home = (
    {
        className,
        ...props
    }
) => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate("/users");
    },[])

    return (
        <div
            className={cn("", className)}
            {...props}
            >
            Home
        </div>
    );
};

export default Home;