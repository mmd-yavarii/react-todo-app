import styles from './SelectThem.module.css';

const colors = [
    '#0000FF',
    '#3333FF',
    '#6666FF',
    '#9999FF',
    '#CCCCFF', // Vibrant Blue
    '#8000FF',
    '#9933FF',
    '#B266FF',
    '#CC99FF',
    '#E5CCFF', // Vibrant Purple
    '#FF0090',
    '#FF33A1',
    '#FF66B3',
    '#FF99C4',
    '#FFC6E0', // Vibrant Pink
];

const SelectThem = () => {
    const changeThem = (color) => {
        document.documentElement.style.cssText = `--them-color: ${color}`;
    };

    return (
        <>
            <h4 className={styles.message}>select them</h4>

            <div className={styles.container}>
                {colors.map((item, index) => (
                    <div
                        key={index}
                        className={styles.items}
                        style={{
                            backgroundColor: item,
                            outlineColor: item,
                            boxShadow: `0px 0px 35px 0px ${item}`,
                        }}
                        onClick={() => changeThem(item)}
                    ></div>
                ))}
            </div>
        </>
    );
};

export default SelectThem;
