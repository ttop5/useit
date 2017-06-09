<template>
  <div :id="chartId">
  </div>
</template>


<script>
/* eslint-disable */
import echarts from 'echarts'

export default {
  name: 'bar',
  props: {
    chartId: {
      type: String,
      required: true,
    },
    chartTitle: {
      type: String,
      required: true,
    },
    yTitle: {
      type: String,
      default: this.chartTitle,
    },
    chartData: {
      type: Object,
      default: () => {
        return {
          chartData: {
            xData: ['1星', '2星', '3星', '4星', '5星'],
            yData: [0, 0, 0, 0, 0],
          },
        }
      },
    },
  },
  methods: {
    drawBarChart() {
      const chart = echarts.init(document.getElementById(this.chartId))
      const option = {
        color: ['#295488'],
        title: {
          text: this.chartTitle,
          x: '50%',
          y: '15%',
          textAlign: 'center',
          textStyle: {
            color: '#a8a8a8',
            fontSize: 12,
          },
        },
        tooltip: {
          trigger: 'axis',
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '5%',
          containLabel: true,
        },
        xAxis: {
          type: 'category',
          data: this.chartData.xData,
          axisLine: {
            lineStyle: {
              color: '#a8a8a8',
            },
          },
        },
        yAxis: {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: '#a8a8a8',
            },
          },
          splitLine: {
            show: false,
          },
        },
        series: [
          {
            name: this.yTitle,
            type: 'bar',
            data: this.chartData.yData,
            itemStyle: {
              normal: {
                areaStyle: {
                  type: 'default',
                },
              },
            },
            markPoint: {
              data: [
                {
                  type: 'max',
                  name: '最大值',
                },
              ],
            },
          },
        ],
      }
      chart.setOption(option)
    },
  },
  mounted() {
    this.drawBarChart()
  },
  updated() {
    this.drawBarChart()
  },
}
</script>


<style lang="less">
</style>
