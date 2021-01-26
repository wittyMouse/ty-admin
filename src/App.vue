<template>
  <div id="app">
    <transition enter-active-class="animated faster delay-half-1s fadeInRightBig" leave-active-class="animated faster fadeOutLeftBig">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
