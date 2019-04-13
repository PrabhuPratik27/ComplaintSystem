<template>
  <div class="home">
    <Page1 />

    <Page2 />

    <Page3 />
  </div>
</template>

<script>
import Page1 from '@/components/HomeComponents/Home1'
import Page2 from '@/components/HomeComponents/Home2'
import Page3 from '@/components/HomeComponents/Home3'
export default {
  components: {
    Page1,
    Page2,
    Page3
  }
}
</script>
