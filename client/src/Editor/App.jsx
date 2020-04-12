import React from 'react';

import styles from './App.module.css';
import showdown from 'showdown';
import { ScrollSync, ScrollSyncPane } from 'react-scroll-sync';

import text from './default_text';



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: text,
        };
        this.converter = new showdown.Converter();
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value,
        });

    }

    render() {
        return (
            <ScrollSync>
                <div className={styles.mainContainer}>
                    <div className={styles.header}>
                        <h1>Simple Markdown Editor</h1>
                        <span>By ZachyCodes</span>
                    </div>
                    <div className={styles.textArea}>
                        <ScrollSyncPane>
                            <textarea
                                value={this.state.value}
                                onChange={this.handleChange}
                                autoFocus
                            />
                        </ScrollSyncPane>
                    </div>
                    <div className={styles.markdownText} >
                        <ScrollSyncPane>
                            <div
                                dangerouslySetInnerHTML={{ __html: this.converter.makeHtml(this.state.value) }}
                                className={styles.editor}
                            ></div>

                        </ScrollSyncPane>
                    </div>
                </div>
            </ScrollSync>
        );
    }
}

export default App;