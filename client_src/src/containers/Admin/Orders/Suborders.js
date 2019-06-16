import React from 'react';

const Suborders = (props) => {
    const items = props.list.map((item, i) => {
        return (
            <p>{item.name} ({item.price}€)</p>
        )
    })

    return (
        <div>
            {items}
        </div>
    )
}

export default Suborders