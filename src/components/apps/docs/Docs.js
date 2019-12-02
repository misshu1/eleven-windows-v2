import React, { useContext, useEffect, useState } from 'react';
import { FolderContext } from '../../../contexts/FolderContext';
import { IndexContext } from '../../../contexts/indexContext';
import FolderApp from '../../folder/FolderApp';

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import { atomDark, coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ThemeContext } from '../../../contexts/themeContext';
SyntaxHighlighter.registerLanguage('jsx', jsx);

const code = `
import React from "react"
import Prism from "prismjs"
export class PrismCode extends React.Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }

  componentDidMount() {
    this.highlight()
  }

  componentDidUpdate() {
    this.highlight()
  }

  highlight = () => {
    if (this.ref && this.ref.current) {
      Prism.highlightElement(this.ref.current)
    }
  }

  render() {
    const { code, plugins, language } = this.props

    return (
      <pre className={!plugins ? "something" : plugins.join(" ")}>
        <code ref={this.ref} >
          {code.trim()}
        </code>
      </pre>
    )
  }
}
`.trim();

const DocsApp = () => {
    const [highlightStyle, setHighlightStyle] = useState(atomDark);
    const { folder } = useContext(FolderContext);
    const { index } = useContext(IndexContext);
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        if (theme.id === 'dark') {
            setHighlightStyle(atomDark);
        } else if (theme.id === 'light') {
            setHighlightStyle(coy);
        }
    }, [theme.id]);

    return (
        <FolderApp
            appMinimize={'docsMinimize'}
            appOpen={'docsOpen'}
            appIndexName='docs'
            appIndexValue={index.docs}
            folderName='Docs'
            open={folder.docsOpen}
        >
            <SyntaxHighlighter language='jsx' style={highlightStyle}>
                {code}
            </SyntaxHighlighter>
        </FolderApp>
    );
};
export default DocsApp;
