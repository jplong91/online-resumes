/* global Vue, VueRouter, axios */

var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      message: "Students",
      students: []
    };
  },

  // mounted: function() {},

  mounted: function() {
    axios.get("https://salty-ridge-97861.herokuapp.com/v1/students").then(
      function(response) {
        this.students = response.data;
        console.log(this.students);
      }.bind(this)
    );
  },

  created: function() {},
  methods: {},
  computed: {}
};

var router = new VueRouter({
  routes: [{ path: "/", component: HomePage }],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router
});
