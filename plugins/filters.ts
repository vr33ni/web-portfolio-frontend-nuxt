/** Vue component filters */

import Vue from 'vue'
import moment from 'moment'

export function fullDate(date: Date | undefined): string {
  if (date) {
    return date.toLocaleString(undefined, {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }
  return ''
}
export function shortDate(date: Date | undefined): string {
  if (date) {
    return date.toLocaleDateString(undefined, {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
    })
  }
  return ''
}

export function dateRangePickerFormat(date: Date | undefined): string {
  if (date) {
    return moment(String(date)).format('DD/MM/YYYY')
  }
  return ''
}

Vue.filter('shortDate', shortDate)
Vue.filter('fullDate', fullDate)
Vue.filter('dateRangePickerFormat', dateRangePickerFormat)
