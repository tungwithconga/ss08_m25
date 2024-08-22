import { useEffect, useState } from 'react';

type User = {
  id: number;
  user_name: string;
  age: number;
};

export default function UserDetail({ userId }: { userId: number }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetch(`/api/baitap/bai6/${userId}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [userId]);

  if (!user) {
    return <div>...</div>;
  }

  return (
    <div>
      <h1>Thông tin người dùng</h1>
      <p>Tên: {user.user_name}</p>
      <p>Tuổi: {user.age}</p>
    </div>
  );
}
