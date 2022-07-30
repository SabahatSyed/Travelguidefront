import React, {   } from 'react'
import Vector from '../assets/logo.png';
import Vector1 from '../assets/Vector.png';
import Vector2 from '../assets/tick.png';
import Vector3 from '../assets/Vector3.png';
import Vector4 from '../assets/Vector5.png';
import axios from 'axios'
import { useNavigate } from "react-router-dom";



function Navbar() {
    const navigate = useNavigate();
    // const auth = getAuth(app);
    const logout=()=>{
        axios.get('http://localhost:8080/admin/logout')
            .then(res => {

                console.log("sca",res)
                navigate('/')

            })

    }
    return (
        <>
        <div className='flex flex-col items-center md:items-start'>
            <div className='fixed  w-[300px]   h-screen   bg-[#363740]'>
        <div className='flex ml-6 '>
                <label className='font-Poppins font-extrabold text-2xl  flex mt-14   text-[#A4A6B3] '>
                <img src={Vector} alt='1' className='mx-2' />
                    Admin Panel
                    </label>
                    </div>

                
                <ul className=' my-12 text-xl font-Poppins text-[#9FA2B4] '>
                    <div >
                    <a href='/overview'> <li  > <img src={Vector1} alt='1' className='mx-8 mt-1 h-[19px]' />
                        Overview</li></a> 
                        <a href='/Orders'><li ><img src={Vector2} alt='1' className='mx-8 mt-1 h-[19px]' /> 
                    Orders </li></a>
                    <a href='/Guides'> <li ><img src={Vector3} alt='1' className='mx-8 mt-1 h-[19px]' />  
                   Guides</li></a>
                   <a href='/Travellers'>  <li ><img src={Vector4} alt='1' className='mx-8 mt-1 h-[19px]' /> 
                   Travellers</li></a> 
                   <a onClick={()=>logout()}>  <li ><img src={Vector4} alt='1' className='mx-8 mt-1 h-[19px]' /> 
                   Logout</li></a> 
                    </div>

                </ul>


             

            </div>


        </div>

        </>


    )
}

export default Navbar