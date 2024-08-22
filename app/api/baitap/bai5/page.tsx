import { useEffect, useState } from 'react';
type User = {
  id: number;
  user_name: string;
  age: number;
};
export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('./api/baitap/bai5')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h1>Danh sách người dùng</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.user_name} - {user.age} tuổi</li>
        ))}
      </ul>
    </div>   
  );
}
