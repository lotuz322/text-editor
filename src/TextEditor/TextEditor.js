import React from 'react'
import { Editor } from 'draft-js';
import { useEditorApi } from "./context";
import cn from 'classnames';
import './TextEditor.'
import './TextEditor.scss'

export default function TextEditor({ className }) {
    const { state, onChange } = useEditorApi()

    return(
        <div className={cn("text-editor", className)}>
            <Editor
                editorState={state}
                onChange={onChange}
                placeholder="Введите ваш текст"
            />
        </div>
    )
}