import { useState } from 'react';
import styles from './FilterPage.module.css';

const FilerPage = () => {
    const [selected, setSelected] = useState('All');

    const clickHandler = (event) => {
        setSelected(event.target.innerText);
    };

    return (
        <div className={styles.conttainer}>
            <h3>Filters </h3>
            <div>
                <p>Filter tasks by their status</p>
                <button
                    onClick={clickHandler}
                    className={selected == 'All' ? styles.selected : ''}
                >
                    All
                </button>
                <button
                    onClick={clickHandler}
                    className={selected == 'Pending' ? styles.selected : ''}
                >
                    Pending
                </button>
                <button
                    onClick={clickHandler}
                    className={selected == 'done' ? styles.selected : ''}
                >
                    done
                </button>
            </div>

            <div>
                <p>Sort tasks by date or alphabetical</p>
                <button
                    onClick={clickHandler}
                    className={selected == 'A-Z' ? styles.selected : ''}
                >
                    A-Z
                </button>
                <button
                    onClick={clickHandler}
                    className={selected == 'Date' ? styles.selected : ''}
                >
                    Date
                </button>
            </div>
        </div>
    );
};

export default FilerPage;
