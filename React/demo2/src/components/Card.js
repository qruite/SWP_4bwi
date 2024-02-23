import React from 'react';
import './Card.css';

export default function Card({ name, title, imageUri }) {
    return (
        <div id="" className="grid grid-cols-2 border rounded-xl h-80 m-4 w-96">
            <div className='mt-10 ml-10'>
                <h1 className='font-bold text-xl whitespace-normal break-words'>{name}</h1>
                <h2 className='whitespace-normal break-words'>{title}</h2>
            </div>
            <div className='w-full'>
                <img src={imageUri} alt='' className='w-full h-full object-cover' />
            </div>
        </div>
    )
}