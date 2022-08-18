<template>
    <div id="About">
        <hr>
        <p>Under the supervision of Professor Maleknaz Nayebi and the Faculty of Lassonde School of Engineering in the Department of EECS, worked on a project titled "Customizing and Tailoring Machine Learning Documentation". Duties and Responsibilities consist of gathering data, pre-processing and mining the metadata, pre-processing and mining images, auto-captioning, and operating databases. The research project is presented at the Lassonde Undergraduate Research Conference.</p>
    </div>
    <img src = "@/assets/Slide1.png">
    <img src = "@/assets/Slide2.png">    
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import Slide1 from '@/assets/Slide1.png';
import Slide2 from '@/assets/Slide2.png';
console.log(Slide1);
console.log(Slide2);
@Options({components: {}})
export default class About extends Vue
{
}
</script>

<style lang="sass" scoped>

#About
    div
        font-size: 0.8em
</style>

