import { useState } from 'react';

import styles from './Header.module.css';
import FilerPage from '../FilterPage/FilterPage.jsx';
import SelectThem from '../SelectThem/SelectThem.jsx';

const getCurrentGreeting = () => {
    const hours = new Date().getHours();
    return hours <= 12
        ? 'Good Morning'
        : hours <= 19
        ? 'Good Evening'
        : 'Good Night';
};

const Header = ({ setDrawerPage, setDisplay, display, allTodos }) => {
    const [message] = useState(getCurrentGreeting);
    const [inpValue, setInpvalue] = useState('');

    // open filter page handler
    const openFilterPage = () => {
        setDrawerPage({ content: <FilerPage />, show: true });
    };

    // open them page handler
    const openThemPage = () => {
        setDrawerPage({ content: <SelectThem />, show: true });
        SelectThem;
    };

    // search handler
    const searchHandler = (event) => {
        const value = event.target.value;
        setInpvalue(value);

        let result = value
            ? allTodos.filter((i) => i.task.includes(value))
            : allTodos;

        setDisplay(result);
    };

    return (
        <header className={styles.container}>
            <div className={styles.head}>
                <h2>{message}</h2>

                <div>
                    <button
                        aria-label="Filter"
                        onClick={openFilterPage}
                        className={`drawer-toggle ${styles.filterBtn}`}
                    >
                        <img
                            width="15"
                            height="15"
                            src="https://img.icons8.com/ios/50/filter--v1.png"
                            alt="Filter Icon"
                        />
                    </button>

                    <button
                        aria-label="Filter"
                        onClick={openThemPage}
                        className={`drawer-toggle ${styles.filterBtn}`}
                    >
                        <img
                            width="15"
                            height="15"
                            src="https://img.icons8.com/ios/50/paint.png"
                            alt="paint"
                        />
                    </button>
                </div>
            </div>

            <input
                type="text"
                className={styles.searchInput}
                placeholder="Search..."
                value={inpValue}
                onChange={searchHandler}
            />
        </header>
    );
};

export default Header;
