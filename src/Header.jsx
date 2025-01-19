const Header = () => {
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
    };
    const btnContainerSyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '.5em',
    };

    return (
        <div style={containerStyle}>
            <h3>Todos</h3>
            <div style={btnContainerSyle}>
                <button style={btnStyle}>All</button>
                <button style={btnStyle}>Done</button>
                <button style={btnStyle}>Pending</button>
            </div>
        </div>
    );
};

export default Header;
