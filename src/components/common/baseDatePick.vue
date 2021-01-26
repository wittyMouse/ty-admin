<template>
  <el-date-picker v-model="currentDate" type="datetime" size="small" :placeholder="placeholder" time-arrow-control :default-value="defaultValue" :editable="false" @change="handleDatePickerChange"></el-date-picker>
</template>

<script>
export default {
  name: 'baseTimePick',
  props: {
    value: [Date, String],
    defaultValue: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: '请选择时间'
    }
  },
  data () {
    return {
      currentDate: ''
    }
  },
  watch: {
    value (val) {
      if (val === '') {
        this.currentDate = ''
      }
    }
  },
  methods: {
    // 时间选择器修改
    handleDatePickerChange (date) {
      this.$emit('change', date)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
