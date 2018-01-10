/* global Vue, VueRouter, axios */

var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      message: "Welcome to Vue.js!",
      students: [
        {
          first_name: "John",
          last_name: "Doe",
          email: "johnemail@email.com",
          phone_number: "111-222-3334",
          online_resume_url: "blah blah blah"
        },
        {
          first_name: "Jane",
          last_name: "Doe",
          email: "janeemail@email.com",
          phone_number: "111-222-3334",
          online_resume_url: "blah blah blah"
        }
      ]
    };
  },

  mounted: function() {},

  // mounted: function() {
  //   axios.get("/v1/students").then(
  //     function(response) {
  //       this.students = response.data;
  //       console.log(this.students);
  //     }.bind(this)
  //   );
  // },

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
