const { __ } = wp.i18n;

const transitionTypes = [
	{
		value: '',
		label: __('None')
	},
	{
		value: 'ease',
		label: __('ease')
	},
	{
		value: 'linear',
		label: __('linear')
	},
	{
		value: 'ease-in',
		label: __('ease-in')
	},
	{
		value: 'ease-in-out',
		label: __('ease-in-out')
	},
];

export default transitionTypes;
