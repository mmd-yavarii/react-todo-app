import { useState, useEffect } from 'react';

import styles from './App.module.css';
import Header from './components/Header/Header.jsx';
import DrawerPage from './components/DrawerPage/DrawerPage.jsx';
import InputPage from './components/InputPage/InputPage.jsx';
import EmptyPage from './components/EmptyPage/EmptyPage.jsx';
import TodoCard from './components/TodoCard/TodoCard.jsx';

function App() {
    // todos container
    const [allTodos, setAllTodos] = useState([]);
    const [display, setDisplay] = useState(allTodos);
    useEffect(() => {
        setDisplay(allTodos);
    }, [allTodos]);

    const [drawerPage, setDrawerPage] = useState({
        show: false,
        content: <p>empty</p>,
    });

    // open add new todo (inputs) page
    const openAddNetodoPage = () => {
        setDrawerPage({
            content: <InputPage setAllTodos={setAllTodos} />,
            show: true,
        });
    };

    // clear all todos
    const clearHandler = () => {
        setAllTodos([]);
    };

    return (
        <>
            <Header
                setDrawerPage={setDrawerPage}
                setDisplay={setDisplay}
                display={display}
                allTodos={allTodos}
            />

            {/* drawer page */}
            <DrawerPage
                drawerPage={drawerPage.show}
                setDrawerPage={setDrawerPage}
                content={drawerPage.content}
            />

            {/* add btn */}
            <div
                className={`drawer-toggle pointer ${styles.addBtn}`}
                onClick={openAddNetodoPage}
            >
                +
            </div>

            {/* show empty ppage or todos */}
            {display.length ? (
                <>
                    <div className={styles.messageAndClear}>
                        <h4>Task</h4>
                        <button onClick={clearHandler}>clear</button>
                    </div>

                    {display.map((item) => (
                        <TodoCard
                            key={item.id}
                            info={item}
                            setAllTodos={setAllTodos}
                            allTodos={allTodos}
                        />
                    ))}
                </>
            ) : (
                <EmptyPage />
            )}
        </>
    );
}

export default App;
