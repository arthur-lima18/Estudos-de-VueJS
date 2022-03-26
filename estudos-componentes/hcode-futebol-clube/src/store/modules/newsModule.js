export default {
  state: {
    news: [{
      id: 1,
      title: "Começaram os treinos para a nova temporada",
      content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi blanditiis tempora natus voluptates fugiat facere aliquam molestiae quis. Ut mollitia animi ullam placeat fugiat! Eum quae modi illum in maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quae ullam a debitis vitae itaque autem ad, quia quis enim ut dignissimos et. Iste, excepturi quia ut ea minus nemo?",
      date: "2022-01-01",
      img: "news1.jpg",
      imgAlt: "Notícia 1",
    }, {
      id: 2,
      title: "Jogo de quarta-feira termina empatado",
      content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi blanditiis tempora natus voluptates fugiat facere aliquam molestiae quis. Ut mollitia animi ullam placeat fugiat! Eum quae modi illum in maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quae ullam a debitis vitae itaque autem ad, quia quis enim ut dignissimos et. Iste, excepturi quia ut ea minus nemo?",
      date: "2022-01-12",
      img: "news2.jpg",
      imgAlt: "Notícia 2",
    }, {
      id: 3,
      title: "A inauguração do novo estádio ocorrerá na próxima semana",
      content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi blanditiis tempora natus voluptates fugiat facere aliquam molestiae quis. Ut mollitia animi ullam placeat fugiat! Eum quae modi illum in maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quae ullam a debitis vitae itaque autem ad, quia quis enim ut dignissimos et. Iste, excepturi quia ut ea minus nemo?",
      date: "2022-01-18",
      img: "news3.jpg",
      imgAlt: "Notícia 3",
    }]
  },
  getters: {
    getNews: function(state) {
      return state.news
    }
  }
}