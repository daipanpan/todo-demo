<template>
  <div class="todo">
    <h1>添加待办事宜</h1>
    <div class="content-wrapper">
      <input v-model="message" @keyup.enter="addItem" placeholder="待办事情">
      <button @click="addItem">添加</button>
      <ol class="content">
        <li v-for="(item, index) in lists" :key="index">
          <span :class="{doneItem: item.isFinished}">{{item.message}}</span>
          <span @click="toggleFinish(item)" v-if="!item.isFinished">完成</span>
          <span @click="toggleFinish(item)" v-if="item.isFinished">去做</span>
          <span @click="deleteItem(index)">删除</span>
        </li>
      </ol>

    </div>
  </div>
</template>

<script>
import Store from '../store/store'

export default {
  name: 'todo',
  data () {
    return {
      message: '',
      lists: Store.fetch(),
      msg: 'Welcome to Your Vue.js App'
    }
  },
  watch: {
    // 当观察lists变化时，如果需要传递的参数，应该是被观察者本身或者其他data数据。
    lists: {
      handler: function (lists) {
        Store.save(lists);
      },
      deep: true
    }
  },
  methods: {
    init () {
      // 这句更加精炼
      this.lists = JSON.parse(window.localStorage.getItem('todo-List')||'[]');
    },
    toggleFinish (item) {
      item.isFinished = !item.isFinished
    },
    addItem () {
      if (this.message.length > 0) {
        this.lists.push({message: this.message, isFinished: false});
        this.message = '';
      } else {
        alert('请输入待办事情！');
      }
    },
    deleteItem (index) {
      this.lists.splice(index, 1);
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
