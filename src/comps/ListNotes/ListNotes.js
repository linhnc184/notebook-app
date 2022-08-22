import './ListNotes.css';

const ListNotes = () => {
  const notes = [
    {
      id: 'asdasd1123123',
      title: 'Tạo tùy chọn cho editor để tiện dụng hơn',
      content: 'Tạo tùy chọn để generate các thành phần markdown để dễ dùng hơn trên điện thoại',
      createdAt: '22/08/2022'
    },
    {
      id: 'asdasd11',
      title: 'Chức năng fullscreen',
      content: 'Tạo model hiển thị editor toàn màn hình',
      createdAt: '21/08/2022'
    },
    {
      id: 'asdasd',
      title: 'Tạo preview',
      content: `tạo preview shortcut, mở preview khi click 1 note, mỗi note sẽ mở lên 1 popup, ko giới hạn popup.
      sắp xếp popup`,
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
      content:
        'Lưu notes ở localstorage khi ko có kết nối được api, đồng bộ lại khi kết nối được api',
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
    }
  ];

  return (
    <div className="list-notes">
      {notes.map((note) => (
        <div className="note" key={note.id}>
          <div className="title">{note.title}</div>
          <div className="date">{note.createdAt}</div>
          <div className="content">{note.content || '(blank)'}</div>
        </div>
      ))}
    </div>
  );
};

export default ListNotes;
