import React from 'react';
import Card from './Card'
import './CardHolder.css';

function CardHolder() {  
    const data = [
        { id: 1, rotate: '1', name: 'Test1', description: 'red' },
        { id: 2, rotate: '2', name: 'Test2', description: 'Yellow' },
        { id: 3, rotate: '3', name: 'Test3', description: 'Orange' },
    ];
    return (
        <div className="card-holder">
            {data.map((card) => (
                <Card key={card.id} rotate={card.rotate} name={card.name} description={card.description}> 
                </Card>
            ))}

            <Card name="TestName" description="TestDescription"/>
        </div>
    );
}

export default CardHolder;