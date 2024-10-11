import express from "express";
import http from "node:http";
import fs from "node:fs";

const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    ];

const app = express();
const port = 3000;

// Middleware для логирования
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next(); // Передаем управление следующему middleware или маршруту
});

app.listen(port, () => {
    console.log(`Сервер слушает порт ${port}`);
});

//================= // Маршруты // =======

// Статический маршрут для получения списка пользователей
app.get("/users", (req, res) => {
    res.json(users);
    res.send(`${users}`);
});
//http://localhost:3000/users
//[{"id":1,"name":"John Doe"},{"id":2,"name":"Jane Smith"}]

// Маршрут с параметром для получения пользователя по ID
app.get("/users/:id", (req, res) => {
    const userId = req.params.id;
    const user = { id: userId, name: `User ${userId}` };
    res.json(user);
    res.send(`${user}`);

    fs.writeFile('users.json', user, (err) => {
        if (err) throw err;
        console.log('Файл записан успешно');
    });
});
//http://localhost:3000/users/userId
//{"id":"userId","name":"User userId"}

app.get("/", (req, res) => {
    res.send("Сервер запущен!");
});

//=========== // controller // ===========
let users2 = null;
http.get('http://localhost:3000/users', (res) => {
    res.on('data', (chunk) => {
        console.log(`Полученные данные: ${chunk}`);
        users2 = chunk.toString();
    });

    res.on('end', () => {
        console.log(`Ответ полностью получен`);

        fs.writeFile('users.json', users2, (err) => {
            if (err) throw err;
            console.log('Файл записан успешно');
        });
    });
}).on('error', (err) => {
    console.error('Ошибка:', err);
});