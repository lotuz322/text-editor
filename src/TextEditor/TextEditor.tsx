import {FC} from "react";
import {useEditorApi} from "../context/context";
import { Editor } from "draft-js";
import cn from 'classnames'
import {BLOCK_RENDER_MAP, CUSTOM_STYLE_MAP} from "./config";
import {TextEditorComponent as TextEditor} from "./TextEditor.model";

const TextEditor: TextEditor = ({ className }) => {
    const {state, onChange} = useEditorApi()

    return(
        <div className={cn("text-editor", className)}>
            <Editor
                placeholder="Введите ваш текст"
                editorState={state}
                onChange={onChange}
                blockRenderMap={BLOCK_RENDER_MAP}
                customStyleMap={CUSTOM_STYLE_MAP}
            />
        </div>
    )
}

export default TextEditor