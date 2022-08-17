<template>
    <div id="About">
        <hr>
        <p>Under the supervision of Professor Maleknaz Nayebi and the Faculty of Lassonde School of Engineering in the Department of EECS, worked on a project titled "Customizing and Tailoring Machine Learning Documentation". Duties and Responsibilities consist of gathering data, pre-processing and mining the metadata, pre-processing and mining images, auto-captioning, and operating databases. The research project is presented at the Lassonde Undergraduate Research Conference.</p>
        <hr>
        <div class="slideshow-container">

            <!-- Full-width images with number and caption text -->
            <div class="mySlides fade">
                <div class="numbertext">1 / 17</div>
                <img src="assets/Slide1.JPG" style="width:100%">
            </div>

            <div class="mySlides fade">
                <div class="numbertext">2 / 17</div>
                <img src="assets/Slide2.JPG" style="width:100%">
            </div>

            <div class="mySlides fade">
                <div class="numbertext">3 / 17</div>
                <img src="assets/Slide3.JPG" style="width:100%">
            </div>

            <div class="mySlides fade">
                <div class="numbertext">4 / 17</div>
                <img src="assets/Slide4.JPG" style="width:100%">
            </div>

            <div class="mySlides fade">
                <div class="numbertext">5 / 17</div>
                <img src="assets/Slide5.JPG" style="width:100%">
            </div>

            <div class="mySlides fade">
                <div class="numbertext">6 / 17</div>
                <img src="assets/Slide6.JPG" style="width:100%">
            </div>

            <div class="mySlides fade">
                <div class="numbertext">7 / 17</div>
                <img src="assets/Slide7.JPG" style="width:100%">
            </div>

            <div class="mySlides fade">
                <div class="numbertext">8 / 17</div>
                <img src="assets/Slide8.JPG" style="width:100%">
            </div>

            <div class="mySlides fade">
                <div class="numbertext">9 / 17</div>
                <img src="assets/Slide9.JPG" style="width:100%">
            </div>

            <div class="mySlides fade">
                <div class="numbertext">10 / 17</div>
                <img src="assets/Slide10.JPG" style="width:100%">
            </div>

            <div class="mySlides fade">
                <div class="numbertext">11 / 17</div>
                <img src="assets/Slide11.JPG" style="width:100%">
            </div>

            <div class="mySlides fade">
                <div class="numbertext">12 / 17</div>
                <img src="assets/Slide12.JPG" style="width:100%">
            </div>

            <div class="mySlides fade">
                <div class="numbertext">13 / 17</div>
                <img src="assets/Slide13.JPG" style="width:100%">
            </div>

            <div class="mySlides fade">
                <div class="numbertext">14 / 17</div>
                <img src="assets/Slide14.JPG" style="width:100%">
            </div>

            <div class="mySlides fade">
                <div class="numbertext">15 / 17</div>
                <img src="assets/Slide15.JPG" style="width:100%">
            </div>

            <div class="mySlides fade">
                <div class="numbertext">16 / 17</div>
                <img src="assets/Slide16.JPG" style="width:100%">
            </div>

            <div class="mySlides fade">
                <div class="numbertext">17 / 17</div>
                <img src="assets/Slide17.JPG" style="width:100%">
            </div>

            <!-- Next and previous buttons -->
            <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
            <a class="next" onclick="plusSlides(1)">&#10095;</a>
            </div>
            <br>

            <!-- The dots/circles -->
            <div style="text-align:center">
            <span class="dot" onclick="currentSlide(1)"></span>
            <span class="dot" onclick="currentSlide(2)"></span>
            <span class="dot" onclick="currentSlide(3)"></span>
            <span class="dot" onclick="currentSlide(4)"></span>
            <span class="dot" onclick="currentSlide(5)"></span>
            <span class="dot" onclick="currentSlide(6)"></span>
            <span class="dot" onclick="currentSlide(7)"></span>
            <span class="dot" onclick="currentSlide(8)"></span>
            <span class="dot" onclick="currentSlide(9)"></span>
            <span class="dot" onclick="currentSlide(10)"></span>
            <span class="dot" onclick="currentSlide(11)"></span>
            <span class="dot" onclick="currentSlide(12)"></span>
            <span class="dot" onclick="currentSlide(13)"></span>
            <span class="dot" onclick="currentSlide(14)"></span>
            <span class="dot" onclick="currentSlide(15)"></span>
            <span class="dot" onclick="currentSlide(16)"></span>
            <span class="dot" onclick="currentSlide(17)"></span>
            </div>
            
    </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';

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

<style>


</style>
