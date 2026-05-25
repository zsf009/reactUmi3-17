import { useState } from 'react';

const ListPage: React.FC = () => {
  const [list] = useState([
    { id: 1, name: '项目 A' },
    { id: 2, name: '项目 B' },
    { id: 3, name: '项目 C' },
  ]);

  return (
    <div>
      <h1>列表</h1>
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListPage;
