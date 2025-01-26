import { useState } from 'react';

import styles from './App.module.css';
import Header from './components/Header';
import DrawerPage from './components/DrawerPage';
import InputPage from './components/InputPage';

function App() {
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
        </>
    );
}

export default App;
