import React, {Component} from 'react';
import styles from '../themes/main.scss';
import BackGroundImage from '../../public/assets/img/fridge.png';
import NoteEditor from "./components/noteEditor.js";

export default class App extends Component {
    render() {
        return (
            <div className={styles.container}>
                <img className={styles.fridge} src={BackGroundImage}/>
                <div className={styles.noteContainer}>
                    <NoteEditor />
                </div>
            </div>
        )
    }
}