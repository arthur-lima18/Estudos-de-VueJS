//arquivo para definir as rotas do sistema 
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './../components/HcodeSectionBanner'
import News from './../components/HcodeSectionNews'
import Notice from './../components/HcodeSectionNewsNotice'
import HcodeError from './../components/HcodeError404'

Vue.use(VueRouter)

export default new VueRouter ({
    linkExactActiveClass: 'link-active', //define uma classe para a url ativa
    routes: [{ //cada objeto é uma url a ser renderizada
        path: '/',
        component: Home
    }, {//adicionamos um Alias /notices para caso o usuario digite uma URL 'parecida' com a correta
        path: '/news',
        alias: '/notices',
        component: News
    }, {
        path: '/news/:idnotice',
        component: Notice,
        name: 'notice',
        beforeEnter: (to, from, next) => {
            //podemos inserir uma verificacao com uma condicional e, caso tudo ocorre bem, chamamos next()
            next()
        }
    }, {//nao queremos que o usuario acesse a rota /admin, por isso vamos redirecionar para a pagina principal
        path: '/admin',
        redirect: '/'
    }, {
        path: '*', //se nao for nenhuma rota anterior, a procurada nao existe, o que leva ao erro 404
        component: HcodeError
    }]
})

/**
 * 
 * tag <router-link> renderiza uma tag <a> e recebe o atributo "to" para navegaçao
 * tag <router-view> local em que os componentes sao renderizados
 * 
 * metodos para navegaçao:
 * .push() muda a url e altera o historico de navegação
 * .replace() nao adiciona nada ao historico de navegação
 * .go() recebe 1 para avançar à proxima pagina e -1 para voltar à ultima acessada
 *
 * temos a possibilidade de criar rotas filhas!!!
 * 
 * podemos dar um nome à rota para facilitar a leitura e a organizacao do codigo
 * 
 * podemos dar nomes às views caso precisemos exibir varios componentes ao mesmo tempo, basta usar 'name' em <router-view>
 * 
 * ATENÇÃO À ORDEM DAS ROTAS - DEIXAR ROTAS COM PARAMETROS MAIS PARA O FINAL
 * 
 * Redirect e Alias
 * 
 * - Redirect -> redireciona o usuario para outra rota 
 *            -> deve sempre vir após o path
 * - Alias -> "apelidos" para as rotas, os quais redirecionam para a rota correta em caso de erro na escrita da URL
 *         -> basta adicionar os possiveis valores de 'alias'
 * 
 * Para indicar uma pagina de erro(404), podemos usar o '*', que serve para identificar QUALQUER rota
 *         -> deve ser sempre a ultima rota do codigo para evitar erros
 * 
 * 
 * NAVIGATION GUARDS
 * 
 * métodos que ajudam a manter a aplicaçao mais segura
 * 
* - NAVIGATION GUARDS GLOBAL -> 
*                      beforeEach() - ocorre antes da rota ser acessada
*                      beforeResolve() - ocorre quando a navegação é confirmada
*                      afterEach() - ocorre quando a navegação é finalizada
* 
*                      Recebem 3 parametros - to, from e next
*                      
*                      to -> para onde vai a navegaçao
*                      from -> de onde está vindo a navegaçao
*                      next -> funcao para manipular a navegaçao (afterEach() nao tem esse parametro)
* 
* - NAVIGATION GUARDS LOCAL  -> 
*                      Realizam verificaçoes por rota, sendo mais especificos
*                      
*                      beforeEnter() - ocorre antes da rota ser acessada
*                      
*                      Recebem 3 parametros - to, from e next
*                      
*                      to -> para onde vai a navegaçao
*                      from -> de onde está vindo a navegaçao
*                      next -> funcao para manipular a navegaçao (afterEach() nao tem esse parametro)
* 
* - NAVIGATION GUARDS COMPONENTES  -> 
*                      Realizam verificaçoes nos componentes
*                      
*                      beforeRouteEnter() - antes do componente ser renderizado
*                      beforeRouteUpdate() - antes da rota mudar, muito usado quando a rota muda mas o componente se mantem
*                      beforeRouteLeave() - antes de acessar uma nova rota
* 
* - TRANSITIONS -> 
                      Transições que ocorrem entre as rotas
                      Usamos <transition> em volta do componente
* 
* 
*/                     