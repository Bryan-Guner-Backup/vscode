import { create, tsx } from '@dojo/framework/core/vdom';
import {
	createMemoryResourceTemplate,
	createResourceMiddleware,
} from '@dojo/framework/core/middleware/resources';
import Tree, { TreeNodeOption } from '@dojo/widgets/tree';
import Icon from '@dojo/widgets/icon';
import Example from '../../Example';

const resource = createResourceMiddleware();
const factory = create({ resource });
const nodes: TreeNodeOption[] = [
	{
		id: 'c9ae529a',
		value: 'parent 1',
		parent: 'root',
		hasChildren: true,
	},
	{
		id: 'cde74420',
		value: 'parent 1-0',
		parent: 'c9ae529a',
		hasChildren: true,
	},
	{
		id: 'e2065522',
		value: 'parent 1-1',
		parent: 'c9ae529a',
		hasChildren: true,
	},
	{
		id: 'de48r11ea',
		value: 'child-1',
		parent: 'cde74420',
		hasChildren: false,
	},
	{
		id: 'd8fada34',
		value: 'child-2',
		parent: 'cde74420',
		hasChildren: false,
	},
	{
		id: 'e73a11b4',
		value: 'child-3',
		parent: 'e2065522',
		hasChildren: false,
	},
];
const template = createMemoryResourceTemplate<TreeNodeOption>();

export default factory(function CustomIcons({ id, middleware: { resource } }) {
	return (
		<Example>
			<Tree resource={resource({ template, initOptions: { id, data: nodes } })}>
				{(node) => (
					<div styles={{ display: 'flex' }}>
						<div styles={{ marginRight: '5px' }}>
							<Icon type="starIcon" />
						</div>
						<div>{node.value}</div>
					</div>
				)}
			</Tree>
		</Example>
	);
});
