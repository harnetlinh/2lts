<script setup>
import { hexToRgb } from '@layouts/utils';
import VueApexCharts from 'vue3-apexcharts';
import { useTheme } from 'vuetify';

const vuetifyTheme = useTheme()
const series = [85]
const chartRef = ref('')

const chartOptions = computed(() => {
  const currentTheme = vuetifyTheme.current.value.colors
  const variableTheme = vuetifyTheme.current.value.variables
  
  return {
    labels: ['Hiệu suất'],
    chart: { type: 'radialBar' },
    plotOptions: {
      radialBar: {
        offsetY: 10,
        startAngle: -140,
        endAngle: 130,
        hollow: { size: '65%' },
        track: {
          background: currentTheme.surface,
          strokeWidth: '100%',
        },
        dataLabels: {
          name: {
            offsetY: -20,
            color: `rgba(${ hexToRgb(currentTheme['on-background']) },${ variableTheme['disabled-opacity'] })`,
            fontSize: '14px',
            fontWeight: '400',
            fontFamily: 'Public Sans',
          },
          value: {
            offsetY: 10,
            color: `rgba(${ hexToRgb(currentTheme['on-background']) },${ variableTheme['high-emphasis-opacity'] })`,
            fontSize: '38px',
            fontWeight: '600',
            fontFamily: 'Public Sans',
          },
        },
      },
    },

    colors: ['green'],
    fill: {
      type: 'gradient',
      gradient: {
        // shade: 'dark',
        // shadeIntensity: 0.1,
        // inverseColors: true,
        // opacityFrom: 1,
        // opacityTo: 0.6,
      },
    },
    stroke: { dashArray: 10 },
    grid: {
      padding: {
        top: -20,
        bottom: 5,
      },
    },
    states: {
      hover: { filter: { type: 'none' } },
      active: { filter: { type: 'none' } },
    },
    responsive: [{
      breakpoint: 960,
      options: { chart: { height: 280 } },
    }],
  }
})

const supportTicket = [
  {
    avatarColor: 'primary',
    avatarIcon: 'tabler-ticket',
    title: 'Đang xếp hàng',
    subtitle: '60',
  },
  {
    avatarColor: 'info',
    avatarIcon: 'tabler-user',
    title: 'Nhân viên',
    subtitle: '10',
  },
  {
    avatarColor: 'warning',
    avatarIcon: 'tabler-clock',
    title: 'Chờ trung bình',
    subtitle: '12 phút',
  },
]

const randomIntFromInterval = (min, max) => { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

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

const randomSeriesData = () => {

  setInterval(() => {
    let num = randomIntFromInterval(40,80)
    series.shift()
    series.push(num)
    if (num > 60) {
      chartOptions.color = ['red']
    } else {
      chartOptions.color = ['green']
    }
    chartRef.value.updateSeries(series, false, true)
  }, 1500)
}

onMounted(() => {
  randomSeriesData()
})
</script>

<template>
  <VCard
    title="Văn phòng Cầu Giấy"
  >
    <template #append>
      <div class="mt-n4 me-n2">
        <VBtn
          icon
          size="x-small"
          variant="plain"
          color="default"
        >
          <VIcon
            size="22"
            icon="tabler-dots-vertical"
          />
          <VMenu activator="parent">
            <VList>
              <VListItem
                v-for="(item, index) in ['View More', 'Delete']"
                :key="index"
                :value="index"
              >
                <VListItemTitle>{{ item }}</VListItemTitle>
              </VListItem>
            </VList>
          </VMenu>
        </VBtn>
      </div>
    </template>

    <VCardText>
      <VRow>
        <VCol
          cols="12"
          md="5"
          sm="6"
          class="mt-auto"
        >
          <div class="mb-4">
            <h4 class="text-4xl font-weight-semibold mb-2">
              80
            </h4>
            <p class="text-sm">
              Tổng số người chờ xử lý
            </p>
          </div>

          <VList class="card-list">
            <VListItem
              v-for="ticket in supportTicket"
              :key="ticket.title"
            >
              <VListItemTitle class="font-weight-medium">
                {{ ticket.title }}
              </VListItemTitle>
              <VListItemSubtitle class="opacity-100 text-disabled">
                {{ ticket.subtitle }}
              </VListItemSubtitle>
              <template #prepend>
                <VAvatar
                  rounded
                  size="34"
                  :color="ticket.avatarColor"
                  variant="tonal"
                >
                  <VIcon :icon="ticket.avatarIcon" />
                </VAvatar>
              </template>
            </VListItem>
          </VList>
        </VCol>
        <VCol
          cols="12"
          md="7"
          sm="6"
        >
          <VueApexCharts
            ref="chartRef"
            :update-args="[true, false]"
            :options="chartOptions"
            :series="series"
            height="360"
          />
        </VCol>
      </VRow>
    </VCardText>
  </VCard>
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 18px;
}
</style>
