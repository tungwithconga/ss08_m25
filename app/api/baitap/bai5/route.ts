
import { NextApiRequest, NextApiResponse } from 'next';

type User = {
  id: number;
  user_name: string;
  age: number;
};

let users: User[] = []; 

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const newUser: User = req.body;

    users.push(newUser);

    res.status(200).json({ message: 'Thêm mới thông tin người dùng thành công' });
  } else if (req.method === 'GET') {
    res.status(200).json(users);
  } else {
    res.setHeader('Allow', ['POST', 'GET']);
    res.status(405).end(`Method ${req.method} không được cho phép`);
  }
}
