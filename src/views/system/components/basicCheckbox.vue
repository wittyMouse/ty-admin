<template>
  <div class="basic-checkbox">
    <div
      v-for="item in list"
      :key="item.id"
      :class="['basic-checkbox-item', isActive(item.id) ? 'active' : 'normal']"
    >
      <div class="basic-checkbox-item-pick" @click="handleClick(item.id)">
        <span class="basic-checkbox-item-checkbox"></span>
        <span class="basic-checkbox-item-label">{{item.value}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'basicCheckbox',
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    },
    selected: String
  },
  computed: {
    selectedList () {
      if (this.selected) {
        return this.selected.split(',')
      } else {
        return []
      }
    }
  },
  methods: {
    isActive (id) {
      const idx = this.selectedList.findIndex(item => item.toString() === id)
      if (idx > -1) {
        return true
      }
      return false
    },
    handleClick (id) {
      const arr = [...this.selectedList]
      const idx = arr.findIndex(item => item.toString() === id)
      if (idx > -1) {
        arr.splice(idx, 1)
      } else {
        arr.push(id)
      }
      this.$emit('change', arr.join(','))
    }
  }
}
</script>

<style lang="scss" scoped>
.basic-checkbox {
  display: flex;
  align-items: center;

  .basic-checkbox-item {
    margin-right: 10px;
    width: 120px;

    &.normal {
      .basic-checkbox-item-checkbox {
        border: 1px #0c3e71 solid;
        border-radius: 2px;
      }
    }

    &.active {
      .basic-checkbox-item-checkbox {
        background: url('../../../assets/images/label-icon.png') 0 0 no-repeat;
      }
    }
  }

  .basic-checkbox-item-pick {
    display: inline-block;
    cursor: pointer;
  }

  .basic-checkbox-item-checkbox {
    display: inline-block;
    width: 20px;
    height: 20px;
    vertical-align: middle;
    box-sizing: border-box;
  }

  .basic-checkbox-item-label {
    display: inline-block;
    margin-left: 5px;
    font-size: 14px;
    color: #fff;
    vertical-align: middle;
  }
}
</style>
