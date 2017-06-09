<template>
  <div :id="chartId">
  </div>
</template>


<script>
/* eslint-disable */
import echarts from 'echarts'

export default {
  name: 'pie',
  props: {
    chartId: {
      type: String,
      required: true,
    },
    chartTitle: {
      type: String,
      required: true,
    },
    chartData: {
      type: Array,
      default: () => {
        return [
          { value: 0, name: '1星' },
          { value: 0, name: '2星' },
          { value: 0, name: '3星' },
          { value: 0, name: '4星' },
          { value: 0, name: '5星' },
        ];
      },
    },
  },
  methods: {
    drawPieChart() {
      const chart = echarts.init(document.getElementById(this.chartId))
      const option = {
        title: {
          text: this.chartTitle,
          x: '50%',
          y: '0%',
          textAlign: 'center',
          textStyle: {
            color: '#a8a8a8',
            fontSize: 12,
          },
        },
        tooltip: {
          trigger: 'item',
          formatter: '<br/>{b} : {d}%',
        },
        series: [
          {
            type: 'pie',
            radius: '70%',
            center: ['50%', '55%'],
            data: this.chartData,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
          },
        ],
      }
      chart.setOption(option)
    },
  },
  mounted() {
    this.drawPieChart()
  },
  updated() {
    this.drawPieChart()
  },
}
</script>


<style lang="less">
</style>
