<template>
  <div>
    <section class="text-light topNav row py-4 justify-content-center">
      <p class="col-sm-8 text-center  col-md-3 col-lg-2">INGO Tracker</p>
      <p class="col-sm-8  text-center col-md-3 col-lg-2">INGO Staffing</p>
      <p class="col-sm-8  text-center col-md-3 col-lg-2">INGO Presence</p>
    </section>
    <div class="text-light alert row mx-4 mt-4 justify-content-between" role="alert">
      <p class="col-sm-8"> This interactive chart shows project information of INGOs registered with NIF at state and LGA
level . Please hover over chart segments for additional details, click on map or chart segment for
filtered information, and double-click map for a state-level map.</p>
 <div class="datePart col-sm-2 text-center align-self-center"><strong>Last Updated </strong>  <br> 22, Aug 2020</div>
</div>
<div class="row justify-content-end mr-4"><strong>Data Source: <a href="#">NIF</a></strong></div>
    <sectionOne class="my-3"></sectionOne>
    <sectionTwo  class="my-3"></sectionTwo>
    <sectionThree  class="my-3"></sectionThree>
  </div>
</template>

<script>
import sectionOne from '../components/sectionOne'
import sectionTwo from '../components/sectionTwo'
import sectionThree from '../components/sectionThree'
import data from '../assets/theData'
import axios from 'axios'
export default {
  name: 'App',
  components:{
    sectionOne,
    sectionTwo,
    sectionThree
  },
  mounted(){
  }
}
</script>

<style>
.topNav{
  background-color:forestgreen;
}
.alert{
  background-color: darkgreen;
}
.alert + .row{
  color: darkgray;
}
.alert + .row a{
  text-decoration: underline;
}
.datePart{
  border:  1px solid #fff;
  border-radius: 4px;
  background-color:darkgray;
}
</style>
