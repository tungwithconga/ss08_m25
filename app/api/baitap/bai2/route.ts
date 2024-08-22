import express, { Request, Response } from 'express';

const app = express();
const PORT = 3000;

interface User {
    id: number;
    user_name: string;
    age: number;
}

const users: User[] = [
    { id: 1, user_name: "toc man", age: 20 },
    { id: 2, user_name: "truong an", age: 25 },
    { id: 3, user_name: "tung top 1", age: 30 }
];

app.get('/api/users', (req: Request, res: Response) => {
    const userId = parseInt(req.query.id as string); 
    const user = users.find(u => u.id === userId);

    if (user) {
        res.json(user);
    } else {
        res.status(404).send(`Không tìm thấy người dùng có id = ${userId}`);
    }
});
