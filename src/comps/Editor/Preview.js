import { useSelector } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './Preview.css';

const Preview = () => {
  const content = useSelector((state) => state.editorContent.content);

  return (
    <ReactMarkdown
      className="markDownPreview"
      children={content}
      remarkPlugins={[remarkGfm]}
    />
  );
};

export default Preview;
