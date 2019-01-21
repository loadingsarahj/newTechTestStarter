import React, {Component} from 'react';
import styles from '../../themes/main.scss';

export default class Notes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            noteText: ''
        };
        this.noteTextOnChange = this.noteTextOnChange.bind(this);
        this.closeEditMode = this.closeEditMode.bind(this);
        this.editNote = this.editNote.bind(this);
        this.saveText = this.saveText.bind(this);
    }

    editNote() {
        this.setState({
            editMode: !this.state.editMode
        })
    }

    noteTextOnChange(e) {
        this.setState({
            noteText: e.target.value
        })
    }

    closeEditMode() {
        this.setState({
            editMode: false
        });
    }

    saveText() {
        this.props.saveText(this.state.noteText);
        this.closeEditMode()
    }

    render() {
        return (
            <div className={styles.note}>
                {!this.state.editMode &&
                <div onClick={this.editNote}>
                    {this.props.text}
                </div>
                }

                {this.state.editMode &&
                <div>
                    <textarea
                        onChange={this.noteTextOnChange}
                        defaultValue={this.props.text}
                    />
                    <button onClick={this.closeEditMode}>Close</button>
                    <button onClick={this.saveText}>Submit</button>
                </div>
                }

                <span onClick={this.props.delete} className={styles.noteDelete}>x</span>
            </div>
        )
    }

}