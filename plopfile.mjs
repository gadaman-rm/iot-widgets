export default function (
	/** @type {import('plop').NodePlopAPI} */
	plop
) {
	//********************** widget **********************
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
				name: 'tag-name',
				message: 'Web component tag name'
			},
		],
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
		]  
	})

	//********************** component **********************
	plop.setGenerator('components', {
		description: 'create components dynamically',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'Name'
			},
			{
				type: 'input',
				name: 'type',
				message: 'Extends class type'
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
		],
		actions: [
			{
				type: 'addMany',
				destination: 'src/components/{{name}}',
				templateFiles: 'plop_templates/component/*.hbs',
				base: 'plop_templates/component',
			},
			{
				type: 'modify',
				path: 'src/components/components.ts',
				pattern: /$/,
				template: "export * from './{{name}}/{{name}}'\n",
			}
		]
	})
}
