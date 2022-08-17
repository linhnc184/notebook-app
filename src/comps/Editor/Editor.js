import EditorJS from '@editorjs/editorjs';
import { useEffect, useRef } from 'react';
import { tools } from './editorjs-tools';
import './Editor.css';

const Editor = () => {
  const editor = useRef({ instance: null });

  useEffect(() => {
    // prevent duplicated editor
    if (!editor.instance) {
      editor.instance = new EditorJS({
        holder: 'contentEditor',
        placeholder: "don't miss any ideas...",
        tools
      });
    }
  }, []);

  return (
    <div>
      <div id="contentEditor"></div>
      <div id="contentPreview"></div>
    </div>
  );
};

export default Editor;
