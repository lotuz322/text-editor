import {EditorState} from "draft-js";
import {BlockType, InlineStyle} from "./config";

export interface EditorApi {
    state: EditorState,
    onChange: (state: EditorState) => void,
    toggleBlockType: (blockType: BlockType) => void,
    currentBlockType: BlockType
    toggleInlineStyle: (inlineStyle: InlineStyle) => void
}

export type useEditorHook = (html?: string) => EditorApi