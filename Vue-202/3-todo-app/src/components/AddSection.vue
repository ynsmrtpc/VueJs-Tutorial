<template>
  <label for="todoText"></label>
  <input v-model="todoText" @keydown.enter="addNewTodo(todoText)" type="text" id="todoText" placeholder="Bir todo ekleyin..." />
</template>

<script>
export default {
  props: ["addNewTodo"],
  data() {
    return {
      todoText: "",
    };
  },
  // methods: {
  //     addTodo(e) {
  //         this.$emit("add-todo", e.target.value)
  //         e.target.value = "";
  //     }
  // }
};
</script>
