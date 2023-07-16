import {EditorState, RichUtils} from 'draft-js'
import {useState, useMemo, useCallback} from 'react'
import {BlockType, InlineStyle} from "./config";
import { useEditorHook } from './useEditor.model';



export const useEditor: useEditorHook = (html) => {
    const [state, setState] = useState(() => EditorState.createEmpty())

    const toggleBlockType = useCallback((blockType: BlockType) => {
        setState((currentState) => RichUtils.toggleBlockType(currentState, blockType))
    }, [])

    const currentBlockType = useMemo(() => {
        const selection = state.getSelection()
        const content = state.getCurrentContent()
        const block = content.getBlockForKey(selection.getStartKey())
        return block.getType() as BlockType
    }, [state])

    const toggleInlineStyle = useCallback((inlineStyle: InlineStyle) => {
        setState((currentState) => RichUtils.toggleInlineStyle(currentState, inlineStyle))
    }, [])

    const hasInlineStyle = useCallback((inlineStyle: InlineStyle) => {
        const currentStyle = state.getCurrentInlineStyle()
        return currentStyle.has(inlineStyle)
    }, [state])

    return useMemo(() => ({
        state,
        onChange: setState,
        toggleBlockType: toggleBlockType,
        currentBlockType: currentBlockType,
        toggleInlineStyle: toggleInlineStyle,
        hasInlineStyle: hasInlineStyle
    }), [state, toggleBlockType, currentBlockType, toggleInlineStyle, hasInlineStyle])
}