<template>
  <div :id="chartId">
  </div>
</template>


<script>
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
            xData: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00',
              '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00',
              '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00'],
            yData: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
          y: '4%',
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
                }, {
                  type: 'min',
                  name: '最小值',
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
    this.$store.watch(
      (state) => {
        return state.leftbar.wide
      },
      () => {
        this.drawBarChart()
      },
    )
  },
  updated() {
    this.drawBarChart()
  },
}
</script>


<style lang="less">
</style>
