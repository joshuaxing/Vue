<!--
 * @Author: your name
 * @Date: 2020-10-29 15:30:18
 * @LastEditTime: 2020-10-29 16:46:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-compontents\src\components\tree\index.vue
-->
<template>
  <div>
    <Item :data="treeData"></Item>
    ------------------------------------
    <Item :data="item" v-for="(item, index) in arrData" :key="index"></Item>
  </div>
</template>

<script>
import Item from "./item.vue";
export default {
  data() {
    return {
      arrData: [
        {
          name: "arr节点1",
          children: [
            {
              name: "arr节点1-1",
              children: [
                {
                  name: "arr节点1-1-1",
                  children: [
                    {
                      name: "arr节点1-1-1-1",
                      children: []
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: "arr节点2",
          children: [
            {
              name: "arr节点2-1",
              children: []
            }
          ]
        },
        {
          name: "arr节点3",
          children: []
        }
      ],
      treeData: {
        name: "",
        children: [
          {
            name: "节点1",
            children: [
              {
                name: "节点1-1",
                children: [
                  {
                    name: "节点1-1-1",
                    children: []
                  }
                ]
              }
            ]
          },
          {
            name: "节点2",
            children: [
              {
                name: "节点2-1",
                children: []
              }
            ]
          },
          {
            name: "节点3",
            children: []
          }
        ]
      }
    };
  },
  components: {
    Item
  }
};
</script>

<style>
</style>