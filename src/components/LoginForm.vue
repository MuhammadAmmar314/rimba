<template>
  <div class="login">
    <img src="@/assets/rimba.png" alt="Logo" class="logo" />
    <div class="login-container">
      <h1>Login</h1>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="username">Username:</label>
          <input
            type="text"
            id="username"
            v-model="username"
            placeholder="Masukkan username"
            required
          />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Masukkan password"
            required
          />
        </div>
        <button type="submit" class="login-button">Login</button>
      </form>
      <div v-if="error" class="error">{{ error }}</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: "",
      password: "",
      error: null,
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('users/login', {
          username: this.username,
          password: this.password
        });
        console.log(response);
        if (response.data.success) {
          this.$router.push("/user-list");
        } else {
          this.error = "Username atau password salah";
        }
      } catch (error) {
        console.error(error);
        this.error = "Terjadi kesalahan saat mencoba login";
      }
    },
  },
};
</script>

<style scoped>
.logo {
  display: block;
  margin: 0 auto;
  width: 100px; /* Sesuaikan ukuran logo sesuai kebutuhan */
  height: auto;
  margin-bottom: 20px;
}

.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
  flex-direction: column;
}

.login-container {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
  text-align: left;
}

label {
  font-weight: bold;
}

input {
  width: 94%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

.login-button {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login-button:hover {
  background-color: #0056b3;
}

.error {
  color: red;
  margin-top: 10px;
}
</style>
