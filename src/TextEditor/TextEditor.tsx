import {useEditorApi} from "../contexts/context";
import { Editor } from "draft-js";
import cn from 'classnames'
import { TextEditorComponent } from "./TextEditor.model";
import {BLOCK_RENDER_MAP, CUSTOM_STYLE_MAP} from "./TextEditor.config";

const TextEditor: TextEditorComponent = ({ className }) => {
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