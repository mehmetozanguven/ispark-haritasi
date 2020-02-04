/* eslint-disable no-unused-vars */

<template>
  <div class="container addMarginTop">
    <div class="row">
      <div class="col-3">
        <h6 class="addPaddingTop">İlçe Seçin:</h6>
      </div>
      <select
        v-model="selectedTown"
        class="custom-select col-9"
        id="townSelectInput"
        @change="handleTownSelection"
      >
        <option disabled value="">
          {{ selectedTownDefaultMessageText }}
        </option>
        <option
          v-bind:key="each.key"
          v-bind:value="each"
          v-for="each in townLists"
          >{{ each }}
        </option>
      </select>
    </div>
    <app-pagination class="addMarginTop" v-bind:isparkListForSpecificTown="isparkListForSpecificTown"/>
    <!-- <div
      class="row addMarginTop justify-content-center align-items-center"
      v-bind:key="each.key"
      v-bind:value="each"
      v-for="each in isparkListForSpecificTown"
    >
    <app-ispark v-bind:isparkItem="each" />
    </div> -->
  </div>
</template>
<script>
import {
  getTownList,
  getAllIsparkFromTownName
} from "../utils/isparJsonReader";
import { selectedTownDefaultMessageText } from "../utils/texts";
import PaginationIspark from "./PaginationIspark";
import {bus} from "../main";
export default {
  name: "FindIspark",
  components:{
    "app-pagination": PaginationIspark
  },
  data() {
    return {
      townLists: "",
      selectedTown: "",
      selectedTownDefaultMessageText,
      isparkListForSpecificTown: "",
    };
  },
  methods: {
    fetchData() {
      this.townLists = getTownList();
    },
    handleTownSelection() {
      this.isparkListForSpecificTown = getAllIsparkFromTownName(
        this.selectedTown
      );
      bus.$emit('isparkListForSpecificTown', this.isparkListForSpecificTown);
    }
  },
  created() {
    this.fetchData();
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.addMarginTop {
  margin-top: 20px;
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

.addPaddingTop {
  padding-top: 9px;
}
</style>
