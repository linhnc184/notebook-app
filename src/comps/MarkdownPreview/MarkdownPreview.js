import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './MarkdownPreview.css';

const MarkdownPreview = ({ content }) => {
  return (
    <ReactMarkdown
      className="markDown-preview"
      children={content}
      remarkPlugins={[remarkGfm]}
    />
  );
};

export default MarkdownPreview;
