import React from 'react';
import "./DisplaySection.css";
import { MdDoubleArrow  } from 'react-icons/md';

const DisplaySection = () => {
    return (
        <div className='mx-[320px] mt-[25px]'>
            <div className='flex gap-[51px]'>
                <div className='display-first-section'>
                    <div className='content-sec-one'>
                        <h1>SALAD</h1>
                        <div className='shop-now-btn ml-[250px]'>
                            <button>Shop Now</button>
                            <MdDoubleArrow className='ml-1 ' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default DisplaySection;