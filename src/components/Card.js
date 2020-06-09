import React from 'react';


const Card = (props) => (
        <div className="card">
            <div class="card-image">
                <img src={props.data.foto} />
            </div>
            <ul className="card-content">
                <li>Nome:{props.data.nome}</li>
                <li>Idade: {props.data.idade} anos</li>
                <li>Genero: {props.data.genero}</li>
            </ul>
        </div>
    )

export default Card;