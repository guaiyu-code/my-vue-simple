<template>
    <div id="hello" class="demo">
        {{ testMsg }}
        <p>Using v-html directive: <span v-html="testHtml1"></span></p>
        <!-- <div v-bind:id="dynamicId"></div> -->
        <!-- <div v-bind:id="'list-' + id"></div> -->
        <!-- <div v-bind="{ id: someProp, 'other-attr': otherProp }"></div> -->
        <p v-if="seen">现在你看到我了</p>
        <button @click="inc">fuck inc</button>
        {{ countIncTest }}
        <div v-bind:class="[activeClass, errorClass]">fuck me</div>
        <ul id="array_render">
            <li v-for="(item, index) in items" v-bind:key="item.id">
                {{ item.message }}{{ index }} {{parentMessage}}
            </li>
        </ul>
        <h1><span>{{ myTest }}</span></h1>
         <ul id="array_render">
            <li v-for="(item, index) in myTest2" v-bind:key="item.id">
                {{ item.message }}{{ index }} {{parentMessage}}
            </li>
        </ul>

        <h1 v-if="awesome"> vue fuck you</h1>
        <h1 v-else>vue fuck me</h1>
        <ul v-for="numbers in sets"  v-bind:key="numbers.id">
            <li v-for="n in even(numbers)" v-bind:key="n.id"> {{ n }}</li>
        </ul>
    </div>

    <div id="todo-list">
        <form v-on:submit.prevent="addNewTodo">
            <label>add a todo</label>
            <input v-model="todos.newTodoText" id="new-todo" placeholder="fuck me"/>
            <button>add</button>
        </form>
        <ul>
            <li v-for="(todo, index) in todos.todos" :key="todo.id" :title="todo.title">
                {{ todo.id }} {{ todo.title }}
                <button @click="removeTodo(index)">remove</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'TestVue',
  props: {
    testMsg: String,
    testHtml1: String,
    countInc: Number,
    author: Object,
    activeClass: String,
    errorClass: String,
  },
  methods: {
      testHtml() {
        this.$props.testHtml1 = '<span style="color: red">This should be red.</span>'
      },
      inc() {
    
          this.countIncTest += 1
          this.myTest += 1
          this.awesome = true
          
      },
  },
  computed: {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
      
  },
  data() {
     return {
        parentMessage: 'Parent',
        countIncTest: 1,
        items: [{ message: 'Foo' }, { message: 'Bar' }]
     }
  }
}
</script>


<script setup>
import { reactive, ref } from '@vue/reactivity'
const myTest = ref(0)
const myTest2 = reactive([{ message: 'Foo' }, { message: 'Bar' }])
const awesome = ref(false)
const sets = reactive([
    [ 1, 2, 3, 4, 5 ], [6, 7, 8, 9, 10]
])

const even = (numbers) => {
    return numbers.filter(number => number % 2 === 0)
}

const todos = reactive({
    newTodoText: '',
    nextTodoId: 4,
    todos : [
        {
          id: 1,
          title: 'Do the dishes'
        },
        {
          id: 2,
          title: 'Take out the trash'
        },
        {
          id: 3,
          title: 'Mow the lawn'
        }
    ]
})

//新增
const addNewTodo = () => {
    todos.todos.push({
        id : todos.nextTodoId++,
        title : todos.newTodoText
    })
    todos.newTodoText = ''
}

//删除
const removeTodo = (index) => {
    todos.todos.splice(index, 1)
}
</script>