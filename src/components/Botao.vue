
<template>
    <button class="botao botao-perigo" :type="tipo"  @click="disparaAcao()"> {{ rotulo }}  </button>

</template>

<script>

export default {

props: ['tipo', 'rotulo'],

methods :{
        disparaAcao() {
            if(confirm("Confirma operação ? ")){
                this.$emit("botaoAtivado", new Date()); //dispara um evento no elemento pai chamando o médoto botaoAtivado
               
               /**this.$emit("botaoAtivado", new Date())
                 * new Date() e um exemplo  de como podemos passar um dado como parametro p/
                 *  o elemento para que usaria o $event para acessa-lo
                 */
            }

        
        }

    }
}
</script>
<style scoped>
    
        .botao {
        display: inline-block;
        padding: 10px;
        border-radius: 3px;
        margin: 10px;
        font-size: 1.2em;
    }

    .botao-perigo {
        background: firebrick;
        color: white;
    }

    .botao-padrao {
        background: darkcyan;
        color: white;
    }


</style>