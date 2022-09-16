<template>
  <Modal>
    <template #title>
      <h3>Slot ile Gelen Title Bilgisi</h3>
    </template>
    <template v-slot:content>
      <p class="text-green">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
        cupiditate?
      </p>
    </template>

    <template #default> Bu default olarak gösterilecek! </template>
  </Modal>
</template>

<script>
import Modal from "../src/components/Modal.vue";
export default {
  components: {
    Modal,
  },
};
</script>
