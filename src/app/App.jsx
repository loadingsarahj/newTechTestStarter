import React, {Component} from 'react';
import styles from '../themes/main.scss';

export default class App extends Component {
    render() {
        return (
            <div className={styles.app}>
                <h1>Welcome</h1>
                <div className={styles.container}>
                    <p>Welcome to the Ageas tech test starter. Please read the README file for details on the task. Good luck!</p>
                </div>
            </div>
        )
    }
}