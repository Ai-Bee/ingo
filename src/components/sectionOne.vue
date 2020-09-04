<template>
<div id="theBody">
    <div class="selectRow row justify-content-start ml-sm-4">
        <div class="col-sm-5 col-md-2">
             <label for="stateSelect">
        <strong>State</strong>
    </label>
    <select class="custom-select" id="stateSelect">
  <option selected value="Yobe">Yobe</option>
</select>
        </div>
        <div class="col-sm-5 col-md-2">
             <label for="lgaSelect">
        <strong>LGA</strong> 
    </label>
    <select class="custom-select" id="lgaSelect">
  <option selected value="all">All LGAs</option>
</select>
        </div>
    </div>
   <div class="card shadow m-4">
       <div class="card-title m-4 col-sm-2 text-light text-center "><p> Section 1: Data Overview</p></div>
  <div class="card-body row">
    <section class="theMap col-sm-12 col-md-5">The map goes here
            <highmaps
      :options="mapOptions"
    ></highmaps>
    </section>
    <section class="col-sm-12 col-md-5 mx-auto">Number of <strong>INGO</strong> in <strong> Yobe: 21</strong> <br>
Number of LGA in <strong> Yobe: 17</strong> <br>
Number of sectors covered in Yobe: <strong>9</strong> </section>
  </div>
</div>
</div>
</template>

<script>
import stateMap from '../assets/stateMap'

export default {
  name: 'one',
  components:{

  },
  data(){
      return{
         states: {
          "Yobe": stateMap
         },
 mapOptions: {
            chart: {
              borderColor: '#335cad',
              height: 438
            },

          

            credits: {
              enabled: false,
              text: ''
            },

            title: {
              text: "",
              style: {
                fontSize: '16px',
                fontFamily: '"Open Sans", sans-serif',
                fontWeight: '600'
              }
            },

            subtitle: {
              text: "",
              style: {
                fontSize: '11px',
                fontFamily: '"Open Sans", sans-serif'
              }
              },

            exporting: {
              csv: {
                dateFormat: '%Y-%m-%d'
              }
            },

            mapNavigation: {
              // enableDoubleClickZoomTo: true,
              enabled: true,
              buttonOptions: {
                verticalAlign: 'middle',
                align: 'right'
              }
            },

            legend: {
              enabled: true,
              itemStyle: {
                fontSize: '10px'
              }
            },

            plotOptions: {
              map: {
                events:{
                  
                },
                color:'#BADC55',
                allAreas: true,
                 // Highcharts.maps['countries/ng/ng-all'],
                states: {
                  hover: {
                    color: '#BADA55'
                  }
                },
              
                dataLabels: {
                  allowOverlap:true,
                  enabled: true,
                  //format: '{point.name}',
                  color: '#FFFFFF',
                  formatter: function () {
                    if (this.point.value) {
                      return this.point.name;
                    }
                  }
                },
                tooltip: {
                  headerFormat: '<b>{series.name}</b><br>',
                  pointFormat: '{point.name}: <b>{point.value}</b>'
                }
              }
            },
            series: [],
            exporting: {
                buttons: {
                    contextButton: {
                      menuItems: [
                        "printChart",
                        "separator",
                        "downloadPNG",
                        "downloadJPEG",
                        "downloadPDF",
                        "downloadSVG",
                        "separator",
                        "downloadCSV",
                        "downloadXLS",
                        //"viewData",
                        "openInCloud"
                      ]
                      
                    }
                }
            }
        }
      }
  },
  methods:{
      prepareMap(){
           let theMapData;
           let state = 'Yobe'
           this.mapOptions.series = []
        this.mapOptions.series.pop();
        this.mapOptions.series.push(this.states[state])
       console.log(this.mapData)
       theMapData = this.states[state]
        this.plotLgaMap(theMapData)
      },
      plotLgaMap(theMapData){
          console.log(theMapData)
            theMapData.data.map((val,index)=>{
                val.value = index++
           })
     console.log(theMapData);
     console.log(this.mapOptions)
      }
  },
  mounted(){
      this.prepareMap()
  }
}
</script>

<style>
.card-title{
  background-color:forestgreen;
  border-radius: 4px;
}
.alert{
  background-color: darkgreen;
}
.datePart{
  border:  1px solid #fff;
  
  background-color:darkgray;
}
</style>
