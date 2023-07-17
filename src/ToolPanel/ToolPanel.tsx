import {FC} from "react";
import cn from "classnames";
import {InlineStyle} from "../types";
import {useEditorApi} from "../contexts/context";

export type ToolPanelProps = {
    className?: string
}

const INLINE_STYLES_CODES = Object.values(InlineStyle)

const ToolPanel: FC<ToolPanelProps> = ({ className }) => {
    const { toggleInlineStyle, hasInlineStyle } = useEditorApi()


    return(
        <div className={cn('tool-panel', className)}>
            {INLINE_STYLES_CODES.map((code) => {
                const onMouseDown = (e: any): void => {
                    e.preventDefault()
                    toggleInlineStyle(code)
                }

                return(
                    <button key={code}
                            className={cn(
                                "tool-panel__item",
                                hasInlineStyle(code) && "tool-panel__item-active"
                            )}
                            onMouseDown={onMouseDown}
                    >
                        {code}
                    </button>
                )
            })}
        </div>
    )
}

export default ToolPanel;