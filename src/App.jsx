import { useState } from 'react';
import { addBtnStyle, addTodoContainersStyle, inputstyle } from './styles.js';

import Header from './Header';
import Todo from './Todo.jsx';

function App() {
    const [data, setData] = useState([]);
    const [showData, setShowData] = useState(data);
    const [newTodo, setNewTodo] = useState('');

    // add new todo
    function addTodo() {
        if (newTodo.trim().length) {
            const id = Math.floor(Math.random() * 999999);
            const todo = { id, isDone: false, title: newTodo.trim() };
            const updatedData = [...data, todo];

            setData(updatedData);
            setShowData(updatedData);
            setNewTodo('');
        }
    }

    // delete todo
    function deleteHandler(id) {
        const updatedData = data.filter((item) => item.id !== id);
        setData(updatedData);
        setShowData(updatedData);
    }

    // do aand undo a todo
    function changeStatusHandler(id) {
        const updatedData = data.map((item) =>
            item.id === id ? { ...item, isDone: !item.isDone } : item,
        );

        setData(updatedData);
        setShowData(updatedData);
    }

    return (
        <>
            <Header />

            {/* add new todo */}
            <div style={addTodoContainersStyle}>
                <input
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    type="text"
                    style={inputstyle}
                    placeholder="Todo title ..."
                />
                <button style={addBtnStyle} onClick={addTodo}>
                    +
                </button>
            </div>

            {/* show todos in page */}
            {showData.length ? (
                showData.map((item) => (
                    <Todo
                        key={item.id}
                        status={item.isDone}
                        title={item.title}
                        deleteTodo={() => deleteHandler(item.id)}
                        changeStatus={() => changeStatusHandler(item.id)}
                    />
                ))
            ) : (
                <p
                    style={{
                        textAlign: 'center',
                        opacity: '0.5',
                        marginTop: '3em',
                    }}
                >
                    no todo
                </p>
            )}
        </>
    );
}

export default App;
