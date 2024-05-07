<template>
  <div :style="{ backgroundColor: backgroundColor, color: fontColor }">
    <button @click="toggleTheme">Toggle Theme</button>
    <Form @add-user="addUser" @add-admin="addAdmin" />

    <Table
      :users="users"
      :admins="admins"
      @delete-user="deleteUser"
      @delete-admin="deleteAdmin"
    />
  </div>
</template>

<script>
import Form from "./Form.vue";
import Table from "./Table.vue";

export default {
  components: {
    Form,
    Table,
  },
  data() {
    return {
      isLightMode: false,
      users: [],
      admins: [],
    };
  },
  computed: {
    backgroundColor() {
      return this.isLightMode ? "white" : "#242424";
    },
    fontColor() {
      return this.isLightMode ? "black" : "white";
    },
  },
  methods: {
    toggleTheme() {
      this.isLightMode = !this.isLightMode;
    },
    addUser(newUser) {
      this.users.push(newUser);
    },
    deleteUser(userToDelete) {
      this.users = this.users.filter((user) => user !== userToDelete);
    },
    addAdmin(newAdmin) {
      this.admins.push(newAdmin);
    },
    deleteAdmin(adminToDelete) {
      this.admins = this.admins.filter((admin) => admin !== adminToDelete);
    },
  },
};
</script>

<style scoped>
div {
  padding: 20px;
  transition: background-color 0.3s, color 0.3s;
}
</style>
