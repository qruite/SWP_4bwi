import React, { useEffect, useState } from 'react';
import Card from './Card';


export default function PeopleContainer() {
    const [people, setPeople] = useState([]);
    const filterPeople = (filter) => {
        let filtered = people.filter(person => person.name.includes(filter));
        setPeople(filtered);
    }

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
            <div className=''>
                <input className='border-2 border-black p-4 mt-6 ml-6' type='text' placeholder='Search' onChange={(el) => {
                    filterPeople(el.target.value)
                }} />
            </div>

            <div className='grid grid-cols-4 p-10'>
                {people.map(person => {
                    return <Card name={person.name} imageUri={person.avatar} title={person.jobtitle} />
                })}
            </div>
        </div>
    )
}
