<template>
  <div>
    <div class="tw-flex">
      <div class="tw-bg-white tw-w-1/2 tw-mx-2 tw-rounded-sm tw-h-32">
        <div class="tw-flex tw-items-center tw-justify-around tw-p-6">
          <div><img src="/dashborad-icons/User.svg" alt="" srcset="" /></div>
          <div>
            <div class="tw-text-3xl">3</div>
            <div class="tw-text-3xl">User</div>
          </div>
        </div>
        <div></div>
      </div>
      <div class="tw-bg-white tw-w-1/2 tw-mx-2 tw-rounded-sm tw-h-32">
        <div class="tw-flex tw-items-center tw-justify-around tw-p-6">
          <div>
            <img src="/dashborad-icons/Settings.svg" alt="" srcset="" />
          </div>
          <div>
            <div class="tw-text-3xl">1</div>
            <div class="tw-text-3xl">Admin</div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
    <div
      class="tw-bg-white tw-mt-4 tw-mx-2 tw-rounded-sm tw-flex tw-justify-evenly tw-my-5"
    >
      <div class="tw-flex tw-justify-evenly tw-my-5 tw-p-10 tw-rounded-sm">
        <bar-chart
          :data="barChartData"
          :options="barChartOptions"
          :height="200"
        />
        <DoughnutChart
          :data="barChartData"
          :options="barChartOptions"
          :height="200"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BarChart from "~/components/BarChart";
import DoughnutChart from "~/components/DoughnutChart.vue";

const chartColors = {
  green: "rgb(75, 192, 192)",
  blue: "rgb(54, 162, 235)",
  purple: "rgb(153, 102, 255)",
  grey: "rgb(201, 203, 207)",
  red: "rgb(255, 99, 132)",
  orange: "rgb(255, 159, 64)",
  yellow: "rgb(255, 205, 86)",
};

export default {
  layout: "dashborad",

  data() {
    return {
      barChartData: {
        labels: ["Jan", "Feb", "Mar"],
        datasets: [
          {
            label: "Income",
            // backgroundColor: ["red", "orange", "yellow"],
            backgroundColor: [
              chartColors.green,
              chartColors.blue,
              chartColors.yellow,
            ],
            data: [10, 15, 20],
          },
        ],
      },
      barChartOptions: {
        responsive: false,
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: " ",
        },
      },
    };
  },
  components: {
    BarChart,
    DoughnutChart,
  },
};
</script>

<style lang="scss" scoped>
</style>