import { useState, useEffect } from 'react';

import styles from './App.module.css';
import Header from './components/Header/Header.jsx';
import DrawerPage from './components/DrawerPage/DrawerPage.jsx';
import InputPage from './components/InputPage/InputPage.jsx';
import EmptyPage from './components/EmptyPage/EmptyPage.jsx';
import TodoCard from './components/TodoCard/TodoCard.jsx';

function App() {
    // todos container
    const [allTodos, setAllTodos] = useState([
        // { id: 0, task: 'this is selected', status: 'done' },
    ]);
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

    return (
        <>
            <Header setDrawerPage={setDrawerPage} drawerPage={drawerPage} />

            {/* drawer page */}
            <DrawerPage
                drawerPage={drawerPage.show}
                setDrawerPage={setDrawerPage}
                content={drawerPage.content}
            />

            {/* add btn */}
            <div
                className={`drawer-toggle ${styles.addBtn}`}
                onClick={openAddNetodoPage}
            >
                +
            </div>

            {/* show empty ppage or todos */}
            {display.length ? (
                <>
                    <h4 className={styles.tasksMessage}>Task</h4>
                    {display.map((item) => (
                        <TodoCard key={item.id} info={item} />
                    ))}
                </>
            ) : (
                <EmptyPage />
            )}
        </>
    );
}

export default App;
