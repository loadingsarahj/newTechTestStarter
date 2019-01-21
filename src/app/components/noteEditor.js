import React, {Component} from 'react';
import styles from '../../themes/main.scss';
import Notes from '../components/notes.js';

export default class NoteEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteText: '',
            stickyNoteArray: []
        };
        this.noteTextOnChange = this.noteTextOnChange.bind(this);
        this.handleStickClick = this.handleStickClick.bind(this);
        this.noteRender = this.noteRender.bind(this);
    }

    // Sets the state with typed characters
    noteTextOnChange(e) {
        this.setState({
            noteText: e.target.value
        });
    }

    //On Click push text to StickyNoteArray
    handleStickClick() {
        //Add text to array
        this.state.stickyNoteArray.push(this.state.noteText);
        //Update the state to remove text from editor after push
        this.setState({
            noteText: ''
        });
        this.noteRender();
    }

    deleteNote(index) {
        //filter index
        let newArray = this.state.stickyNoteArray.filter((e, i) => i !== index);
        this.setState({
            stickyNoteArray: newArray
        });
    }

    saveNote(text, index) {
        let updatedArray = this.state.stickyNoteArray;
        updatedArray[index] = text;
        this.setState({
            stickyNoteArray: updatedArray
        });
    }

    noteRender() {
        let value = this.state.stickyNoteArray;
        if (value) {
            return value.map((note, i) => {
                return (
                    <Notes
                        delete={() => this.deleteNote(i)}
                        saveText={(text) => this.saveNote(text,i)}
                        text={note}
                    />
                )
            });
        }
    }

    render() {
        return (
            <div>
                <div className={styles.noteContainer}>
                    <div className={styles.noteCard}>
                    <textarea
                        placeholder="A penny for your thoughts..."
                        value={this.state.noteText}
                        onChange={this.noteTextOnChange}
                    />
                        <button onClick={this.handleStickClick}>Stick</button>
                    </div>
                </div>
                <div className={styles.noteContainer}>
                    {this.noteRender()}
                </div>
            </div>
        )
    }
}