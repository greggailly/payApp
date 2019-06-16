import React from 'react'

import ListItem from './ListItem/ListItem'

import './List.css'

const List = (props) => {
    const list = props.list.map((item, i) => {
        return (
            <ListItem key={i} item={item} index={i} removeItem={props.removeItem} />
        )
    })

    return (
        <div className="d-flex flex-column align-items-center list">
            {list}
        </div>
    )
}

export default List