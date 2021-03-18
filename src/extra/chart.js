let chart1 = (e) => {
	let temp = []
	let ozn = e.filter((item) => item.type === 'На ознакомление')
		.length
	let isp = e.filter((item) => item.type === 'На исполнение')
		.length
	let vhod = e.filter((item) => item.type === 'Входящие').length
	temp.push(ozn)
	temp.push(isp)
	temp.push(vhod)
	return temp
}
let chart2 = (e) => {
	let temp = []
	let nach = e.filter((item) => item.deadline === 'Вчера').length
	let rab = e.filter((item) => item.deadline === 'Сегодня').length
	let zav = e.filter((item) => item.deadline === 'Завтра').length
	let del = e.filter((item) => item.deadline === 'На неделе')
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
}
let chart3 = (e) => {
	let temp = []
	let nach = e.filter(
		(item) => item.status === 'Не начато' && item.controler
	).length
	let rab = e.filter(
		(item) => item.status === 'В работе' && item.controler
	).length
	let zav = e.filter(
		(item) => item.status === 'Завершено' && item.controler
	).length
	let del = e.filter(
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
}

export {chart1, chart2, chart3}
