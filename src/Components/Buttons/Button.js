import React from 'react';

const Button = ({content, color}) => {
    return (
        <div>
            <button className={`h-[46px] w-[114px] bg-[#E84949] text-white py-2.5 px-6 rounded my-5`}>{content}</button>
        </div>
    );
};

export default Button;