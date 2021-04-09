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
			{ id: 1, name: 'Задания мне', selected: true, badge: 5 },
			{ id: 2, name: 'Задания от меня' },
			{ id: 3, name: 'Подходит срок', badge: 2 },
		],
	},
	{
		id: 4,
		name: 'Документы',
		icon: documentTextOutline,
		children: [
			{ id: 5, name: 'Я - автор' },
			{ id: 6, name: 'На подготовке' },
			{ id: 7, name: 'Входящие', badge: 7 },
			{ id: 8, name: 'Исходящие' },
			{ id: 9, name: 'На исполнение' },
			{ id: 10, name: 'На контроле' },
		],
	},
	{
		id: 11,
		name: 'Мои папки',
		icon: folderOutline,
		children: [
			{ id: 12, name: 'Важное' },
			{id: 13,  name: 'Черновики' },
			{id: 14,  name: 'Договоры' }
		],
	},
]

export { treeData, menuList, menuList1 }
