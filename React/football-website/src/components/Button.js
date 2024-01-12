import React from 'react'
import '../style/Button.css'

export default function Button(props) {
    return (
        <div className='buttonComponent'>{props.value}</div>
    )
}
