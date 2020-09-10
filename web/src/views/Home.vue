<template>
  <div class="home">
    <StartBlock />
    <PreSection1 />
    <SectionPrice />
    <PreSection2 />
    <Section2 />
    <Section3 />
    <TheFooter />
  </div>
</template>

<script>
import StartBlock from '@/views/StartBlock.vue'
import Section2 from '@/views/Section2.vue'
import PreSection1 from '@/components/PreSection1.vue'
import PreSection2 from '@/components/PreSection2.vue'
import Section3 from '@/views/Section3.vue'
import Section4 from '@/views/Section4.vue'
import SectionPrice from '@/views/SectionPrice.vue'
import TheFooter from '@/components/TheFooter.vue'
export default {
  name: 'Home',
  components: {
    StartBlock,
    Section2,
    Section3,
    Section4,
    PreSection1,
    SectionPrice,
    PreSection2,
    TheFooter
  }
}
</script>
