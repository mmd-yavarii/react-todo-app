import React, { useEffect, useRef } from 'react';
import styles from './DrawerPage.module.css';

const DrawerPage = (props) => {
    // close page
    const drawerRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                drawerRef.current &&
                !drawerRef.current.contains(event.target) &&
                !event.target.closest('.drawer-toggle')
            ) {
                props.setDrawerPage((pre) => ({ ...pre, show: false }));
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [props]);

    // page

    if (props.drawerPage) {
        return (
            <div
                ref={drawerRef}
                className={`${styles.drawerPage} ${
                    props.drawerPage ? styles.show : ''
                }`}
            >
                {props.content}
            </div>
        );
    }
    return null;
};

export default DrawerPage;
