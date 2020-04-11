import React from 'react';

import styles from './App.module.css';

const App = () => {

    return (
        <div className={styles.mainContainer}>
            <div className={styles.header}></div>
            <div className={styles.textArea}>
                it is important
            </div>
            <div className={styles.markdownText}>
                t is important
            </div>

        </div>
    )

};

export default App;