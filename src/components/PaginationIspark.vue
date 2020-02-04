<template>
  <div aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item">
        <a class="page-link" v-on:click="prevPageHandler">{{prevPageText}}</a>
      </li>
      <li class="page-item">
        <a class="page-link" v-on:click="nextPageHandler">{{nextPageText}}</a>
      </li>
    </ul>
    <div
      class="row addMarginTop justify-content-center align-items-center"
      v-bind:key="each.key"
      v-bind:value="each"
      v-for="each in paginationIsparkList"
    >
      <app-ispark v-bind:isparkItem="each" />
    </div>
  </div>
</template>
<script>
import Ispark from "./Ispark";
import { bus } from "../main";
import {prevPageText, nextPageText} from "../utils/texts";
export default {
  name: "PaginationIspark",
  props: ["isparkListForSpecificTown"],
  components: {
    "app-ispark": Ispark
  },
  data() {
    return {
      nOfItemPerPage: 5,
      startIndex: 0,
      endIndex: 5,
      paginationIsparkList: "",
      prevPageText,
      nextPageText
    };
  },
  created() {
    bus.$on("isparkListForSpecificTown", data => {
        this.startIndex = 0;
        this.endIndex = 5;
      this.paginationIsparkList = data.slice(this.startIndex, this.endIndex);
    });
  },
  methods: {
    prevPageHandler() {
      if (this.startIndex - this.nOfItemPerPage <= 0) {
        this.startIndex = 0;
      } else {
        this.startIndex = this.startIndex - this.nOfItemPerPage;
      }

      if (this.endIndex - this.nOfItemPerPage <= 0) {
        this.endIndex = this.nOfItemPerPage;
      } else {
        this.endIndex = this.endIndex - this.nOfItemPerPage;
        if (this.endIndex < this.nOfItemPerPage) {
          this.endIndex = this.nOfItemPerPage;
        }
      }
      this.paginationIsparkList = this.isparkListForSpecificTown.slice(
        this.startIndex,
        this.endIndex
      );
    },
    nextPageHandler() {
      if (
        this.startIndex + this.nOfItemPerPage >=
        this.isparkListForSpecificTown.length
      ) {
        this.startIndex =
          this.isparkListForSpecificTown.length - this.nOfItemPerPage + 1;
        if (this.startIndex <= 0) {
          this.startIndex = 0;
        }
        this.endIndex = this.isparkListForSpecificTown.length;
      } else {
        this.startIndex = this.startIndex + this.nOfItemPerPage;
        if (
          this.endIndex + this.nOfItemPerPage >=
          this.isparkListForSpecificTown.length
        ) {
          this.endIndex = this.isparkListForSpecificTown.length;
        } else {
          this.endIndex = this.endIndex + this.nOfItemPerPage;
        }
      }
      this.paginationIsparkList = this.isparkListForSpecificTown.slice(
        this.startIndex,
        this.endIndex
      );
    }
  }
};
</script>

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
</style>
