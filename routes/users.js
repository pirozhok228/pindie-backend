// Создаём роут для запросов категорий
const usersRouter = require('express').Router();

// Импортируем вспомогательные функции

const { findAllUsers, createUser, findUserById, updateUser, deleteUser, checkIsUserExists, checkEmptyNameAndEmail, checkEmptyNameAndEmailAndPassword, filterPassword, hashPassword } = require('../middlewares/users');
const { sendAllUsers, sendUserCreated, sendUserById, sendUserUpdated, sendUserDeleted, sendMe } = require('../controllers/users');

const { checkAuth } = require("../middlewares/auth.js");
// Обрабатываем GET-запрос с роутом '/categories'
usersRouter.get('/users', findAllUsers, filterPassword, sendAllUsers);
// routes/users.js
usersRouter.post(
    "/users",
    findAllUsers,
    checkIsUserExists,
    checkEmptyNameAndEmailAndPassword,
    checkAuth,
    hashPassword,
    createUser,
    sendUserCreated
);

usersRouter.get("/users/:id", findUserById, filterPassword, sendUserById)

usersRouter.put(
    "/users/:id",
    checkEmptyNameAndEmail,
    checkAuth,
    updateUser,
    sendUserUpdated
);

usersRouter.delete("/users/:id", checkAuth, deleteUser, sendUserDeleted)


usersRouter.get("/me", checkAuth, sendMe)

// Экспортируем роут для использования в приложении — app.js
module.exports = usersRouter;
