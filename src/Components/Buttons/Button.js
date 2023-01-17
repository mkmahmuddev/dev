import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ content, path }) => {
    return (

        <button className={`h-[46px] bg-[#E84949] text-white py-2.5 px-6 rounded my-5 hover:bg-[#e84949e3]`}><Link to={path ? path : ''}>{content}</Link></button>

    );
};

export default Button;