import { EditorState } from "draft-js"
import * as React from "react"

export const useEditor = () => {
    const [state, setState] = React.useState(() => EditorState.createEmpty())

    return React.useMemo(
        () => ({
            state,
            onChange: setState
        }),
        [state]
    )
}
