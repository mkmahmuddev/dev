import React from 'react';

const SecButton = ({ content }) => {
    return (

        <button className={`h-[46px] w-[114px] bg-[#4F47C8] text-white py-2.5 px-6 rounded my-5 hover:bg-[#4f47c8e3]`}>{content}</button>
    );
};

export default SecButton;