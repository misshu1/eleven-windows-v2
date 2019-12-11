import React, { useContext, useEffect, useState } from 'react';
import { Container } from './style';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { FolderContext } from '../../../contexts/FolderContext';
import { vs, tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { IndexContext } from '../../../contexts/indexContext';
import { ThemeContext } from '../../../contexts/themeContext';
import FolderApp from '../../folder/FolderApp';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import { demo } from './CodeExamples';

SyntaxHighlighter.registerLanguage('jsx', jsx);

const DocsApp = () => {
    const [highlightStyle, setHighlightStyle] = useState(tomorrow);
    const { folder } = useContext(FolderContext);
    const { index } = useContext(IndexContext);
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        if (theme.id === 'dark') {
            setHighlightStyle(tomorrow);
        } else if (theme.id === 'light') {
            setHighlightStyle(vs);
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
            <Container>
                <h1>Documentation</h1>
                <p>
                    This folder is an overview of Eleven Windows documentation
                    and resources.
                </p>
                <SyntaxHighlighter language='jsx' style={highlightStyle}>
                    {demo}
                </SyntaxHighlighter>
            </Container>
        </FolderApp>
    );
};
export default DocsApp;
