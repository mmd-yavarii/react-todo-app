import { useState } from 'react';
import styles from './InputPage.module.css';
import { v4 as uuid } from 'uuid';

const InputPage = ({ setAllTodos }) => {
    const [inp, setInp] = useState('');

    // add new todo to (allTodos )
    const addTodo = () => {
        if (inp.length) {
            const newTodo = {
                id: uuid(),
                task: inp,
                status: 'pending',
            };
            setAllTodos((prevTodos) => [...prevTodos, newTodo]);
            setInp('');
        }
    };

    return (
        <div className={styles.container}>
            <h4>Add New Todo</h4>
            <input
                type="text"
                placeholder="Task ..."
                value={inp}
                onChange={(e) => setInp(e.target.value)}
            />
            <button onClick={addTodo}>Add</button>
        </div>
    );
};
export default InputPage;
