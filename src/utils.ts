import dayjs from 'dayjs'

export function getDatesInWeek(date = new Date()) {
  const subject = dayjs(date)
  const subjectDOW = subject.day()
  const days = Array(7)
    .fill(0)
    .map((_, i) => {
      return subject.add(i - subjectDOW, 'day')
    })

  return days
}
