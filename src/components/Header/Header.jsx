import { useState } from 'react';

import styles from './Header.module.css';
import FilerPage from '../FilterPage/FilterPage.jsx';

const getCurrentGreeting = () => {
    const hours = new Date().getHours();
    return hours <= 12
        ? 'Good Morning'
        : hours <= 19
        ? 'Good Evening'
        : 'Good Night';
};

const Header = ({ setDrawerPage, drawerPage }) => {
    const [message] = useState(getCurrentGreeting);

    const openFilterPage = () => {
        setDrawerPage({ content: <FilerPage />, show: true });
    };

    return (
        <header className={styles.container}>
            <div className={styles.headerContent}>
                <h2>{message}</h2>

                <button
                    aria-label="Filter"
                    onClick={openFilterPage}
                    className="drawer-toggle"
                >
                    <img
                        width="15"
                        height="15"
                        src="https://img.icons8.com/ios/50/filter--v1.png"
                        alt="Filter Icon"
                    />
                </button>
            </div>

            <input
                type="text"
                className={styles.searchInput}
                placeholder="Search..."
            />
        </header>
    );
};

export default Header;
