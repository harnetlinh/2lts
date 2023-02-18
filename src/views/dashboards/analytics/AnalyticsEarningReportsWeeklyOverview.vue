<script setup>
import { hexToRgb } from '@layouts/utils';
import VueApexCharts from 'vue3-apexcharts';
import { useTheme } from 'vuetify';

const vuetifyTheme = useTheme()

const series = [{
  data: [
    40,
    65,
    50,
    45,
    90,
    55,
    70,
  ],
}]

const chartOptions = computed(() => {
  const currentTheme = vuetifyTheme.current.value.colors
  const variableTheme = vuetifyTheme.current.value.variables
  
  return {
    chart: {
      parentHeightOffset: 0,
      type: 'bar',
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        barHeight: '60%',
        columnWidth: '38%',
        startingShape: 'rounded',
        endingShape: 'rounded',
        borderRadius: 4,
        distributed: true,
      },
    },
    grid: {
      show: false,
      padding: {
        top: -30,
        bottom: 0,
        left: -10,
        right: -10,
      },
    },
    colors: [
      `rgba(${ hexToRgb(currentTheme.primary) })`,
      `rgba(${ hexToRgb(currentTheme.primary) })`,
      `rgba(${ hexToRgb(currentTheme.primary) })`,
      `rgba(${ hexToRgb(currentTheme.primary) })`,
      currentTheme.primary,
      `rgba(${ hexToRgb(currentTheme.primary) },${ variableTheme['pressed-opacity'] })`,
      `rgba(${ hexToRgb(currentTheme.primary) },${ variableTheme['pressed-opacity'] })`,
    ],
    dataLabels: { enabled: false },
    legend: { show: false },
    xaxis: {
      categories: [
        'Th2',
        'Th3',
        'Th4',
        'Th5',
        'Th6',
        'Th7',
        'CN',
      ],
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: {
        style: {
          colors: `rgba(${ hexToRgb(currentTheme['on-surface']) },${ variableTheme['disabled-opacity'] })`,
          fontSize: '14px',
          fontFamily: 'Public Sans',
        },
      },
    },
    yaxis: { labels: { show: false } },
    tooltip: { enabled: false },
    responsive: [{
      breakpoint: 1025,
      options: { chart: { height: 199 } },
    }],
  }
})

const earningsReports = [
  {
    color: 'primary',
    icon: 'tabler-currency-dollar',
    title: 'Số hồ sơ trung bình 1 nhân viên tiếp nhận thời điểm',
    amount: '3',
    progress: '40',
  },
  {
    color: 'info',
    icon: 'tabler-chart-pie-2',
    title: `Số người chờ trung bình mỗi giờ `,
    amount: '5',
    progress: '25',
  },
  {
    color: 'error',
    icon: 'tabler-brand-paypal',
    title: 'Thời gian chờ trung bình',
    amount: '12,5 phút',
    progress: '65',
  },
  {
    color: 'info',
    icon: 'tabler-brand-paypal',
    title: 'Thời gian xử lý trung bình',
    amount: '5,3 phút',
    progress: '65',
  },
]
</script>

<template>
  <VCard>
    <VCardItem class="pb-sm-0">
      <VCardTitle>Báo cáo tuần</VCardTitle>
      <VCardSubtitle />

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
    </VCardItem>

    <VCardText>
      <VRow>
        <VCol
          cols="12"
          sm="5"
          class="d-flex flex-column align-self-end"
        >
          <div class="d-flex align-center gap-2 mb-2 pb-1 flex-wrap">
            <h4 class="text-4xl font-weight-semibold">
              1200
            </h4>
            <VChip
              label
              color="success"
            >
              +14.2%
            </VChip>
          </div>

          <p class="text-sm">
            Hồ sơ đã được xử lý trong 7 ngày qua
          </p>
        </VCol>

        <VCol
          cols="12"
          sm="7"
          class="pt-0"
        >
          <VueApexCharts
            :options="chartOptions"
            :series="series"
            height="190"
          />
        </VCol>
      </VRow>

      <div class="border rounded mt-3 pa-4">
        <VRow>
          <VCol
            v-for="report in earningsReports"
            :key="report.title"
            cols="12"
            sm="3"
          >
            <div class="d-flex align-center">
              <VAvatar
                rounded
                size="30"
                :color="report.color"
                variant="tonal"
                class="me-2"
              >
                <VIcon :icon="report.icon" />
              </VAvatar>

              <h6 class="text-base font-weight-medium">
                {{ report.title }}
              </h6>
            </div>
            <h6 class="text-h6 my-3">
              {{ report.amount }}
            </h6>
            <VProgressLinear
              :model-value="report.progress"
              :color="report.color"
              height="8"
              rounded
              rounded-bar
            />
          </VCol>
        </VRow>
      </div>
    </VCardText>
  </VCard>
</template>
