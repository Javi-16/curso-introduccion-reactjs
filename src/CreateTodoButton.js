import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton() {
    const onClickButton = () => {
        alert('Aquí se debería abrir el modal');
    }

    return(
        <button 
            className='CreateTodoButton'
            onClick={onClickButton}
        >
            +
        </button>
    );
}

export { CreateTodoButton};
