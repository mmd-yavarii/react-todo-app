const Todo = ({ status, title, changeStatus, deleteTodo }) => {
    const btnStyle = {
        padding: '0.5em 1em',
        border: 'none',
        outline: 'none',
        borderRadius: '7px',
    };
    const containerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1em',
        border: '1px solid #efefef',
        margin: '1em',
        marginBottom: '0',
        borderRadius: '10px',
    };
    const btnContainerSyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '.5em',
    };

    return (
        <div style={containerStyle}>
            <p
                style={{
                    textDecoration: status ? 'line-through' : 'none',
                }}
            >
                {title}
            </p>
            <div style={btnContainerSyle}>
                <button style={btnStyle} onClick={changeStatus}>
                    {status ? 'undo' : 'do'}
                </button>
                <button style={btnStyle} onClick={deleteTodo}>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default Todo;
