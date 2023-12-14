<template>
  <div>
    <label for="attribute">View by</label>
    <select id="attribute" class="attribute" name="attribute" @change="updateAttribute">
      <option value = Type>Type of tree</option>
      <option value = Motivation>Motivation</option>
    </select>
    <div id="anychart-container"></div>
  </div>
</template>

<script>
import AnyChart from 'anychart';
export default {
  name: "DisplayGraph",

  components: {
    AnyChart,
  },

  data() {
    return {
      rawData: [], // Raw data from JSON
      formattedData: [], // Formatted data that fits AnyChart format
      types: {Maple: 0, Oak: 0, Ginkgo: 0, Mulberry: 0, Olive: 0, Pines: 0, Willow: 0, Other: 0},
      motivations: {Gift: 0, GoodWill: 0, Agriculture: 0, Decoration: 0, Other: 0},
      attribute: 'Type', // Select which view to see
      chart: AnyChart.area(),
      palette: anychart.palettes.distinctColors().items(['#C58B59', '#F0DBCB', '#A5C188', '#665547', '#4C8077', '#402E32', '#AB7465', '#BAA89B']), // Create color palette
    };
  },

  mounted() {
    // Load data
    this.loadData();
  },

  methods: {
    loadData() {
      // Path to the JSON file that contains data
      const jsonPath = './data/data.json';

      fetch(jsonPath)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          this.rawData = data;
          // Sort the data by date
          function sortByDate(a, b) {
            return new Date(a.date) - new Date(b.date);
          }
          this.rawData.sort(sortByDate);
          // Format the data to fit AnyChart requirements
          this.formatData();
          // Generate the chart once the data has been formatted
          this.createChart();
        })
        .catch(error => console.error('Erreur de chargement des données', error));
    },

    updateAttribute() {
      // Modify the attribute sorting the trees
      this.attribute = document.getElementById('attribute').value;
      // Update the data
      this.formattedData = [];
      this.chart.removeAllSeries();
      this.formatData();
      this.createChart();
    },

    formatData() {
      // TODO: See cumulatited number of trees
      const aggregatedData = {};
      var prevmonth = this.rawData[0].date.substring(0, 7);
      if (this.attribute == 'Type') {
        aggregatedData[prevmonth] = { attributes: JSON.parse(JSON.stringify(this.types))};
      }
      if (this.attribute == 'Motivation') {
        aggregatedData[prevmonth] = { attributes: JSON.parse(JSON.stringify(this.motivations))};
      }

      this.rawData.forEach(item => {
        const month = item.date.substring(0, 7); // Get month from date
        if (!aggregatedData[month]) {
          aggregatedData[month] = JSON.parse(JSON.stringify(aggregatedData[prevmonth]));
          prevmonth = month;
        }

        if (this.attribute == 'Type') {
          aggregatedData[month].attributes[item.type] += parseInt(item.number, 10);
        }
        if (this.attribute == 'Motivation') {
          aggregatedData[month].attributes[item.motivation] += parseInt(item.number, 10);
        }
        
      });

      // Format the data to be compatible with AnyChart
      this.formattedData = Object.keys(aggregatedData).map(month => {
        const attributesData = aggregatedData[month].attributes;
        // Build an array [month, attributes]
        return [month, ...Object.values(attributesData)];
      });

    },

    createChart() {
      // TODO

      // create data set
      var dataSet = AnyChart.data.set(this.formattedData);

      // turn on the crosshair
      var crosshair = this.chart.crosshair();
      crosshair.enabled(true).yStroke(null).xStroke('#fff').zIndex(39);
      crosshair.yLabel().enabled(false);

      // force chart to stack values by Y scale.
      this.chart.yScale().stackMode('value');

      // set chart title text settings
      this.chart.title('Evolution of planted trees');

      // helper function to setup label settings for all series
      var setupSeriesLabels = function (series, name) {
        series
          .name(name)
          .stroke('3 #fff 1')
          .fill(function () {
            return this.sourceColor + ' 0.8';
          });
        series.hovered().stroke('3 #fff 1');
        series
          .hovered()
          .markers()
          .enabled(true)
          .type('circle')
          .size(4)
          .stroke('1.5 #fff');
        series.markers().zIndex(100);
      };

      // temp variable to store series instance
      var series;

      for (let i = 1; i < this.formattedData[0].length; i++) {
        series = this.chart.area(dataSet.mapAs({ x: 0, value: i }));
        if (this.attribute == 'Type') {
          setupSeriesLabels(series, Object.keys(this.types)[i-1]);
        }
        if (this.attribute == 'Motivation') {
          setupSeriesLabels(series, Object.keys(this.motivations)[i-1]);
        }
      }

      // turn on legend
      this.chart.legend().enabled(true).fontSize(13).padding([0, 0, 20, 0]);

      // set titles for axises
      this.chart.xAxis().title(false);
      this.chart.yAxis().title('Number of trees');

      // set color palette
      this.chart.palette(this.palette);

      // set container id for the chart
      this.chart.container('anychart-container');

      // initiate chart drawing
      this.chart.draw();
    },
  },
};
</script>

<style scoped>

</style>