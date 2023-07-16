import {DefaultDraftBlockRenderMap} from "draft-js";
import Immutable from "immutable";

const CUSTOM_BLOCK_RENDER_MAP = Immutable.Map({
    [BlockType.cite]: {
        element: 'cite'
    }
})

export const BLOCK_RENDER_MAP = DefaultDraftBlockRenderMap.merge(CUSTOM_BLOCK_RENDER_MAP)