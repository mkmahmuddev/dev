import React from 'react';
import useTitle from '../../Hooks/useTitle';

const Blog = () => {
    useTitle('Blog')

    return (
        <div>
           <h2 className='text-4xl text-[#E84949] text-left py-24'>Blog</h2>  
        </div>
    );
};

export default Blog;