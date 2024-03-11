export default function (
	/** @type {import('plop').NodePlopAPI} */
	plop
) {
	// create your generators here
	plop.setGenerator('widget', {
		description: 'create widget dynamically',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'Name'
			},
			{
				type: 'input',
				name: 'type',
				message: 'DOM API Type'
			},
			{
				type: 'input',
				name: 'tag',
				message: 'Html extends tag'
			},
			{
				type: 'input',
				name: 'tag-name',
				message: 'Web component tag name'
			},
		], // array of inquirer prompts
		actions: [
			{
				type: 'addMany',
				destination: 'src/widgets/{{name}}',
				templateFiles: 'plop_templates/widget/*.hbs',
				base: 'plop_templates/widget',
			},
			{
				type: 'modify',
				path: 'src/widgets/index.ts',
				pattern: /$/,
				template: "export * from './{{name}}/{{name}}'\n",
			}
		]  // array of actions
	})
}
