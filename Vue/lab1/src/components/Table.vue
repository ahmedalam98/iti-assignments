<template>
  <div class="tableGrid">
    <div>
      <h3>Users</h3>
      <ul>
        <li v-for="user in users" :key="user.name">
          {{ user.name }}, ({{ user.age }})
          <button @click="emitDeleteUser(user)">Delete</button>
        </li>
      </ul>
    </div>

    <div>
      <h3>Admins</h3>
      <ul>
        <li v-for="admin in admins" :key="admin.name">
          {{ admin.name }}, ({{ admin.age }})
          <button @click="emitDeleteAdmin(admin)">Delete</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
      required: true,
    },
    admins: {
      type: Array,
      required: true,
    },
  },
  methods: {
    emitDeleteUser(user) {
      this.$emit("delete-user", user);
    },
    emitDeleteAdmin(admin) {
      this.$emit("delete-admin", admin);
    },
  },
};
</script>

<style scoped>
.tableGrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
}

button {
  padding: 5px 10px;
  background-color: #ff0000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 2rem;
}

button:hover {
  background-color: #cc0000;
}
</style>
