import {FC} from "react";
import cn from "classnames";
import {InlineStyle} from "../TextEditor/config";
import {useEditorApi} from "../TextEditor";

export type ToolPanelProps = {
    className?: string
}

const INLINE_STYLES_CODES = Object.values(InlineStyle)

const ToolPanel: FC<ToolPanelProps> = ({ className }) => {
    //const { toggleInlineStyle, hasInlineStyle } = useEditorApi()


    return(
        <div className={cn('tool-panel', className)}>

        </div>
    )
}

export default ToolPanel;