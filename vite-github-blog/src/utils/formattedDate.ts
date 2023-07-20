import moment from 'moment'

export const formattedDate = (date: string) => {
  return moment(date).fromNow()
}
