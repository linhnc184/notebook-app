import Note from '../Note';
import './ListNotes.css';

const ListNotes = () => {
  const notes = [
    {
      id: 'asdasd',
      title: 'Tạo preview',
      content: 'tạo preview shortcut, mở preview khi click 1 note',
      createdAt: '18/08/2022'
    },
    {
      id: 'a123sd123',
      title: 'Tạo notebook extension cho chrome',
      content: 'đóng gói extension cho chrome',
      createdAt: '18/08/2022'
    },
    {
      id: 'a123sd123-12312',
      title: 'Hoạt động ngay cả khi ko có api',
      content: 'Lưu notes ở localstorage khi ko có kết nối được api, đồng bộ lại khi kết nối được api',
      createdAt: '18/08/2022'
    },
    {
      id: 'a123sd123-12345',
      title: 'Kết nối api',
      content: '',
      createdAt: '18/08/2022'
    },
    {
      id: 'a123sd123-12341235',
      title: 'Save khi nhấn tổ hợp phím CMD+S hoặc Ctrl+S',
      content: '',
      createdAt: '18/08/2022'
    },
  ];

  return (
    <div className="list-notes">
      <h3>The latest notes</h3>
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  );
};

export default ListNotes;
