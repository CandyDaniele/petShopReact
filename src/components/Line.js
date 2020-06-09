import React from 'react';

const Line = (props) => {
    return (
        <tr>
            <td>{props.nome}</td>
            <td>{props.genero}</td>
            <td>{props.idade}</td>
        </tr>
);
}
export default Line;