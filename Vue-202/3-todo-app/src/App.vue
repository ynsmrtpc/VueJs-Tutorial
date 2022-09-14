<template>
  <div class="container">
    <h3 class="text-center">Todo App</h3>
    <hr class="my-2" />
    <div class="my-2">
      <AddSection :addNewTodo="addNewTodo" />
      <ListSection />
    </div>
  </div>
</template>

<script>
import AddSection from "./components/AddSection.vue";
import ListSection from "./components/ListSection.vue";

export default {
  components: {
    AddSection,
    ListSection,
  },
  data() {
    return {
      provideData: {
        todoList: [
          { id: 1, text: "Bootcamp #2" },
          { id: 2, text: "Bootcamp #2.1" },
          { id: 3, text: "Bootcamp #2.2" },
          { id: 4, text: "Bootcamp #2.3" },
          { id: 5, text: "Bootcamp #2.4" },
          { id: 6, text: "Bootcamp #2.5" },
        ],
      },
    };
  },
  provide() {
    return {
      provideData: this.provideData,
      deleteItem: this.deleteItem,
    };
  },
  methods: {
    deleteItem(todoItem) {
      this.provideData.todoList = this.provideData.todoList.filter((item) => item.id !== todoItem.id);
    },
    addNewTodo(todo) {
      this.provideData.todoList.push({
        id: new Date().getDate(),
        text: todo,
      });
    },
  },
};
</script>
