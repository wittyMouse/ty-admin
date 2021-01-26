const mixin = {
  methods: {
    buildTimeObj (dateTime) {
      const obj = {}
      const date = new Date()
      switch (dateTime) {
        case '':
        case '4':
          obj.start_time = null
          obj.end_time = null
          break
        case '1':
          obj.end_time = date.getTime()
          date.setDate(date.getDate() - 1)
          obj.start_time = date.getTime()
          break
        case '2':
          obj.end_time = date.getTime()
          date.setDate(date.getDate() - 7)
          obj.start_time = date.getTime()
          break
        case '3':
          obj.end_time = date.getTime()
          date.setMonth(date.getMonth() - 1)
          obj.start_time = date.getTime()
          break
        default:
          break
      }
      return obj
    }
  }
}

export default mixin
