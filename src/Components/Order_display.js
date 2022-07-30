import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Vector from '../assets/dots.png';
function Order_display(props) {
    let color='red'
    if (props.Profit==='LOW'){
        color='bg-[#FEC400]'
    }
    if (props.Profit==='HIGH'){
        color='bg-[#F12B2C]'
    }
    if (props.Profit==='NORMAL'){
        color='bg-[#29CC97]'
    }
    return (
        <div>
      

                <div className='text-black font-Poppins font-medium w-[100%] h-[100px]'>
                <img class="w-[44px] h-[44px] absolute -mt-2 ml-10 rounded-full" src={props.img} alt="Neil image"/>
                    <label className='ml-[150px] absolute '>{props.guide}</label>
                    <div className='ml-[450px]'>
                <div className='flex  '>

                {/* <div className='absolute z-10' style={{ backgroundImage: `url(${props.img})` }}>
  </div>{console.log(props.img)} */}

                            <label className='w-[200px] flex flex-col'>{props.Traveller}<p className='text-[#C5C7CD] text-xs'>on {props.ondate}</p></label>
                            <label className='w-[200px]'>{props.Date}<p className='text-[#C5C7CD] text-xs'>{props.Time}</p></label>
                            <div className='w-[170px]'>
                            <button type="button"
                            className={`text-white bg-{{color}}  font-medium rounded-[100px] text-sm px-4 py-1 mr-2 mb-2 ${color}`}
                            >{props.Profit}</button>
                            </div>
                            <img src={Vector} alt='' className=' w-[4px] h-[14px] ' />

                        </div>

                    </div>
                    <hr  className='mt-10'/>

                </div>





            </div>
      

    )
}

export default Order_display