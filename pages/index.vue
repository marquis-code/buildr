<template>
  <main>
    <hero-section id="about-section" />
    <hero-feature id="services-section" />
    <feature-one id="services-section" />
    <feature-two id="services-section" />
    <feature-three id="services-section" />
    <feature-four id="services-section" />
    <stat-section />
    <updated-testimonials class="" />
    <cta-section />
    <image-carousel id="projects"></image-carousel>
    <frequently-asked-questions />
    <contact-section id="contact-section" />
    <footer-section />
  </main>
</template>

<script setup lang="ts">
const openSidebar = ref(false);
const speed = ref(10);
</script>