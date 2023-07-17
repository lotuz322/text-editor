import {EditorState} from "draft-js";
import {BlockType, InlineStyle} from "../types";

export interface EditorApi {
    state: EditorState,
    onChange: (state: EditorState) => void,
    toggleBlockType: (blockType: BlockType) => void,
    currentBlockType: BlockType
    toggleInlineStyle: (inlineStyle: InlineStyle) => void
    hasInlineStyle: (inlineStyle: InlineStyle) => boolean
}

export type useEditorHook = (html?: string) => EditorApi