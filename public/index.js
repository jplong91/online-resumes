/* global Vue, VueRouter, axios */

var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      message: "Students",
      students: [
        {
          first_name: "John",
          last_name: "Doe",
          email: "johnemail@email.com",
          phone_number: "111-222-3334",
          online_resume_url: "blah blah blah",
          short_bio: "John Doe bio",
          linkedin_url: "www.linked.com/john",
          twitter_handle: "twitter.com/john",
          personal_blog_url: "blog.com/john",
          online_resume_url: "resume.com/john",
          github_url: "github.com/john",
          photo: "imgur.com/123",
          capstones: {
            name: "Capstone 1",
            description: "Cap 1 desc",
            url: "capstoneurl.com",
            screenshot: "imgur.com/001"
          },
          experience: {
            start_date: "1/1/17",
            end_date: "1/1/18",
            degree: "Yes",
            university_name: "College",
            details: "Graduated"
          },
          skills: {
            skill_name: "Coding"
          }
        },
        {
          first_name: "Jane",
          last_name: "Doe",
          email: "janeemail@email.com",
          phone_number: "111-222-3334",
          online_resume_url: "blah blah blah",
          short_bio: "Jane Doe bio",
          linkedin_url: "www.linked.com/jane",
          twitter_handle: "twitter.com/jane",
          personal_blog_url: "blog.com/jane",
          online_resume_url: "resume.com/jane",
          github_url: "github.com/jane",
          photo: "imgur.com/124",
          capstones: {
            name: "Capstone 2",
            description: "Cap 2 desc",
            url: "capstoneurl.com",
            screenshot: "imgur.com/001"
          },
          experience: {
            start_date: "1/1/17",
            end_date: "1/1/18",
            degree: "Yes",
            university_name: "College",
            details: "Graduated"
          },
          skills: {
            skill_name: "Coding"
          }
        }
      ]
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
