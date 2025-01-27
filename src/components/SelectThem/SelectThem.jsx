import styles from './SelectThem.module.css';

const SelectThem = () => {
    const changeThem = (color) => {
        document.documentElement.style.cssText = `--them-color: ${color}`;
    };

    return (
        <>
            <h4 className={styles.message}>select them</h4>
            <div className={styles.container}>
                <div
                    className={`${styles.items} ${styles.blue}`}
                    onClick={() => changeThem('#00b3ff')}
                ></div>

                <div
                    className={`${styles.items} ${styles.pink}`}
                    onClick={() => changeThem('#ff0084')}
                ></div>

                <div
                    className={`${styles.items} ${styles.orange}`}
                    onClick={() => changeThem('#ff9d00')}
                ></div>

                <div
                    className={`${styles.items} ${styles.purple}`}
                    onClick={() => changeThem('#9000ff')}
                ></div>

                <div
                    className={`${styles.items} ${styles.green}`}
                    onClick={() => changeThem('#0cd112')}
                ></div>
            </div>
        </>
    );
};

export default SelectThem;
