
<template>
    <nav>
          <ul>
              <li v-for="(route,index) in rotas" :key="index">
              <router-link :to="route.path ? route.path : '/'" >
                {{route.titulo}} 
            </router-link>
          </li>

          </ul>
      </nav>
</template>

<script>

export default {

    props: ['rotas']
}

</script>
<style scoped>
    
</style>