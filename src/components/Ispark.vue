/* eslint-disable no-unused-vars */
<template>
  <div>
    <div class="card addPaddingBottom">
      <div class="card-header">
        {{ isparkItem[townNameJsonKey] }} / {{ parkIdText }} :
        {{ isparkItem[isparkParkIdJsonKey] }}
      </div>
      <div class="card-body">
        <h6 class="card-title">
          {{ isparkAddressJsonKey }} : {{ isparkItem[isparkAddressJsonKey] }}
        </h6>
        <div class="card-text">
          <ul>
            <li>
              {{ isparkWorkingHourJsonKey }} :
              {{ isparkItem[isparkWorkingHourJsonKey] }}
            </li>
            <li
              v-bind:key="each.key"
              v-bind:value="each"
              v-for="each in isparkItem[isparkTarifelerJsonKey].slice(0, 5)"
            >
              {{ each }} TL
            </li>
            <li> {{isparkParkTypeJsonKey}} : {{ isparkItem[isparkParkTypeJsonKey] }} </li>
            <li> {{parketDevamNoktasiText}} : {{ parkEtDevamEtNoktasi() }} </li>
            <li> {{freeParkTimeJsonKey}} : {{ isparkItem[freeParkTimeJsonKey] }} </li>
            <li> {{monthlyFeeJsonKey}} : {{ isparkItem[monthlyFeeJsonKey] }} TL </li>
          </ul>
        </div>
        <button type="button" class="btn btn-primary" v-on:click="showOnMapListener">
          {{ showOnMaps }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { parkIdText, showOnMaps, parketDevamNoktasiText } from "../utils/texts";
import {
  townNameJsonKey,
  isparkWorkingHourJsonKey,
  isparkAddressJsonKey,
  isparkTarifelerJsonKey,
  isparkParkIdJsonKey,
  isparkParkTypeJsonKey,
  isparkParkEtDevamNoktasiJsonKey,
  freeParkTimeJsonKey,
  monthlyFeeJsonKey,
  longitudeJsonKey,
  latitudeJsonKey
} from "../utils/isparkJsonKey";
export default {
  name: "Ispark",
  props: ["isparkItem"],
  components: {},
  data() {
    return {
      parkIdText,
      showOnMaps,
      townNameJsonKey,
      isparkWorkingHourJsonKey,
      isparkAddressJsonKey,
      isparkTarifelerJsonKey,
      isparkParkIdJsonKey,
      isparkParkTypeJsonKey,
      isparkParkEtDevamNoktasiJsonKey,
      parketDevamNoktasiText,
      freeParkTimeJsonKey,
      monthlyFeeJsonKey,
      longitudeJsonKey,
      latitudeJsonKey,
      googleMapsUrl : "http://maps.google.com/?q="
    };
  },
  methods: {
    showOnMapListener: function() {
     // eslint-disable-next-line no-unused-vars
     const longitude = this.isparkItem[longitudeJsonKey]
     // eslint-disable-next-line no-unused-vars
     const latitude = this.isparkItem[latitudeJsonKey]
     const fullAddress = this.googleMapsUrl + latitude + ","+longitude + "&ll="+latitude+","+longitude+"&z=13";
     window.open(fullAddress, "_blank");    
    },
    parkEtDevamEtNoktasi: function(){
      const val = this.isparkItem[isparkParkEtDevamNoktasiJsonKey];
      if (val == 0) return "Hayır";
      else return "Evet"
    }
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
  margin: 0 10px;
}
a {
  color: #42b983;
}
.addPaddingBottom {
  margin-bottom: 35px;
}
</style>
