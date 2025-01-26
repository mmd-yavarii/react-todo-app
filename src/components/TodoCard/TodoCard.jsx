import styles from './TodoCard.module.css';

const TodoCard = ({ info }) => {
    return (
        <div className={styles.container}>
            <div>
                <div
                    className={`${styles.chekbox} ${
                        info.status == 'done' && styles.selected
                    }`}
                ></div>
                <p className={info.status == 'done' ? styles.selectedText : ''}>
                    {info.task}
                </p>
            </div>

            <div className={styles.btnContainer}>
                <button>
                    <img
                        width="17"
                        height="17"
                        src="https://img.icons8.com/windows/32/pencil-tip.png"
                        alt="pencil-tip"
                    />
                </button>
                <button>
                    <img
                        width="17"
                        height="17"
                        src="https://img.icons8.com/pulsar-line/50/filled-trash.png"
                        alt="filled-trash"
                    />
                </button>
            </div>
        </div>
    );
};

export default TodoCard;
