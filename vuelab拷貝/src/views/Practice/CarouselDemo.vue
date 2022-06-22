<template>
  <div>
    <div>
      <h1>Carousel Demo</h1>
    </div>
    <div class="container">
      <div class="carousel owl-carousel owl-theme" ref="owl">
          <div>
              <img :src="imgList" alt="" >
          </div>
          <div>
              <img src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?cs=srgb&dl=pexels-chevanon-photography-1108099.jpg&fm=jpg" alt="">
          </div>
          <div>
              <img src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?cs=srgb&dl=pexels-chevanon-photography-1108099.jpg&fm=jpg" alt="">
          </div>
          <div>
              <img src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?cs=srgb&dl=pexels-chevanon-photography-1108099.jpg&fm=jpg" alt="">
          </div>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */ 
import axios from 'axios'
export default {
  name: 'CarouselDemo',
  data(){
      return {
          imgList:[]
      }
  },
  mounted () {
      this.getAssetsList()
    this.move()
  },
  methods: {
    move () {
      $('.carousel').owlCarousel({
        items: 3,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true
      })
    },
    async getAssetsList () {
      const { data } = await axios.get('/product/list')
      this.imgList = data.data[0].prodImg
      console.log(data)
    },
  }
}
</script>
<style scoped>
input {
  width: 100%;
  height: 40px;
}
.container {
  margin: auto;
  margin: 0 20px;
  padding: 20px;
  background: rgb(235, 235, 235);
}
.btn{
    margin-top:20px;
    width:200px;
    height:64px;
    background-color:rgb(33, 83, 218);
    color:white;
    border-radius: 4px;
    border: 0;
    font-size:16px;
    cursor:pointer;
}
.carousel{
    display:flex;
    width:100%;
    overflow-y: scroll;
}
.carousel div img{
    width:100%;
    height:100%;
}
</style>
