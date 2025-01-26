import styles from './EmptyPage.module.css';

const EmptyPage = () => {
    return (
        <div className={styles.container}>
            <img src="../public/empty.png" alt="" />
            <p>There's No Todos</p>
            <span>Click on the "+" to create a new todo</span>
        </div>
    );
};

export default EmptyPage;
