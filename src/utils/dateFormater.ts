import dayjs from 'dayjs'
import isToday from 'dayjs/plugin/isToday'

dayjs.extend(isToday)

export function DateFormater(dateString: string) {
  const daysPassed = dayjs(dayjs()).diff(dateString, 'days')
  if (dayjs(dateString).isToday()) {
    return 'Hoje'
  } else if (daysPassed <= 1) {
    return 'Há 1 dia'
  } else if (daysPassed < 7) {
    return `Há ${daysPassed} dias`
  } else {
    return dayjs(dateString).format('DD/MM/YY')
  }
}
