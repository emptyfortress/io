import {computed} from 'vue'

let ser1 = computed(() => {
	let temp = []
	let ozn = tasks.value.filter((item) => item.type === 'На ознакомление')
		.length
	let isp = tasks.value.filter((item) => item.type === 'На исполнение')
		.length
	let vhod = tasks.value.filter((item) => item.type === 'Входящие').length
	temp.push(ozn)
	temp.push(isp)
	temp.push(vhod)
	return temp
})
let ser2 = computed(() => {
	let temp = []
	let nach = tasks.value.filter((item) => item.deadline === 'Вчера').length
	let rab = tasks.value.filter((item) => item.deadline === 'Сегодня').length
	let zav = tasks.value.filter((item) => item.deadline === 'Завтра').length
	let del = tasks.value.filter((item) => item.deadline === 'На неделе')
		.length
	temp.push(nach)
	temp.push(rab)
	temp.push(zav)
	temp.push(del)
	const entries = new Map([['data', temp]])
	const obj = Object.fromEntries(entries)
	let ar = []
	ar.push(obj)
	return ar
})
let ser3 = computed(() => {
	let temp = []
	let nach = tasks.value.filter(
		(item) => item.status === 'Не начато' && item.controler
	).length
	let rab = tasks.value.filter(
		(item) => item.status === 'В работе' && item.controler
	).length
	let zav = tasks.value.filter(
		(item) => item.status === 'Завершено' && item.controler
	).length
	let del = tasks.value.filter(
		(item) => item.status === 'Делегировано' && item.controler
	).length
	temp.push(nach)
	temp.push(rab)
	temp.push(zav)
	temp.push(del)
	const entries = new Map([['data', temp]])
	const obj = Object.fromEntries(entries)
	let ar = []
	ar.push(obj)
	return ar
})
