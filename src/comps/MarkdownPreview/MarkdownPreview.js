import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import 'github-markdown-css/github-markdown.css';
import './MarkdownPreview.css';

const MarkdownPreview = ({ content }) => {
  return (
    <ReactMarkdown
      className="markDown-preview markdown-body"
      children={content}
      remarkPlugins={[remarkGfm]}
    />
  );
};

export default MarkdownPreview;
