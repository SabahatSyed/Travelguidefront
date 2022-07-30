import React, { useState,useEffect } from 'react'
import Reviewsdisplay from './Reviewsdisplay'
import Vector2 from '../assets/photo.png';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar'
import Header from './Header'
import { useNavigate } from "react-router-dom";

function Rating() {
    const navigate = useNavigate();

    let location = useLocation().state.state;
    console.log('dsn',location)

    const [post,setPost]=useState();
    

    const Reviews = [
        {
            id: 0,
            name: 'Jason Crejza',
            desc: 'Enjoy a Thrilling Shared Airboat Ride, and Explore the Exhibits',
            Rating: 5,
            img: '1',

        },
        {
            id: 1,
            name: 'Emily Watson',
            desc: 'Enjoy a Thrilling Shared Airboat Ride, and Explore the Exhibits',
            Rating: 4,
            img: '5',

        },
        {
            id: 2,
            name: 'Sarah Taylor',
            desc: 'Enjoy a Thrilling Shared Airboat Ride, and Explore the Exhibits',
            Rating: 3,
            img: '3',
        },

    ]
    const len= Reviews.length+122
    
    /*useState(async()=> {
        console.log('ds')
       await axios.get('http://localhost:8080/admin/guidesdetail/'+location.state.email)
            .then(res => {

                setPost(res.data[0].city);
                p=res.data
                console.log("sca",res.data[0].city)
                

            })
    })

*/
useEffect(()=>{

     axios.get('http://localhost:8080/admin/guidesdetail/'+location.email)
            .then(res => {

               
                console.log("sca",res.data[0].city)
                

            }).catch(error=>{

                console.log(error)
                if(error.message=="Request failed with status code 401"){
                    navigate('/')
                }
            })
},[])
    return (
        <div>
            <div>
        <Navbar />
      <Header />
       </div>
        
        <div>
            
            <div className='w-[1110px] ml-[450px] bg-white rounded-[8px] border-[1px] absolute mt-[10px]'>
                <div className='flex  justify-end'>
                    <div className='mr-auto flex m-12 '>
                        <img src={location.img} alt='' className='   h-[60px] ' />
                        <div className='ml-6'>
                            <label className='pt-5  font-Poppins font-large  '> {location.Name}</label>
                            <p className='  font-Poppins text-sm text-gray-400  '>Uploaded 1hr ago</p>
                        </div>
                    </div>
                    <a href='/' className='pt-6 font-Poppins font-medium m-8 '>View All</a>
                </div>
                <div className='w-[950px] ml-12 font-Poppins'>
                From Pioneers to Private Mega-Yachts: A Half-Day Tour through
                    126 YearsFrom Pioneers to Private Mega-Yachts: A Half-Day Tou
                    r through 126 YearsFrom Pioneers to Private Mega-Yachts:
                    A Half-Day Tour through 126 YearsFrom Pioneers to Private
                    Mega-Yachts: A Half-Day Tour through 126 Years
                </div>
                <div className='ml-8 mb-5'>
                <label className='text-xl font-Poppins font-medium flex mt-10 ml-5'>Seller Reviews ( {len} )</label>

            <hr className='w-[650px]'/>
            {
                Reviews.map((val, id) => {

                    const a = val.img
                    // eslint-disable-next-line react/jsx-pascal-case
                    return <Reviewsdisplay
                        key={id}
                        name={val.name}
                        desc={val.desc}
                        value={val.Rating}
                        img={require('./profile/img' + a + '.png')}

                    />
                })
            }
 <button type="submit" class="w-[650px] h-[60px] mt-12 ml-20 text-white bg-[#A1D3D9] font-Poppins text-lg rounded-[7px] ">Contact Traveller</button>
 </div>
            </div>
           
        </div>
        
       </div>
    )
}

export default Rating