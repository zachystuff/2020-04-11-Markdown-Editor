import React from 'react';

import styles from './App.module.css';
import showdown from 'showdown';

import text from './default_text';



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: text,
            editedText: '',
        };
        this.converter = new showdown.Converter();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });


    }

    handleSubmit(event) {
        event.preventDefault();
        let text = this.state.value;
        console.log(text);
        let html = this.converter.makeHtml(text);
        this.setState({ editedText: html })
    }

    render() {
        return (

            <div className={styles.mainContainer}>
                <div className={styles.header}>
                    <h1>Markdown Editor by zachyCodes</h1>
                </div>
                <div className={styles.textArea}>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <textarea value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
                <div className={styles.markdownText} >
                    <div 
                        dangerouslySetInnerHTML={{ __html: this.state.editedText }}
                        className={styles.editor}
                    ></div>
                </div>
            </div>

        );
    }
}

export default App;