// Создаём роут для запросов категорий
const usersRouter = require('express').Router();

// Импортируем вспомогательные функции

const { findAllUsers, createUser, findUserById, updateUser, deleteUser, checkIsUserExists, checkEmptyNameAndEmail, checkEmptyNameAndEmailAndPassword, filterPassword } = require('../middlewares/users');
const { sendAllUsers, sendUserCreated, sendUserById, sendUserUpdated, sendUserDeleted } = require('../controllers/users');

// Обрабатываем GET-запрос с роутом '/categories'
usersRouter.get('/users', findAllUsers, filterPassword, sendAllUsers);
// routes/users.js
usersRouter.post(
    "/users",
    findAllUsers,
    checkIsUserExists,
    checkEmptyNameAndEmailAndPassword,
    createUser,
    sendUserCreated
);

usersRouter.get("/users/:id", findUserById, filterPassword, sendUserById)

usersRouter.put(
    "/users/:id",
    checkEmptyNameAndEmail,
    updateUser,
    sendUserUpdated
);

usersRouter.delete("/users/:id", deleteUser, sendUserDeleted)

// Экспортируем роут для использования в приложении — app.js
module.exports = usersRouter;
