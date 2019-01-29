import Vue from 'vue'
import moment from 'moment'

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(value).format('YYYY/MM/DD')
  }
})

Vue.filter('formatDateTimeTag', function(value) {
  if (value) {
    return moment(value).format('YYYY-MM-DD HH:mm:ss')
  }
})

export default ({ app }, inject) => {
  app.getStaticImage = getStaticImage
}

const getStaticImage = function(url) {
  return 'https://freamap.co.jp/images' + url
}
