export default function (
  /** @type {import('plop').NodePlopAPI} */
  plop,
) {
  //********************** widget **********************
  plop.setGenerator("widget", {
    description: "create widget dynamically",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Name",
      },
      {
        type: "input",
        name: "tag-name",
        message: "Web component tag name",
      },
    ],
    actions: [
      {
        type: "addMany",
        destination: "src/widgets/{{name}}",
        templateFiles: "plop_templates/widget/*.hbs",
        base: "plop_templates/widget",
      },
      {
        type: "modify",
        path: "src/widgets/index.ts",
        pattern: /$/,
        template: `export * from "./{{name}}/{{name}}"\n`,
      },
      {
        type: "modify",
        path: "src/widgets/utility/IWidgetsIsNames.ts",
        pattern: /$/,
        template: `  | "{{tag-name}}"\n`,
      },
      {
        type: "modify",
        path: "src/widgets/utility/IWidgets.ts",
        pattern: /} from ".."/,
        template: `  {{name}},\n} from ".."`,
      },
      {
        type: "modify",
        path: "src/widgets/utility/IWidgets.ts",
        pattern: /$/,
        template: `  | {{name}}\n`,
      },
      {
        type: "modify",
        path: "src/widgets/utility/isToWidgets.ts",
        pattern: /} from ".."/,
        template: `  {{name}},\n} from ".."`,
      },
      {
        type: "modify",
        path: "src/widgets/utility/isToWidgets.ts",
        pattern: /  }/,
        template: `    case "{{tag-name}}":\n      return new {{name}}()\n  }`,
      },
      {
        type: "modify",
        path: "src/main.ts",
        pattern: /$/,
        template: `import "./widgets/{{name}}/{{name}}.example"\n`,
      },
    ],
  })

  //********************** component **********************
  plop.setGenerator("components", {
    description: "create components dynamically",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Name",
      },
      {
        type: "input",
        name: "type",
        message: "Extends class type",
      },
      {
        type: "input",
        name: "tag",
        message: "Html extends tag",
      },
      {
        type: "input",
        name: "tag-name",
        message: "Web component tag name",
      },
    ],
    actions: [
      {
        type: "addMany",
        destination: "src/components/{{name}}",
        templateFiles: "plop_templates/component/*.hbs",
        base: "plop_templates/component",
      },
      {
        type: "modify",
        path: "src/components/components.ts",
        pattern: /$/,
        template: `export * from "./{{name}}/{{name}}"\n`,
      },
      {
        type: "modify",
        path: "src/main.ts",
        pattern: /$/,
        template: `import "./components/{{name}}/{{name}}.example"\n`,
      },
    ],
  })
}
