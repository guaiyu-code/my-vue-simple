<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
    </div>

    <div id="event-method">
        <button @click="greetHanld($event)">greet</button>
        <button @click="warn('test', $event)">warn</button>
        <button @click.ctrl="ctrlHanld($event)">ctrl</button>
    </div>      

    <input v-model="inputVaule" placeholder="fuck me"/>
    {{ inputVaule }}

    <!-- 多行文本 -->
    <textarea v-model="inputVaule" placeholder="fuck you"/>
    
    <!-- 单个复选框，绑定到布尔值： -->
    <input type="checkbox" id="checkbox" v-model="checked" />
    <span>{{ checked }}</span>

    <!-- 多个复选框，绑定到同一个列表上： -->
    <div id="v-model-checkbox">
        <input type="checkbox" v-model="checkList" value="jack" />
        <label for="jack">jack</label>
        <input type="checkbox" v-model="checkList" value="john" />
        <label for="jack">john</label>
        <input type="checkbox" v-model="checkList" value="mike" />
        <label for="jack">mike</label>
    </div>
    <span>Checked names: {{ checkList }}</span>

    <!-- 单选框 -->
    <div id="v-radio">
        <input type="radio" id="one" v-model="picked" value="one"/>
        <label>one</label>
        <input type="radio" id="two" v-model="picked" value="two"/>
        <label>two</label>
        <span>picked: {{ picked }}</span>
    </div>
    <!-- 选择框 (Select) 单选-->
    <div id="v-model-select">
        <select v-model="selected">
            <option disabled value="">please select one</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>
        <span>Selected: {{ selected }}</span>
        <!-- 多选 -->
        <select v-model="selectedList" multiple>
             <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>
        <span>SelectedList: {{ selectedList }}</span>
    </div>

    
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  name: 'NewDay0421',
  props: {
    msg: String
  },
  
}
</script>

<script setup>
const greetHanld = (event) => {
    if (event) {
        alert(event.target.tagName)
    }
}

const warn = (message, event) => {
    if (event) {
        alert(event.target.tagName)
        event.preventDefault()
    }
    alert(message)
}

const ctrlHanld = (event) => {
    if (event) {
        alert(event.target.tagName)
    }
}
//你可以用 v-model 指令在表单 <input>、<textarea> 及 <select> 
// 元素上创建双向数据绑定。它会根据控件类型自动选取正确的方法来更新元素。
// 尽管有些神奇，但 v-model 本质上不过是语法糖。它负责监听用户的输入事件
// 以更新数据，并对一些极端场景进行一些特殊处理。
const inputVaule = ref('')
const checked = ref(false)
const checkList = ref([])
const picked = ref('')
const selected = ref('')
const selectedList = ref('')

</script>