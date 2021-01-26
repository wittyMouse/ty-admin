<template>
  <div class="basic-radio">
    <div :class="['basic-radio-item', currentPick === 1 ? 'active' : 'normal']">
      <div class="basic-radio-item-pick" @click="handlePick(1)">
        <span class="basic-radio-item-radio" />
        <span class="basic-radio-item-label">数量较上监控周期增长的百分比</span>
      </div>
      <el-input
        class="basic-radio-item-input"
        :value="value1"
        :disabled="currentPick !== 1"
        size="small"
        @input="handleValueChange(1, $event)"
      >
        <template #prefix>>=</template>
        <template #suffix>%</template>
      </el-input>
    </div>
    <div :class="['basic-radio-item', currentPick === 2 ? 'active' : 'normal']">
      <div class="basic-radio-item-pick" @click="handlePick(2)">
        <span class="basic-radio-item-radio" />
        <span class="basic-radio-item-label">数量较上监控周期增长的条数</span>
      </div>
      <el-input
        class="basic-radio-item-input"
        :value="value2"
        :disabled="currentPick !== 2"
        size="small"
        @input="handleValueChange(2, $event)"
      >
        <template #prefix>>=</template>
        <template #suffix>条</template>
      </el-input>
    </div>
    <div :class="['basic-radio-item', currentPick === 3 ? 'active' : 'normal']">
      <div class="basic-radio-item-pick" @click="handlePick(3)">
        <span class="basic-radio-item-radio" />
        <span class="basic-radio-item-label">数量较上监控周期内达到的条数</span>
      </div>
      <el-input
        class="basic-radio-item-input"
        :value="value3"
        :disabled="currentPick !== 3"
        size="small"
        @input="handleValueChange(3, $event)"
      >
        <template #prefix>>=</template>
        <template #suffix>条</template>
      </el-input>
    </div>
  </div>
</template>

<script>
export default {
  name: 'basicRadio',
  props: {
    currentPick: Number,
    value1: [Number, String],
    value2: [Number, String],
    value3: [Number, String]
  },
  methods: {
    handlePick (type) {
      this.$emit('change', type)
    },
    handleValueChange (type, val) {
      this.$emit('valueChange', type, val)
    }
  }
}
</script>

<style lang="scss">
.basic-radio {

}
.basic-radio-item {
  display: flex;
  margin-bottom: 10px;
  align-items: center;

  &.normal {
    .basic-radio-item-radio {
      border: 1px solid #0c3e71;
    }
  }

  &.active {
    .basic-radio-item-radio {
      background: url('../../../assets/images/label-icon.png') 0 -52px no-repeat;
    }
  }
}
.basic-radio-item-pick {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.basic-radio-item-radio {
  width: 20px;
  height: 20px;
  border-radius: 20px;
  box-sizing: border-box;
}
.basic-radio-item-label {
  margin-left: 5px;
  width: 226px;
  font-size: 14px;
  color: #fff;
}
.basic-radio-item-input {
  flex: 0 0 auto;
  margin-left: 30px;
  width: 189px;

  .el-input__inner {
    border: 1px solid #1c6bab;
    border-radius: 3px;
    background-color: #0f3867;
    color: #fff;
  }

  .el-input__prefix {
    left: 8px;
    color: #fff;
    line-height: 32px;
  }

  .el-input__suffix {
    right: 8px;

    .el-input__suffix-inner {
      color: #3cf;
      line-height: 32px;
    }
  }

  &.el-input.is-disabled {
    .el-input__inner {
      background: #114a8a;
      border-color: #1c6bab;
      color: #1c6bab;
    }
    .el-input__prefix {
      color: #1c6bab;
    }

    .el-input__suffix {

      .el-input__suffix-inner {
        color: #1c6bab;
      }
    }
  }
}
</style>
