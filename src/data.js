import {
	pieChartOutline,
	timerOutline,
	notificationsOutline,
	checkmarkCircleOutline,
	documentTextOutline,
	folderOutline,
	desktopOutline,
	starOutline,
	helpCircleOutline,
	cogOutline,
	informationCircleOutline,
} from 'ionicons/icons'

const menuList = [
	{ title: 'Сводка', icon: pieChartOutline },
	{ title: 'Последние карточки', icon: timerOutline },
	{ title: 'Уведомления', icon: notificationsOutline, badge: 11 },
	{ title: 'Избранное', icon: starOutline },
]
const menuList1 = [
	{ title: 'Версия для ПК', icon: desktopOutline },
	{ title: 'Настройки', icon: cogOutline },
	{ title: 'Справка/отзыв', icon: helpCircleOutline },
	{ title: 'О программе', icon: informationCircleOutline },
]
const treeData = [
	{
		id: 0,
		name: 'Задания',
		icon: checkmarkCircleOutline,
		children: [
			{ id: 0, name: 'Задания мне', selected: true, badge: 5 },
			{ id: 0, name: 'Задания от меня' },
			{ id: 0, name: 'Подходит срок', badge: 2 },
		],
	},
	{
		id: 1,
		name: 'Документы',
		icon: documentTextOutline,
		children: [
			{ id: 0, name: 'Я - автор' },
			{ id: 0, name: 'На подготовке' },
			{ id: 0, name: 'Входящие', badge: 7 },
			{ id: 0, name: 'Исходящие' },
			{ id: 0, name: 'На исполнение' },
			{ id: 0, name: 'На контроле' },
		],
	},
	{
		id: 2,
		name: 'Мои папки',
		icon: folderOutline,
		children: [{ name: 'Важное' }, { name: 'Черновики' }],
	},
]

export { treeData, menuList, menuList1 }
