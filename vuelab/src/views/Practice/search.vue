<template>
<div class="practice">
    <h1>Search</h1>
</div>
<div class="container">
    <div>
        <input type="text" v-model="searchVal">
    </div>
    <p>目前有12筆資料</p>
    <div>
        <li v-for="item in filteredList()" :key="item">
            {{item}}
        </li>
    </div>
</div>

</template>

<script>
import { ref, computed } from "vue";
export default {
  setup() {
      const searchVal = ref("");
    const itemList = ref(['Ada','Aaliyah','Adela','Basia','Bonnie','Brook','Candice','Celeste','Cheryl','Ella','Eudora','Gemma']);
    function filteredList() {
  return this.itemList.filter((item) =>
    item.toLowerCase().includes(this.searchVal.value.toLowerCase())
  );
}
    return {filteredList,
        searchVal,
      itemList
    };

  },
};
</script>
<style scoped>
input {
    width:200px;
    height:32px;
}
.container{
    margin:auto;
    width:300px;
    padding:20px;
    background:rgb(235, 235, 235);
}
li{
    list-style-type: none;
}
</style>
