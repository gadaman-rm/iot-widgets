import { CacheProvider } from "@emotion/react"
import createCache from "@emotion/cache"
import { render } from "preact"
import { ThemeProvider, createTheme } from "@mui/material"

export interface CacheCssProps {
    key: string
    container: HTMLElement
    shadowRoot: ShadowRoot
    insertionPoint: HTMLElement
}
export const CacheCss = ({ key, container, shadowRoot, insertionPoint }: CacheCssProps, node: any) => {
    const cache = createCache({ key, container: insertionPoint, insertionPoint })
    const theme = createTheme()

    console.log('container: ', container)
    console.log('shadowRoot: ', shadowRoot)
    console.log('insertionPoint: ', insertionPoint)
    
    render(
        <CacheProvider value={cache}>
            <ThemeProvider theme={theme}>
                {node}
            </ThemeProvider>
        </CacheProvider>,
        container
    )
}