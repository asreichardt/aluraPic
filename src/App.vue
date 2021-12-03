<template>
  <div id="app" class="corpo">
      
      <meu-menu :rotas="routes"> </meu-menu>

    <transition name="pagina">
          <router-view></router-view>
    </transition>      
  </div>
</template>

<script>
import { routes }  from './routes';
import Menu from './components/Menu.vue'

export default {
    
  data() {
    return {
      routes
    }

  },
  components: {
    'meu-menu' : Menu
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
