<template>
  <section id="projects" :class="$style.wrapper">
    <h2 :class="$style.title">
      Projects
    </h2>

    <div :class="$style.list">
      <project-card
        v-for="project in projectsList"
        :key="project.title"
        :project="project"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const projectsList: Project[] = [
  {
    title: 'AinewsMetrics documentation',
    url: 'https://docs.metrics.ainews.kz/',
    description: 'Documentation for client integration of AinewsMetrics.',
    stack: ['vue 3', 'nuxt 3', 'nuxt-content', 'pinia'],
    previewImage: '/ainews-metrics-docs.jpg',
    images: ['ainews-metrics-docs-4.jpg', 'ainews-metrics-docs-2.jpg', 'ainews-metrics-docs-3.jpg', 'ainews-metrics-docs-1.jpg', 'ainews-metrics-docs-5.jpg', 'ainews-metrics-docs-6.jpg', 'ainews-metrics-docs-7.jpg', 'ainews-metrics-docs-8.jpg', 'ainews-metrics-docs-9.jpg', 'ainews-metrics-docs-10.jpg']
  },
  {
    title: 'AinewsMetrics',
    url: 'https://metrics.ainews.kz/',
    description: 'Editorial analytics for the media. With AinewsMetrics, media editors can analyze general information, audience, content, and traffic sources to optimize internal processes. The platform visually shows how important resource indicators change, which publications attract the most user attention, and provides data on user behavior. The platform is connected to 15 media resources and reaches over 4.6 million users.',
    stack: ['vue 3', 'nuxt 3', 'typescript', 'pinia', 'echarts', 'vue-test-utils', 'jest', 'playwright'],
    previewImage: '/ainews-metrics.jpg',
    images: ['/ainews-metrics-8.jpg', '/ainews-metrics-1.jpg', '/ainews-metrics-2.jpg', '/ainews-metrics-3.jpg', '/ainews-metrics-4.jpg', '/ainews-metrics-5.jpg', '/ainews-metrics-6.jpg', '/ainews-metrics-7.jpg']
  },
  {
    title: 'AISOIP',
    url: 'https://aisoip.adilet.gov.kz/',
    description: 'Automated information system of executive proceedings Ministry of Justice of the Republic of Kazakhstan.  It consists of 3 applications: personal cabinet for parties involved in proceedings, personal cabinet for judicial executors, and public section.',
    stack: ['vue 2', 'typescript', 'vuex', 'vuetify'],
    previewImage: '/aisoip.jpg',
    images: ['/aisoip-1.jpg', '/aisoip-2.jpg', '/aisoip-3.jpg', '/aisoip-4.jpg', '/aisoip-5.jpg', '/aisoip-6.jpg', '/aisoip-7.jpg', '/aisoip-8.jpg', '/aisoip-9.jpg', '/aisoip-10.jpg']
  },
  {
    title: 'Qaztrip',
    description: 'A comprehensive B2B solution for the sale of tour packages in Kazakhstan',
    stack: ['vue 2', 'typescript', 'vuex', 'vuetify'],
    previewImage: '/qaztrip.jpg',
    images: ['/qaztrip-8.jpg', '/qaztrip-1.jpg', '/qaztrip-3.jpg', '/qaztrip-4.jpg', '/qaztrip-5.jpg', '/qaztrip-6.jpg', '/qaztrip-7.jpg', '/qaztrip-2.jpg']
  },
  {
    title: 'Smart JKH',
    url: 'https://smart.alseco.kz/',
    description: 'Information space for residents and authorities. It is intended for organizing the management of real estate objects, using communications with owners, generating and publishing general house information.',
    stack: ['vue 2', 'typescript', 'vuex', 'vuetify'],
    previewImage: '/smartjkh.jpg',
    images: ['/smartjkh-9.jpg', '/smartjkh-2.jpg', '/smartjkh-3.jpg', '/smartjkh-4.jpg', '/smartjkh-5.jpg', '/smartjkh-6.jpg', '/smartjkh-7.jpg', '/smartjkh-8.jpg', '/smartjkh-1.jpg']
  },
  {
    title: 'ALSECO.ZHER-KAZYNA',
    description: 'The system for automating the process of preparing municipal resolutions/district decisions and contracts, documenting the accepted documents for land plots from individuals and legal entities, managing and tracking payments for land sale contracts, and distributing payments according to contracts.',
    stack: ['vue 2', 'javascript', 'vuex', 'vue form generator'],
    previewImage: '/zherkazyna.jpg',
    images: ['/zherkazyna-8.jpg', '/zherkazyna-2.jpg', '/zherkazyna-3.jpg', '/zherkazyna-4.jpg', '/zherkazyna-5.jpg', '/zherkazyna-6.jpg', '/zherkazyna-7.jpg', '/zherkazyna-1.jpg']
  }
]

</script>

<style lang="scss" module>
.wrapper {
  padding: var(--space-4) 0;
}

.list {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: var(--space-2);

  @include tablet {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-4);
  }

  @include desktop {
    grid-template-columns: repeat(3, 1fr);
  }
}

.title {
  @extend %typo-heading-3;

  position: sticky;
  top: 0;
  height: var(--header-height);
  display: flex;
  align-items: center;
  z-index: 2;
  width: fit-content;
}
</style>
