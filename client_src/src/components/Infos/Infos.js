import React from 'react'

import './Infos.css'

const Infos = (props) => {
    return (
        <div className="infos">
            <h3>Bonjour {props.user.username ? props.user.username : ''} !</h3>
            <h4>Solde:  {props.user.solde ? props.user.solde.toFixed(2) : 0} &euro;</h4>
        </div>
    )
}

export default Infos