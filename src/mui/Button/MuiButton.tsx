import { Button, ButtonProps } from "@mui/material"
import { CacheCss } from "../../_helper"

export interface MuiButtonProps extends ButtonProps { 
    container: HTMLElement 
    shadowRoot: ShadowRoot 
    insertionPoint: HTMLElement
}
export const MuiButton = ({ container, shadowRoot, insertionPoint, ...props }: MuiButtonProps) => {
    CacheCss({ key: 'mui-button-css', container, shadowRoot, insertionPoint },
        <Button {...props} />
    )
}