export default {
  methods: {
    formatDate: function(date) {
      let newDate = new Date(date)
      return newDate.toLocaleDateString()
    }
  }
}