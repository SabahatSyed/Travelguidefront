import React from 'react';
import AdminCard from './AdminCard';
import Navbar from './Navbar'
import Header from './Header'
const CardList = () => {
    const Card_data=[
        {
            id:1,
            title:'Total',
            data:'$21,360'

        },
        {
            id:2,
            title:'Available',
            data:'$21,360'

        },
        {
            id:3,
            title:'Withdrawn',
            data:'$21,360'

        },
        {
            id:4,
            title:'Clearance',
            data:'$21,360'

        },
    ]
    return (
        <div className='mt-10  flex gap-[30px] ml-[300px] justify-around'>
            {
                Card_data.map((val,id)=>{
                    return <AdminCard 
                    key={id}
                    title={val.title}
                    data={val.data}
                    />
                })
            }
        </div>
    );
}

export default CardList;
