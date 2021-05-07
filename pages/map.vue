<template>
  <div>
    <div>
      <div class="tw-bg-white tw-mx-2 tw-rounded-sm tw-flex tw-justify-evenly">
        <div class="tw-flex tw-justify-evenly tw-my-5 tw-p-10 tw-rounded-sm">
          <GmapMap
            :center="{ lat: 1.5609365088210068, lng: 103.63919962814887 }"
            :zoom="7"
            map-type-id="terrain"
            style="width: 70vw; height: 100vh"
          >
            <GmapMarker
              :key="index"
              v-for="(m, index) in markers"
              :position="m"
              :clickable="true"
              :draggable="true"
              @click="center = m.position"
            />
          </GmapMap>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "dashborad",
  data() {
    return {
      markers: [
        {
          lat: 30.0065352,
          lng: 31.4758077,
          label: "Surat",
        },
        {
          lat: 1.5609365088210068,
          lng: 103.63919962814887,
          label: "Surat",
        },
        {
          lat: 1.513687678643521,
          lng: 103.66900362088796,
          label: "Ahmedabad",
        },
        {
          lat: 1.5233779116861417,
          lng: 103.66029088691266,
          label: "Rajkot",
        },
        {
          lat: 1.529607324215711,
          lng: 103.6585021799376,
          label: "Rajkot",
        },

      ],
    };
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>