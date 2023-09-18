import React, { useState } from 'react';

const NewTodoForm = ({ onSubmit }) => {
    const [newItem, setNewItem] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (newItem === '') return;
        onSubmit(newItem);
        setNewItem('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="item">New Item</label>
            <input type="text"
                    id='item'
                    value={newItem}
                    onChange={e => setNewItem(e.target.value)}
                    />
            </div>
            <button>Add</button>
        </form>
    );
};

export default NewTodoForm;
