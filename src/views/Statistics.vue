<template>
  <div class="statistics-view">
    <x-header class="header" :left-options="{backText: ''}"></x-header>
    <div class="content">
      <h2>小米MIX手机——{{ this.$route.query.id }}</h2>
      <div class="chart">
        <pie-chart
          chartId="pie-chart"
          chartTitle="评分情况比率图"
          :chartData="pieData">
        </pie-chart>
        <bar-chart
          chartId="line-chart"
          chartTitle="评分情况直方图"
          yTitle="投票数"
          :chartData="lineData">
        </bar-chart>
      </div>
    </div>
  </div>
</template>


<script>
import { XHeader } from 'vux';

import { httpGet } from '../utils/api';
import PieChart from '../components/Charts/Pie';
import BarChart from '../components/Charts/Bar';

export default {
  components: {
    XHeader,
    PieChart,
    BarChart,
  },
  data() {
    return {
      statisticsData: {},
      pieData: [
        { value: 310, name: '1星' },
        { value: 200, name: '2星' },
        { value: 500, name: '3星' },
        { value: 1000, name: '4星' },
        { value: 2555, name: '5星' },
      ],
      lineData: {
        xData: ['1星', '2星', '3星', '4星', '5星'],
        yData: [310, 200, 500, 1000, 2555],
      },
    };
  },
  methods: {
    getStatistics() {
      httpGet(`/statistics?id=${this.$route.query.id}`).then((response) => {
        this.statisticsData = response.data[0];
      });
    },
  },
  created() {
    this.getStatistics();
  },
};
</script>

<style lang="less">
.statistics-view {
  .vux-header {
    background-color: #fbf9fe;
    .vux-header-title, .vux-header h1 {
      color: #999;
    }
  }
  .content {
    h2 {
      color: #999;
      text-align: center;
    }
    .chart {
      #pie-chart {
        width: 100%;
        height: 200px;
        margin-top: 15px;
        margin-bottom: -12%;
      }
      #line-chart {
        width: 90%;
        height: 250px;
        margin-left: 5%;
      }
    }
  }
}
</style>
