<template>
  <div class="container">
    <h3>Alışveriş Listesi</h3>
    <hr />
    <div class="my-2">
      <input type="text" placeholder="Ne alacaksın?" @keydown.enter="onSave" />
    </div>
    <ul v-if="itemList.length > 0">
      <li
        v-for="item in itemList"
        :key="item.id"
        class="d-flex justify-content-between align-items-center"
      >
        <span>{{ item.title }}</span>
        <button @click="onDelete(item)" class="sm red">Sil</button>
      </li>
    </ul>
    <div v-else class="bg-blue text-white">Herhangi bir ürün yoktur</div>
    <small class="mt-2 text-blue d-flex justify-content-end align-items-center"
      >{{ itemCount }} adet alınacak ürün vardır.</small
    >
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      itemList: [],
    };
  },
  mounted() {
    axios.get("http://localhost:3000/items").then((items_response) => {
      console.log(items_response);
      this.itemList = items_response.data || [];
    });
  },
  methods: {
    onSave(e) {
      axios
        .post("http://localhost:3000/items", {
          title: e.target.value,
          created_at: new Date(),
          completed: false,
        })
        .then((save_response) => {
          console.log(save_response);
          this.itemList.push(save_response.data);
          e.target.value = "";
          e.target.focus();
        });
    },
    onDelete(item) {
      axios
        .delete(`http://localhost:3000/items/${item.id}`)
        .then((delete_response) => {
          console.log(delete_response);
          this.itemList = this.itemList.filter((i) => item !== i);
        });
    },
  },
  computed: {
    itemCount() {
      return this.itemList.length || 0;
    },
  },
};
</script>
