import React from 'react';

const KeywordButton = ({content}) => {
    return (
        <a href="" class="m-2 px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-[#4F47C8] inline-block">
            <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#4F47C8] group-hover:h-full opacity-90"></span>
            <span class="relative group-hover:text-white">{content}</span>
        </a>
    );
};

export default KeywordButton;