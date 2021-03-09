import React, { useState } from 'react';
import TinderCard from 'react-tinder-card'

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'kal sako',
            url: 'C:\Users\AFPA\Desktop\photo_tinder\kal.jpg'
        },
        {
            name: 'mazouze momo',
            url: 'C:\Users\AFPA\Desktop\photo_tinder\momo.jpg'
        }
    ]);

    return (
        <div>
            <h1>test cards tinders page</h1>

            {people.map(person => (
                <TinderCard className="swipe"
                    key={person.name}
                    preventSwipe={["up", "down"]} >

                    <div
                        style={{ backgroundImage: `url(${person.url})` }}
                        className="card"
                    >
                        <h3>{person.name}</h3>

                    </div>
                </TinderCard>
            ))}

        </div>
    );
}
export default TinderCards;