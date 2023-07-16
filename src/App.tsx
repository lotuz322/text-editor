import React from 'react';
import './App.css';
import { TextEditorProvider } from "./context/context";
import TextEditor from './TextEditor';
import ToolPanel from './ToolPanel';




function App() {
  return (
        <TextEditorProvider>
            <ToolPanel/>
            <TextEditor/>
        </TextEditorProvider>
    );
}

export default App;
