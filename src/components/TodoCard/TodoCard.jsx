import styles from './TodoCard.module.css';

const TodoCard = ({ info, setAllTodos, allTodos }) => {
    // check tasks handler
    const checkHandler = () => {
        const index = allTodos.findIndex((i) => i.id == info.id);
        const result = [...allTodos];

        result[index].status =
            result[index].status == 'done' ? 'pending' : 'done';

        setAllTodos(result);
    };

    // delete a todo
    const deleteTodoHandler = () => {
        const result = [...allTodos];
        const index = result.findIndex((i) => i.id == info.id);
        result.splice(index, 1);
        setAllTodos(result);
    };

    return (
        <div className={styles.container}>
            <div>
                <div
                    className={`${styles.chekbox} pointer ${
                        info.status == 'done' && styles.selected
                    }`}
                    onClick={checkHandler}
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
                <button onClick={deleteTodoHandler}>
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
