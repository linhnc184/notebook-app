import Attaches from '@editorjs/attaches';
import Checklist from '@editorjs/checklist';
import Embed from '@editorjs/embed';
import Header from '@editorjs/header';
import Image from '@editorjs/image';
import InlineCode from '@editorjs/inline-code';
import Marker from '@editorjs/marker';
import NestedList from '@editorjs/nested-list';
import Quote from '@editorjs/quote';
import Raw from '@editorjs/raw';
import SimpleImage from '@editorjs/simple-image';
import Underline from '@editorjs/underline';

const tools = {
  attaches: {
    class: Attaches,
    config: {
      endpoint: 'http://localhost:8008/uploadFile' // TODO
    }
  },
  header: {
    class: Header,
    shortcut: 'OPTION+SHIFT+H'
  },
  list: {
    class: NestedList,
    inlineToolbar: true,
    shortcut: 'OPTION+SHIFT+L'
  },
  checklist: {
    class: Checklist,
    inlineToolbar: true
  },
  marker: {
    class: Marker,
    shortcut: 'OPTION+SHIFT+M'
  },
  inlineCode: {
    class: InlineCode,
    shortcut: 'OPTION+SHIFT+M'
  },
  quote: {
    class: Quote,
    inlineToolbar: true,
    shortcut: 'CMD+SHIFT+O',
    config: {
      quotePlaceholder: 'Enter a quote',
      captionPlaceholder: "Quote's author"
    }
  },
  image: {
    class: Image,
    config: {
      endpoints: {
        byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
        byUrl: 'http://localhost:8008/fetchUrl' // Your endpoint that provides uploading by Url
      }
    }
  },
  simpleImage: { // TODO: not working now, I want to use both of Image and SimpleImage
    class: SimpleImage,
    inlineToolbar: true,
    config: {
      placeholder: 'Paste image URL'
    }
  },
  embed: Embed,
  underline: Underline,
  raw: Raw
};

export { tools };
