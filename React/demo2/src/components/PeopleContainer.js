import React, { useEffect, useState } from 'react';
import Card from './Card';


export default function PeopleContainer() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetch("https://65b3b754770d43aba47a4b3e.mockapi.io/person").then(
            (res) => res.json().then((data) => {
                console.log(data);
                setPeople(data);
            })
        );
    }, []);

    return (
        <div>
            <h1>People</h1>
            <div className='grid grid-cols-4 p-10'>
                {people.map(person => {
                    return <Card name={person.name} imageUri={person.avatar} title={person.jobtitle} />
                })}
            </div>
        </div>
    )
}
