<template>
  <div class="home">
    <StartBlock />
    <SectionPrice />
    <PreSection1 />
    <PreSection2 />
    <PreSection3 />
    <Section2 />
    <Section3 />
  </div>
</template>

<script>

import StartBlock from '@/views/StartBlock.vue'
import Section2 from '@/views/Section2.vue'
import PreSection1 from '@/components/PreSection1.vue'
import PreSection2 from '@/components/PreSection2.vue'
import PreSection3 from '@/components/PreSection3.vue'
import Section3 from '@/views/Section3.vue'
import SectionPrice from '@/views/SectionPrice.vue'

export default {
  name: 'Home',
  components: {
    StartBlock,
    Section2,
    Section3,
    PreSection1,
    SectionPrice,
    PreSection2,
    PreSection3
  }
}
</script>
