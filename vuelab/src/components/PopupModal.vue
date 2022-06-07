<template>
    <card id="modal" v-show="isOpen">
        <p>
            <slot name="title"></slot>
        </p>
         <button class="btn">
            <slot name="button"></slot>
        </button>
    </card>
</template>

<style scoped>
:hover.btn{
    background-color:rgb(66, 110, 230);
}
.btn {
    width:200px;
    height:64px;
    background-color:rgb(33, 83, 218);
    color:white;
    border-radius: 4px;
    border: 0;
    font-size:16px;
    cursor:pointer;
}
</style>

