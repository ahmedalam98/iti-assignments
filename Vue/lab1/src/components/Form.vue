<template>
  <div>
    <h2>User Admin Form</h2>
    <div class="inputsContainer">
      <input v-model="name" placeholder="Name" />
      <input v-model.number="age" type="number" placeholder="Age" />
      <select v-model="role">
        <option v-for="role in roles" :key="role" :value="role">
          {{ role }}
        </option>
      </select>
      <button @click="submitUser">Add</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      age: null,
      role: "",
      roles: ["User", "Admin"],
    };
  },
  methods: {
    submitUser() {
      if (this.name && this.age && this.role) {
        const newUser = { name: this.name, age: this.age, role: this.role };
        if (this.role === "Admin") {
          this.$emit("add-admin", newUser);
        } else {
          this.$emit("add-user", newUser);
        }

        this.name = "";
        this.age = null;
        this.role = "";
      } else {
        alert("Please fill in all fields.");
      }
    },
  },
};
</script>

<style scoped>
.inputsContainer {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input,
select,
option {
  padding: 5px;
}
</style>
