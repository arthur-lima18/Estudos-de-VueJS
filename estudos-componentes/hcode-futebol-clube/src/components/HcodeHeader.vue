<template>
  <header>

    <div class="container">

      <nav class="navbar navbar-expand">

        <a href="#" class="link navbar-brand mr-auto">
          <img src="./../assets/logo.svg" alt="HCode Treinamentos" class="img d-inline-block align-top" id="logo"> Futebol Clube
        </a>

        <div class="links mr-2">

          <a href="#" class="btn mr-5">Início</a>
          <a href="#" class="btn mr-5">Noticias</a>
          <a href="#" class="btn mr-5">Classificações</a>
        
        </div>
      
      </nav>

    </div>
    
  </header>
</template>

<script>
export default {
  
}
</script>

<style scoped> /**utilizar o atributo scoped para manter a estilizacao somente no componente */
header {
  background-color: #000;
}
#logo {
  width: 150px;
  height: 100%;
}
.links {
  display: inline-flex;
}
.link {
  color: #d48e23;
  font-size: 30px;
  font-family: 'Rajdhani'
}
.links a {
  color: #fff
}
.links a:focus {
  outline: none !important; /** "!important" sobrescreve  o estilo */
  box-shadow: none !important;
}
</style>