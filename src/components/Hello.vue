<template>
  <div class="hello">
    <h1>添加待办事宜</h1>
    <div class="content-wrapper">
      <input v-model="message" @keyup.enter="addItem" placeholder="待办事情">
      <button @click="addItem">添加</button>
      <ol class="content">
        <li v-for="(item, index) in lists" :key="index">
          <span :class="{doneItem: item.isFinished}">{{item.message}}</span>
          <span @click="itemInfo(item)">完成</span>
          <span @click="deleteItem(index)">删除</span>
        </li>
      </ol>
    </div>

  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      message: '',
      lists: [],
      editItemFlag: true,
      // isActive: false,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    this.init();
  },
  methods: {
    init () {
      let list = window.localStorage.getItem('todo-List');
      if (list && list.length > 0) {
        this.lists = JSON.parse(list);
      }
    },
    itemInfo (item) {
      item.isFinished = !item.isFinished
    },
    addItem () {
      if (this.message.length > 0) {
        this.lists.push({message: this.message, isFinished: false});
        window.localStorage.setItem('todo-List', JSON.stringify(this.lists));
        this.message = '';
      } else {
        alert('请输入待办事情！');
      }
    },
    editItem (item) {
      this.editItemFlag = !this.editItemFlag;
    },
    deleteItem (index) {
      this.lists.splice(index, 1);
      window.localStorage.setItem('todo-List', JSON.stringify(this.lists));
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul{
  list-style-type: none; 
  padding: 0;
}

li {
  /*display: inline-block;*/
  margin: 0 10px;
  text-align: left;
}

a {
  color: #42b983;
}
.content-wrapper{
  width: 500px;
  margin: 0 auto;
}
.content span {
  margin-left: 15px;
  /*text-decoration: underline;*/
  cursor: pointer;
}
.doneItem {
  text-decoration: line-through;
}

</style>
