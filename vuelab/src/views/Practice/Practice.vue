<template>
  <div class="practice">
    <h1>Practice List</h1>
  </div>
  <ul class="practiceList">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/counter">Counter</router-link></li>
      <li><router-link to="/search">Search</router-link></li>
  </ul>
</template>
<style scoped>
 .practiceList{
     width:300px;
     margin:auto;
 }
 li {
     margin:10px 0;
 }
</style>