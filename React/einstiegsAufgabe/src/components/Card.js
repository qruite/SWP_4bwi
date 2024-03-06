import React from 'react'
import "../style/Card.css"

export default function Card(props) {
    return (
        <div className='card'>
            <div className='cardImage'><img src={props.image} width="330px" /></div>
            <div className='cardInfo'>
                <div className='cardName'>{props.name}</div>
                <div className='cardDesc'>{props.desc}</div>
            </div>
        </div>
    )
}
