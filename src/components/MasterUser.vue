<template>
    <div class="user-list">
        <div class="header">
            <h1>User List</h1>
            <button @click="logout" class="logout-button">Logout</button>
        </div>
        <ul class="user-items">
            <li v-for="user in users" :key="user.id" class="user-item">
                <img :src="user.avatar || placeholderImage" alt="User Avatar" class="user-avatar" />
                <div class="user-details">
                    <h3>{{ user.username }}</h3>
                    <p>Email: {{ user.email }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import 'animate.css';
import axios from 'axios';

    export default {
        data() {
            return {
                users: [],
                placeholderImage: require('@/assets/dummy-person-image.jpg')
            };
        },
        methods: {
            async logout() {
            try {
                this.$router.push('/login');
            } catch (error) {
                console.error(error);
            }
            },
        },
        mounted() {
            axios.get('/users')
                .then((response) => {
                    this.users = response.data;
                })
                .catch((error) => {
                    console.error(error);
                });
        },
    };
</script>

<style scoped>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logout-button {
        background-color: #f44336;
        color: #fff;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    .logout-button:hover {
        background-color: #d32f2f;
    }

    .user-list {
        text-align: center;
        margin-top: 30px;
    }

    .user-items {
        list-style-type: none;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .user-item {
        background-color: #f7f7f7;
        border: 1px solid #ddd;
        border-radius: 5px;
        margin: 10px;
        padding: 15px;
        width: 300px;
        text-align: left;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: transform 0.2s ease-in-out;
    }

    .user-item:hover {
        transform: scale(1.05);
    }

    .user-avatar {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        object-fit: cover;
        margin-right: 15px;
    }

    .user-details {
        flex-grow: 1;
    }

    h1 {
        font-size: 24px;
        margin-bottom: 20px;
    }

    h3 {
        font-size: 20px;
        margin-bottom: 5px;
    }

    p {
        font-size: 16px;
        color: #777;
    }
</style>
