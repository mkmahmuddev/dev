import React from 'react';
import planeIcon from '../../Assets/contact/plane.png'
import useTitle from '../../Hooks/useTitle';

const BlogDetails = () => {
    useTitle('Blog Description')

    const handelSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className='w-full my-10  md:w-9/12 mx-auto  text-left p-2'>
            <img className='h-[20vh] w-full mx-auto' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" alt="" />
            <h1 className='text-5xl font-bold py-4'>Blog Title Goes Hare</h1>
            <div className="use py-5">
                <h2 className='text-xl'>Jhon</h2>
                <p>Jan-19-2023 , <span> 3 min read</span></p>
            </div>
            <div className="content">
                <p className='py-5'><span className='text-4xl'>L</span>orem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aspernatur, magni facilis corporis odit in, fuga eius recusandae reprehenderit doloribus exercitationem nostrum error minus omnis. Error nisi iusto, tenetur labore non quo natus laudantium tempore quasi velit veniam nam itaque officiis, alias nemo culpa. Nulla amet nihil esse tempora cumque?</p>
                <p className='py-5'><span className='text-4xl'>L</span>orem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aspernatur, magni facilis corporis odit in, fuga eius recusandae reprehenderit doloribus exercitationem nostrum error minus omnis. Error nisi iusto, tenetur labore non quo natus laudantium tempore quasi velit veniam nam itaque officiis, alias nemo culpa. Nulla amet nihil esse tempora cumque?</p>
                <p className='py-5'><span className='text-4xl'>L</span>orem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aspernatur, magni facilis corporis odit in, fuga eius recusandae reprehenderit doloribus exercitationem nostrum error minus omnis. Error nisi iusto, tenetur labore non quo natus laudantium tempore quasi velit veniam nam itaque officiis, alias nemo culpa. Nulla amet nihil esse tempora cumque?</p>
            </div>
            <div className='h-[2px] w-full bg-[#E84949] my-24'></div>
            <form  className='flex justify-between my-5'>
                <input type="email" className='border-2 p-2 w-2/3 rounded-lg shadow-lg text-[16px] my-5 focus:outline-none' placeholder='Enter email address' name="" id="" />
                <button onClick={handelSubmit} className={`h-[46px] w-[114px] bg-[#4F47C8] text-white py-2.5 px-10 rounded my-5 `}> <div className='flex justify-center'><span>Send</span> <img className='px-2' src={planeIcon} alt="" /></div></button>
            </form>
        </div>
    );
};

export default BlogDetails;