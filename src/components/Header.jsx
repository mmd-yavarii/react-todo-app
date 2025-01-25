import styles from './Header.module.css';

const Header = () => {
    const time = () => {
        const now = new Date().getHours();
        let result = '';
        if (now <= 12) {
            result = 'Good Morning';
        } else if (now >= 12 && now <= 19) {
            result = 'Good Evening';
        } else {
            result = 'Good Night';
        }
        return result;
    };

    return (
        <div className={styles.container}>
            <div>
                <h2>{time()}</h2>
                <button>
                    <img
                        width="15"
                        height="15"
                        src="https://img.icons8.com/ios/50/filter--v1.png"
                        alt="filter--v1"
                    />
                </button>
            </div>

            <input type="text" placeholder="Search..." />
        </div>
    );
};

export default Header;
