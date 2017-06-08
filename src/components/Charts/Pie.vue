<template>
  <div :id="chartId">
  </div>
</template>


<script>
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
      default: [
        { value: 0, name: '' },
        { value: 0, name: '' },
      ],
    },
  },
  methods: {
    drawPieChart() {
      const chart = echarts.init(document.getElementById(this.chartId))
      const option = {
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
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
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
    this.$store.watch(
      (state) => {
        return state.leftbar.wide
      },
      () => {
        this.drawPieChart()
      },
    )
  },
  updated() {
    this.drawPieChart()
  },
}
</script>


<style lang="less">
</style>
