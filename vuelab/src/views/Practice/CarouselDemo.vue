<template>
  <div>
    <div>
      <h1>Carousel Demo</h1>
    </div>
    <div class="container">
      <div class="carousel">
          <div style="width:33.33%;height:100px;background-color:white;">
              <img src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?cs=srgb&dl=pexels-chevanon-photography-1108099.jpg&fm=jpg" alt="" >
          </div>
          <div style="width:33.33%;height:100px;background-color:black;">
              <img src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?cs=srgb&dl=pexels-chevanon-photography-1108099.jpg&fm=jpg" alt="">
          </div>
          <div style="width:33.33%;height:100px;background-color:white;">
              <img src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?cs=srgb&dl=pexels-chevanon-photography-1108099.jpg&fm=jpg" alt="">
          </div>
          <div style="width:33.33%;height:100px;background-color:black;">
              <img src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?cs=srgb&dl=pexels-chevanon-photography-1108099.jpg&fm=jpg" alt="">
          </div>
          <div style="width:33.33%;height:100px;background-color:white;">
              <img src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?cs=srgb&dl=pexels-chevanon-photography-1108099.jpg&fm=jpg" alt="">
          </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CarouselDemo'
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
