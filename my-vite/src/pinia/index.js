import { createPinia } from "pinia"
import { ref } from "vue"

const store = createPinia()
const fuck1 = ref(11)

export {
    store,
    fuck1
}