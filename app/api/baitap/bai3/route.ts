import express, { Request, Response } from 'express';
const app = express();
const port = 3000;

app.use(express.json());

let users: { id: number, name: string }[] = [
    { id: 1, name: 'Người dùng 1' },
    { id: 2, name: 'Người dùng 2' },
    { id: 3, name: 'Người dùng 3' },
];

app.delete('/users/:id', (req: Request, res: Response) => {
    const userId = parseInt(req.params.id, 10);
    const userIndex = users.findIndex(user => user.id === userId);
    
    if (userIndex === -1) {
        return res.status(404).json({ message: 'Người dùng không tìm thấy' });
    }
    
    users.splice(userIndex, 1);
    res.json({ message: 'Xóa thông tin người dùng thành công' });
});

app.get('/users', (req: Request, res: Response) => {
    res.json(users);
});

app.get('/search', (req: Request, res: Response) => {
    const nameQuery = req.query.name as string;
    
    if (!nameQuery) {
        return res.status(400).json({ message: 'Vui lòng cung cấp tên để tìm kiếm' });
    }
    
    const matchedUsers = users.filter(user => user.name.toLowerCase().includes(nameQuery.toLowerCase()));
    
    res.json(matchedUsers);
});
