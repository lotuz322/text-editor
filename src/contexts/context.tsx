import { useEditor } from "../TextEditor/useEditor"
import {createContext, FC, ReactNode, useContext} from "react"
import {EditorApi} from "../TextEditor/useEditor.model";

const TextEditorContext = createContext<EditorApi | undefined>(undefined)

export const useEditorApi = () => {
    const context = useContext(TextEditorContext)

    if(context === undefined) {
        throw new Error('useEditorApi must be used within TextEditorProvider')
    }

    return context
}

interface HeaderProps {
    children: ReactNode;
}


export const TextEditorProvider: FC<HeaderProps> = ({ children }) => {
    const editorApi = useEditor()

    return (
        <TextEditorContext.Provider value={editorApi}>
            { children }
        </TextEditorContext.Provider>
    )
}