<template>
  <div class="modal" @click.self="closeModal">
    <div class="modal-content" :class="{ red: theme === 'red' }">
      '{{ theme }}'
      <slot></slot>
      <slot name="links"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: ["theme"],
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style>
.modal {
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal .modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 500px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
.modal .modal-content.red {
  background-color: #ff0000;
  border-color: #ff0000;
}
</style>
