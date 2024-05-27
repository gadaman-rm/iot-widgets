import { editor, languages } from "monaco-editor"
import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker"
import jsonWorker from "monaco-editor/esm/vs/language/json/json.worker?worker"
import cssWorker from "monaco-editor/esm/vs/language/css/css.worker?worker"
import htmlWorker from "monaco-editor/esm/vs/language/html/html.worker?worker"
import tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker"

self.MonacoEnvironment = {
  getWorker(_, label) {
    if (label === "json") {
      return new jsonWorker()
    }
    if (label === "css" || label === "scss" || label === "less") {
      return new cssWorker()
    }
    if (label === "html" || label === "handlebars" || label === "razor") {
      return new htmlWorker()
    }
    if (label === "typescript" || label === "javascript") {
      return new tsWorker()
    }
    return new editorWorker()
  },
}

editor.defineTheme("default", {
  base: "vs-dark",
  inherit: true,
  rules: [
    // {
    //   token: "identifier",
    //   foreground: "#9CDCFE",
    // },
    // {
    //   token: "identifier.function",
    //   foreground: "#DCDCAA",
    // },
    // {
    //   token: "type",
    //   foreground: "#1AAFB0",
    // },
  ],
  colors: {},
})

export interface EditorLoadedEvent {
  loaded: Boolean
}

export interface EditorOption
  extends editor.IStandaloneEditorConstructionOptions {
  lib?: string
}

const TAG_Editor = `g-editor`
const ATTRIBUTES = ["id", "language", "lib"] as const
export class Editor extends HTMLDivElement {
  initAttribute(name: string, defaultValue: string) {
    if (!this.attributes.getNamedItem(name))
      this.setAttribute(name, defaultValue)
  }
  static get observedAttributes() {
    return ATTRIBUTES
  }
  rootRef: HTMLDivElement
  editor!: editor.IStandaloneCodeEditor
  loadEvent: CustomEvent<EditorLoadedEvent>
  constructor({ lib, ...options }: EditorOption = {}) {
    super()
    this.rootRef = document.createElement("div")
    this.rootRef.style.width = "300px"
    this.rootRef.style.height = "200px"
    this.appendChild(this.rootRef)
    this.setAttribute("is", TAG_Editor)

    lib ??= ""
    options.language ??= "typescript"
    options.value ??= `console.log("Hello World")`
    options.tabSize ??= 2
    options.fontSize ??= 17
    options.cursorStyle ??= "block"
    options.cursorBlinking ??= "solid"
    options.cursorWidth ??= 1
    options.theme ??= "default"
    options.contextmenu ??= false
    options.snippetSuggestions ??= "none"
    options.selectionClipboard ??= true
    options.scrollBeyondLastLine ??= false
    options.lineNumbers ??= "off"
    options.glyphMargin ??= false
    options.lineDecorationsWidth ??= 0
    options.lineNumbersMinChars ??= 0
    // options.guides ??= { indentation: false }
    options.minimap ??= { enabled: false }

    this.loadEvent = new CustomEvent<EditorLoadedEvent>("component-loaded", {
      detail: { loaded: false },
    })

    setTimeout(() => {
      this.editor = editor.create(this.rootRef, options)

      switch (options.language) {
        case "typescript": {
          languages.typescript.typescriptDefaults.setDiagnosticsOptions({
            noSemanticValidation: false,
            noSuggestionDiagnostics: false,
          })

          if (lib !== "")
            languages.typescript.typescriptDefaults.addExtraLib(lib)

          break
        }
        case "json": {
          languages.json.jsonDefaults.setDiagnosticsOptions({
            validate: true,
            schemas: [
              {
                uri: "internal://server/foo.json",
                schema: {
                  type: "object",
                  properties: {
                    q1: {
                      enum: ["x1", "x2"],
                    },
                  },
                },
              },
            ],
          })
          break
        }
      }
      this.editor.onDidChangeModelContent((e) => {
        console.log(e)

        // setTimeout(() => {
        //   if (editor.getModelMarkers({}).length === 0) {
        //     const lines = this.editor.getValue().split("\n")
        //     lines.splice(0, 1)
        //     lines.unshift("{")
        //     console.log(lines.join("\n"))
        //   }
        // }, 1000)
      })
    }, 0)
  }

  public get id() {
    return this.getAttribute("id")!
  }
  public set id(id: string) {
    this.setAttribute("id", id)
  }

  connectedCallback() {
    setTimeout(() => {
      this.loadEvent.detail.loaded = true
      this.dispatchEvent(this.loadEvent)
    }, 0)
  }
  disconnectedCallback() {}
  attributeChangedCallback(
    attrName: (typeof ATTRIBUTES)[number],
    oldValue: string,
    newValue: string,
  ) {
    switch (attrName) {
      case "id":
        this.idUpdate(oldValue, newValue)
        break
    }
  }

  idUpdate(oldId: string, newId: string) {
    console.log(oldId, newId)
  }

  // @ts-ignore: Unreachable code error
  addEventListener<K extends keyof CustomElementEventMap>(
    type: K,
    listener: (this: HTMLDivElement, ev: CustomElementEventMap[K]) => any,
    options?: boolean | AddEventListenerOptions,
  ): void
  // @ts-ignore: Unreachable code error
  removeEventListener<K extends keyof CustomElementEventMap>(
    type: K,
    listener: (this: HTMLDivElement, ev: CustomElementEventMap[K]) => any,
    options?: boolean | EventListenerOptions,
  ): void
}

interface CustomElementEventMap extends HTMLElementEventMap {
  "component-loaded": { detail: EditorLoadedEvent }
}

customElements.define(TAG_Editor, Editor, { extends: "div" })
