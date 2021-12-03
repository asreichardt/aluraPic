<template>

    <div id="app" >

      <h1 class="centralizado"> {{ titulo }}</h1>
     <!-- <img  :src="foto.url" v-bind:alt="foto.titulo" />  : é atalho para v-bind -->

    <input type="search" placeholder="Filtre pelo título da foto" class="filtro" v-model="filtro" >
          {{filtro}}
      <ul class="lista-fotos"> 
        <li class="lista-fotos-item" v-for="(f,index) of fotosComFiltro" :key="index">
                                              <!-- fotosComFiltro é computed, poderia ser o array fotos -->
           <meu-painel :titulo='f.titulo'>
              <imagem-responsiva  :url="f.url" :titulo="f.titulo"/>

           </meu-painel> 

        </li>
      </ul>

            
  </div>
</template>

<script>
import Painel from './Painel.vue'
import ImagemResponsiva from './ImagemResponsiva.vue'
export default {
    components:{
      'meu-painel': Painel,
      'imagem-responsiva': ImagemResponsiva
    },
    data(){
      return  {
        titulo : "Alurapick",
        foto : {
          url:"https://www.petz.com.br/blog/wp-content/uploads/2021/03/piercing-para-cachorro-2.jpg",
          titulo: "Cachorro"
        },
        fotos :[], 
        filtro : ''
      }
    },
    created(){
      //  alert("CRIANDO O COMPONENTE NO CREATED");
          this.$http.get('http://localhost:3000/v1/fotos')   // get do vueResource
          .then(res=>res.json())
          .then(fotos =>this.fotos = fotos,err =>console.log(err))
          
          

    }, 
    mounted(){
         //   alert("CRIANDO O COMPONENTE NO MOUNTEED");

    },
    computed:{
          fotosComFiltro(){       
              if(this.filtro){
                let exp = new RegExp(this.filtro.trim(), 'i');
                return this.fotos.filter(foto=>exp.test(foto.titulo));
              }else{
                return this.fotos;
              }
          }
    }

}
/**
 *  created() : since the processing of the options is finished you have access to reactive data properties and 
 *  change them if you want. At this stage DOM has not been mounted or added yet. So you cannot do any
 *  DOM manipulation here

    mounted(): called after the DOM has been mounted or rendered. Here you have access to the DOM elements 
    and DOM manipulation can be performed for example get the innerHTML:
    console.log(element.innerHTML)

    Created is generally used for fetching data from backend API and setting it to data properties. 
    But in SSR mounted() hook is not present you need to perform tasks like fetching data in created hook only

      ==========
         V-MODEL VS V-BIND
        <input v-model="something">
        is essentially the same as:

        <input
          v-bind:value="something"
          v-on:input="something = $event.target.value"
        >
        or (shorthand syntax):

        <input
          :value="something"
          @input="something = $event.target.value"
        >
        So v-model is a two-way binding for form inputs. It combines v-bind, 
        which brings a js value into the markup, and v-on:input to update the js value.

 */
</script>

<style>


.centralizado{
  text-align: center;
}

.lista-fotos{
  list-style: none;
}

.lista-fotos .lista-fotos-item{
  display: inline-block;
}
   
.filtro{
  display: block;
  width: 100%;
}

</style>
