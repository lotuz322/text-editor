import React from 'react';
import { TextEditorProvider } from "./contexts/context";
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
