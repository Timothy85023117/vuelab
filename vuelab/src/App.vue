<template>
<Menu/>
  <router-view/>
</template>

<script>
// @ is an alias to /src
import Menu from '@/components/menu.vue'

export default {
  name: 'HomeView',
  components: {
    Menu
  }
}
</script>

