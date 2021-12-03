<template>
  <div id="app" class="corpo">
      <nav>
          <ul>
              <li v-for="(route,index) in routes" :key="index">
              <router-link :to="route.path ? route.path : '/'" >{{route.titulo}}</router-link>
          </li>

          </ul>
      </nav>

    <transition name="pagina">
          <router-view></router-view>
    </transition>      
  </div>
</template>

<script>
import { routes }  from './routes';

export default {
    
  data() {
    return {
      routes
    }

  }
}

</script>

<style>
.corpo{
  font-family:  Helvetica, sans-serif;
  width: 96%;
  margin: 0 auto;
}

/**    EFEITOS DE TRANSIÇÃO, FUNCIONAM COM A TAG <TRANSITION)
    painel-fade-enter // antes do elemento ser incluído ou removido, o estado atual
     painel-fade-enter-active // quando o elemento esta sendo incluído
     painel-fade-leave-active // quando o elemento esta sendo removido */ 
  .pagina-enter, .pagina-leave-active {
    opacity: 0
  }

.pagina-enter-active, .pagina-leave-active {
  transition: opacity .4s
}


</style>
