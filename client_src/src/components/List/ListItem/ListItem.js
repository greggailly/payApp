import React from 'react'

import './ListItem.css'

const ListItem = (props) => {
    return (
        <div className="row mt-3 listItem">
            <div className="col-md-5"><strong>{props.item.name}</strong></div>
            <div className="col-md-5">{props.item.price} &euro;</div>
            <div className="col-md-2 trash" onClick={() => props.removeItem(props.index)}><i className="fas fa-trash-alt"></i></div>
        </div>
    )
}

export default ListItem