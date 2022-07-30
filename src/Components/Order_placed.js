import React from 'react'
import Order_display from './Order_display'
import Vector from '../assets/sort.png';
import Vector1 from '../assets/Filter.png';
import arrow1 from '../assets/arrw1.png';
import arrow2 from '../assets/arrw2.png';
import Navbar from './Navbar'
import Header from './Header'
function Order_placed() {

    const Orders = [
        {
            id: 1,
            Guide: 'Jason Crejza',
            Traveller: 'Matt Damon',
            Date: 'May 26,2022',
            Profit: 'HIGH',
            img:'1',
            ondate:'24.05.2022',
            Time:'6:30 PM'

        },
        {
            id: 1,
            Guide: 'Emily Watson',
            Traveller: 'Tom Cruise',
            Date: 'May 26,2022',
            Profit: 'LOW',
            img:'5',
            ondate:'24.05.2022',
            Time:'6:30 PM'

        },
        {
            id: 1,
            Guide: 'Sarah Taylor',
            Traveller: 'Robert Dow',
            Date: 'May 26,2022',
            Profit: 'NORMAL',
            img:'6',
            ondate:'24.05.2022',
            Time:'6:30 PM'
        },
        {
            id: 1,
            Guide: 'Jeff Kim ',
            Traveller: 'Henry Cavil',
            Date: 'May 26,2022',
            Profit: 'HIGH',
            img:'2',
            ondate:'24.05.2022',
            Time:'6:30 PM'
        },
        {
            id: 1,
            Guide: 'Steve Shaprio',
            Traveller: 'Chris Evans',
            Date: 'May 26,2022',
            Profit: 'LOW',
            img:'3',
            ondate:'24.05.2022',
            Time:'6:30 PM'
        },
        {
            id: 1,
            Guide: 'Robert Downey',
            Traveller: 'Tom Cruise',
            Date: 'May 26,2022',
            Profit: 'HIGH',
            img:'4',
            ondate:'24.05.2022',
            Time:'6:30 PM'
        },
    ]
    return (
        <div>
            <div>
        <Navbar />
      <Header />
       
        </div>
        <div className='w-[1110px] bg-white rounded-[8px] border-[1px] absolute left-[350px] mt-[10px]'>
            
            <div className='flex'>
                <p className='w-[200px] font-Poppins m-10 text-2xl font-semibold  '>All Orders</p>
                <div className='flex w-[100%] justify-end mt-10 mr-14 font-Poppins text-[#4B506D] font-medium space-x-5'>
                    <img src={Vector} alt='' className=' w-[17px] h-[14px] mt-[5px] ' />
                    <label>Sort</label>
                    <img src={Vector1} alt='' className=' w-[14px] h-[14px] mt-[5px] ' />
                    <label>Filter</label>
                </div>



            </div>
            <div className='text-[#4B506D] font-Poppins font-medium'>
                <label className='ml-[180px] absolute '>Guide</label>
                <div className='ml-[440px]'>
                <div className='flex  '>
                <label className='w-[220px]'>Traveller Name</label>
                <label className='w-[200px]'>Date</label>
                <label className='w-[170px]'>Profit</label>
                </div>
                </div>
<hr />
            </div>

            {
                Orders.map((val, id) => {
                    
const a=val.img
                    // eslint-disable-next-line react/jsx-pascal-case
                    return <Order_display
                        key={id}
                        guide={val.Guide}
                        Traveller={val.Traveller}
                        Profit={val.Profit}
                        Date={val.Date}
                        img= {require('./profile/img'+a+'.png')}
                        ondate={val.ondate}
                        Time={val.Time}
                        
                    />
                })
            }
            <div className='flex mb-7'>
                <div className='flex justify-end w-[90%] text-[#9FA2B4] space-x-40'>
                <label>Rows per page 8</label>
                <label >1-8 of 1240</label>

                </div>
                <img src={arrow1} alt='' className='  ' />
            <img src={arrow2} alt='' className='  ' />
            </div>
</div>

        </div>
    )
}

export default Order_placed