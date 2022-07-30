import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Header from './Header'

import GuideCard from './GuideCard';
import Pagination from './Pagination';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Guide() {

    /*const Orders = [
        {
            id: 1,
            Name: 'Jason Crejza',
            Location: 'Stockholm, Sweden',
            Joined: '2002',
            Email: 'abc@yahoo.com',
            Status: 'InActive',
            img: '1',
        },
        {
            id: 2,
            Name: 'Jason Crejza',
            Location: 'Stockholm, Sweden',
            Joined: '2002',
            Email: 'abc@yahoo.com',
            Status: 'Active',
            img: '2',
        },
        {
            id: 3,
            Name: 'Jason Crejza',
            Location: 'Stockholm, Sweden',
            Joined: '2002',
            Email: 'abc@yahoo.com',
            Status: 'Active',
            img: '3',
        },
        {
            id: 4,
            Name: 'Jason Crejza',
            Location: 'Stockholm, Sweden',
            Joined: '2002',
            Email: 'abc@yahoo.com',
            Status: 'Active',
            img: '4',
        },
        {
            id: 5,
            Name: 'Jason Crejza',
            Location: 'Stockholm, Sweden',
            Joined: '2002',
            Email: 'abc@yahoo.com',
            Status: 'Active',
            img: '5',
        },
        {
            id: 5,
            Name: 'Jason Crejza',
            Location: 'Stockholm, Sweden',
            Joined: '2002',
            Email: 'abc@yahoo.com',
            Status: 'Active',
            img: '5',
        },
        {
            id: 5,
            Name: 'Jason Crejza',
            Location: 'Stockholm, Sweden',
            Joined: '2002',
            Email: 'abc@yahoo.com',
            Status: 'Active',
            img: '5',
        },
        {
            id: 5,
            Name: 'Jason Crejza',
            Location: 'Stockholm, Sweden',
            Joined: '2002',
            Email: 'abc@yahoo.com',
            Status: 'InActive',
            img: '5',
        },
        {
            id: 5,
            Name: 'Jason Crejza',
            Location: 'Stockholm, Sweden',
            Joined: '2002',
            Email: 'abc@yahoo.com',
            Status: 'Active',
            img: '5',
        },
        {
            id: 5,
            Name: 'Jason Crejza',
            Location: 'Stockholm, Sweden',
            Joined: '2002',
            Email: 'abc@yahoo.com',
            Status: 'Active',
            img: '5',
        },

    ]*/
    const [CurrentPage, setCurrentPage] = useState(1);
    const [PostPerPage, setPostPerPage] = useState(4);
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    //Data is fetching and seting it Equal to setPosts State
    useEffect( ()=> {
        axios.get('http://localhost:8080/admin/guides')
            .then(res => {

                setPosts(res.data);
                console.log("sca",res.data.length)
                

            }).catch(error=>{

                console.log(error)
                if(error.message=="Request failed with status code 401"){
                    navigate('/')
                }
            })
    },[])
    //Data Showing on the page is limited to 4 Posts only 
    const indexOfLastPost = CurrentPage * PostPerPage;
    const indexOfFirstPost = indexOfLastPost - PostPerPage;
    const CurrentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    
    // This is used for changing the page of posts 
     const paginate = pageNumber => setCurrentPage(pageNumber);

     // Defining the Total posts 
    let total = posts.length;

    // Filtering Out the Active Users in the Posts 
    let StatusActive = 0;
    for (let i = 0; i < posts.length; i++) {
        if (posts[i].Status === 'Active') {
            StatusActive += 1;
        }
    }


    return (
        <div>
             <div>
        <Navbar />
      <Header />
       
        </div>
        <div className='w-[1110px] bg-white rounded-[8px] border-[1px] absolute ml-[350px] mt-[10px]'>
           
            <div className=''>
                <div className='flex justify-end'>
                    <p className='mr-auto w-[200px] font-Poppins m-10 text-2xl font-semibold  '>Guides</p>
                    <div className=' flex flex-col items-end mt-8 mr-14 font-Poppins text-[#4B506D] font-medium '>
                        <div>
                            <label>Total: </label>
                            <label>{total}</label>
                        </div>
                        <div>
                            <label>Current Active: </label>
                            <label>{StatusActive}</label>
                        </div>
                    </div>




                </div>
                <div className='text-[#4B506D] font-Poppins font-medium flex'>
                    <label className='ml-[150px] w-[200px]'>Name</label>
                    <label className='w-[200px]'>Location</label>
                    <label className='w-[240px]'>Joined</label>
                    <label className='w-[170px]'>Email</label>
                    <label className='w-[170px]'>Status</label>
                </div>
                <hr />
            </div>

            {
                CurrentPosts.map((val, id) => {

                    const a = val.img
                    // eslint-disable-next-line react/jsx-pascal-case
                    return <GuideCard
                        key={id}
                        Name={val.Status.userName}
                        Location={val.Status.city}
                        Email={val.Status.email}
                        img={val.Status.profileImage}
                        
                        Status={val.Status.Status}
                    />
                })
            }

                
                <Pagination
                PostPerPage={PostPerPage}
                totalPosts={posts.length}
                paginate={paginate}
                />
                
            </div>

</div>


    )
}

export default Guide