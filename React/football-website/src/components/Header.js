import React from 'react'
import '../style/Header.css'

export default function Header(header) {
    return (
        <div>
            <h1 className='header'>{header.name}</h1>
        </div>
    )
}
