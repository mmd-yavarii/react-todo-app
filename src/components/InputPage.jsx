import styles from './InputPage.module.css';

const InputPage = () => {
    return (
        <div className={styles.container}>
            <h4>Add New Todo</h4>
            <input type="text" placeholder="Task ..." />
            <button>Add</button>
        </div>
    );
};
export default InputPage;
