<template>
  <ul>
    <li v-for="user in userList" :key="user" class="d-flex justify-content-between">
      {{ user }}
    </li>
  </ul>
</template>

<script>
export default {
  // props: ["userList"],
  // emits: ["delete-item"],
  inject: ["userList"],
};
</script>
