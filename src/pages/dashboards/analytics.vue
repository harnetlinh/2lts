<script setup>
import AnalyticsEarningReportsWeeklyOverview from '@/views/dashboards/analytics/AnalyticsEarningReportsWeeklyOverview.vue';
import AnalyticsSupportTracker from '@/views/dashboards/analytics/AnalyticsSupportTracker.vue';
import { useTheme } from 'vuetify';

const vuetifyTheme = useTheme()
const currentTheme = vuetifyTheme.current.value.colors

const statisticsVertical = {
  title: 'Customers per line',
  color: 'success',
  icon: 'tabler-credit-card',
  stats: '97.5k',
  height: 120,
  series: [{
    data: [
      20,
      25,
      23,
      21,
      30,
      28,
      26,
    ],
  }],
  chartOptions: {
    chart: {
      height: 110,
      type: 'area',
      parentHeightOffset: 0,
      toolbar: { show: false },
      sparkline: { enabled: true },
    },
    tooltip: { enabled: false },
    markers: {
      colors: 'transparent',
      strokeColors: 'transparent',
    },
    grid: { show: false },
    colors: [currentTheme.success],
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 0.8,
        opacityFrom: 0.6,
        opacityTo: 0.1,
      },
    },
    dataLabels: { enabled: false },
    stroke: {
      width: 2,
      curve: 'smooth',
    },
    xaxis: {
      show: true,
      lines: { show: false },
      labels: { show: false },
      stroke: { width: 0 },
      axisBorder: { show: false },
    },
    yaxis: {
      stroke: { width: 0 },
      show: false,
    },
  },
}

const statisticsVerticalRef = ref('')
const StatisticsVerticalData = ref([])

function makeid(length) {
  let result = ''
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  let counter = 0
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
    counter += 1
  }
  
  return result
}

const randomIntFromInterval = (min, max) => { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const randomDataForStatisticsVertical = () => {

  setInterval(() => {
    StatisticsVerticalData.value.forEach(data => {
      let num = randomIntFromInterval(4,20)
      data.series[0].data.shift()
      data.series[0].data.push(num)
      statisticsVerticalRef.value = makeid(10)
    })
  }, 2000)
}

onBeforeMount(() => {
  let obj = Object.assign({}, statisticsVertical)
  obj = JSON.parse(JSON.stringify(obj))
  StatisticsVerticalData.value.push(
    { ...obj },
  )
  obj = JSON.parse(JSON.stringify(obj))
  StatisticsVerticalData.value.push(
    { ...obj },
  )
  obj = Object.assign({}, statisticsVertical)
  StatisticsVerticalData.value.push(
    { ...obj },
  )
  obj = Object.assign({}, statisticsVertical)
  StatisticsVerticalData.value.push(
    { ...obj },
  )
})
onMounted(() => {
  randomDataForStatisticsVertical()
})
</script>

<template>
  <VRow class="match-height">
    <!-- 👉 Support Tracker -->
    <VCol
      cols="12"
      md="6"
    >
      <AnalyticsSupportTracker />
    </VCol>
    <VCol
      cols="12"
      md="6"
    >
      <AnalyticsSupportTracker />
    </VCol>
    
    <!-- 👉 Earning Reports Weekly Overview -->
    <VCol
      cols="12"
      md="12"
    >
      <AnalyticsEarningReportsWeeklyOverview />
    </VCol>
  </VRow>
</template>

<style lang="scss">
@use "@core/scss/template/libs/apex-chart.scss";
</style>
