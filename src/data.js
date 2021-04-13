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
			{id: 12, name: 'Важное' },
			{id: 13,  name: 'Черновики' },
			{id: 14,  name: 'Договоры' }
		],
	},
]
const dirs = [
	{ id:  0, url: '/main/folders/0', menu: true, name: 'Важное' },
	{ id:  1, url: '/main/folders/1', menu: true, name: 'Черновики' },
	{ id:  2, url: '/main/folders/2', menu: true, name: 'Договоры' },
	{ id:  3, url: '/main/folders/3', menu: false, name: 'Архив' },
	{ id:  4, url: '/main/folders/4', menu: false, name: 'Folder 0' },
	{ id:  5, url: '/main/folders/5', menu: false, name: 'Folder 1' },
	{ id:  6, url: '/main/folders/6', menu: false, name: 'Folder 2' },
	{ id:  7, url: '/main/folders/7', menu: false, name: 'Folder 3' },
	{ id:  8, url: '/main/folders/8', menu: false, name: 'Folder 4' },
	{ id:  9, url: '/main/folders/9', menu: false, name: 'Folder 5' },
	{ id: 10, url: '/main/folders/10', menu: false, name: 'Folder 6' },
	{ id: 11, url: '/main/folders/11', menu: false, name: 'Folder 7' },
	{ id: 12, url: '/main/folders/12', menu: false, name: 'Folder 8' },
	{ id: 13, url: '/main/folders/13', menu: false, name: 'Folder 9' },
	{ id: 14, url: '/main/folders/14', menu: false, name: 'Folder 10' },
	{ id: 15, url: '/main/folders/15', menu: false, name: 'Folder 11' },
	{ id: 16, url: '/main/folders/16', menu: false, name: 'Folder 12' },
]

export { treeData, menuList, menuList1, dirs }
