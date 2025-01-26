import { useState } from 'react';

import styles from './App.module.css';
import Header from './components/Header';
import DrawerPage from './components/DrawerPage';
import InputPage from './components/InputPage';
import EmptyPage from './components/EmptyPage';

function App() {
    const [allTodos, setAllTodos] = useState([
        // { id: 0, task: 'hello this is a task', status: 'pending' },
    ]);
    const [display, setDisplay] = useState(allTodos);

    const [drawerPage, setDrawerPage] = useState({
        show: false,
        content: <p>empty</p>,
    });

    const openAddNetodoPage = () => {
        setDrawerPage({ content: <InputPage />, show: true });
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
                display.map((item) => <h1 key={item.id}>{item.task}</h1>)
            ) : (
                <EmptyPage />
            )}
        </>
    );
}

export default App;
