<template>
  <div class="todo">
      <div class="todo-input">
        <input class="input-content" v-model="message" @keyup.enter="addItem" placeholder="  待办事情">
        <button class="add-btn" @click="addItem">添加</button>
      </div>

      <div class="todo-wrapper">待办事情</div>
      <ol class="content">
        <li v-for="(item, index) in getToDo">
          <span>{{item.content}}</span>
          <input type="checkbox" :key="item.id" @click="moveToDone(item.id)">
        </li>
      </ol>
      <div class="todo-wrapper">已完成事情</div>
        <ol class="content">
        <li v-for="(item, index) in getDone">
          <span>{{item.content}}</span>
          <input type="checkbox" :key="item.id" @click="moveToDo(item.id)">
         </li>
      </ol>
  </div>
</template>

<script>
import Store from '../store/store'
export default {
  name: 'todo',
  data () {
    return {
      message: '',
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    getToDo () {
      return this.$store.getters.getToDo;
    },
    getDone () {
      return this.$store.getters.getDone;
    }
  },
  methods: {
    // init () {
    //   this.lists = JSON.parse(window.localStorage.getItem('todo-List')||'[]');
    // },
    toggleFinish (item) {
      item.isFinished = !item.isFinished
    },
    addItem () {
      if (this.message.length > 0) {
        let params = {
          content: '',
          id: 0,
          type: 1
        };
        // 去掉字符串两侧的空格，这是良好的编程习惯
        params.content = this.message.trim();
        this.$store.dispatch('addevent', params);
        this.message = '';
      } else {
        alert('请输入待办事情！');
      }
    },
    deleteItem (index) {
      this.lists.splice(index, 1);
    },
    moveToDone (id) {
      this.$store.dispatch('eventdone', id);
    },
    moveToDo (id) {
      this.$store.dispatch('eventtodo', id);
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
ol {
    list-style-type: none;
    padding: 0;
    margin: 0px;
}

li {
    padding: 0 20px;
    text-align: left;
    position: relative;
    height: 40px;
    line-height: 40px;
    border-left: 1px solid #eee;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;

}
li input {
    position: absolute;
    top: 10px;
    right: 10px;
}
a {
  color: #42b983;
}
.todo {
  width: 100%;
  margin: 0 auto;
  padding: 0 10px;
  box-sizing: border-box;
}

.todo-input {
  height: 40px;
  position: relative;
  margin: 30px 90px 16px 0px;
  line-height: 40px;
  text-align: left;
}
.input-content {
  width: 100%;
  height: 100%;
  padding: 10px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid rgba(220, 220, 220, 0.75);
  font-size: 16px;
}
.add-btn {
  width: 70px;
  height: 40px;
  position: absolute;
  top: 0px;
  right: -90px;
  border: 1px solid #00b0f0;
  font-size: 18px;
  background: #08aae5;
  color: #fff;
}
.content span {
  cursor: pointer;
}
.doneItem {
  text-decoration: line-through;
}
.todo-wrapper {
  height: 40px;
  padding: 0 20px;
  line-height: 40px;
  border-radius: 3px;
  border-bottom: 1px solid #eee;
  text-align: left;
  background: #00b0f0;
  color: #fff;
}

</style>
