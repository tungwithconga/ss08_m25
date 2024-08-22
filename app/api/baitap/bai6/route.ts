import { NextApiRequest, NextApiResponse } from 'next';

type User = {
  id: number;
  user_name: string;
  age: number;
};

let users: User[] = [
  { id: 1, user_name: 'Tung', age: 25 },
  { id: 2, user_name: 'Trg', age: 21 },
  { id: 3, user_name: 'tuna', age: 19 }
]; 

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'PUT') {
    const updatedUser: Partial<User> = req.body;
    
    let user = users.find(u => u.id === parseInt(id as string));

    if (user) {
      user = { ...user, ...updatedUser };
      users = users.map(u => u.id === parseInt(id as string) ? user! : u);

      res.status(200).json({ message: 'Cập nhật thông tin người dùng thành công' });
    } else {
      res.status(404).json({ message: 'Người dùng không tồn tại' });
    }
  } else if (req.method === 'GET') {
    const user = users.find(u => u.id === parseInt(id as string));
    
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'Người dùng không tồn tại' });
    }
  } else {
    res.setHeader('Allow', ['PUT', 'GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
