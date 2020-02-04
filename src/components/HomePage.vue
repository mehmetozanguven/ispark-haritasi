<template>
  <div class="container-xl">
    <app-navbar />
    <app-findIspark />
    <app-footer  class="text-center"/>
  </div>
</template>
<script>
import Navbar from "./Navbar";
import FindIspark from "./FindIspark"
import Footer from "./Footer"
export default {
  name: "HomePage",
  components: {
    "app-navbar": Navbar,
    "app-findIspark":FindIspark,
    "app-footer": Footer
  },
  data() {
    return {};
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
addMarginTop {
  margin-top: 20px;
}
</style>
