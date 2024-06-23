import React, { useState, useRef, useCallback } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../index.css'

// Add types for modules and formats
const modules = {
  toolbar: {
    container: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, 
       {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image', 'video'],
      ['clean'],
      ['code-block']
    ],
    handlers: {
      image: () => {}
    }
  }
};

const formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video',
  'code-block'
];

const TextEditor: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const quillRef = useRef<ReactQuill | null>(null);

  const imageHandler = useCallback(() => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files ? input.files[0] : null;
      if (file) {
        const formData = new FormData();
        formData.append('image', file);

        // Replace with your own image upload logic
        const response = await fetch('YOUR_IMAGE_UPLOAD_URL', {
          method: 'POST',
          body: formData,
        });
        const imageUrl = await response.text();

        const quillEditor = quillRef.current?.getEditor();
        if (quillEditor) {
          const range = quillEditor.getSelection();
          if (range) {
            quillEditor.insertEmbed(range.index, 'image', imageUrl);
          }
        }
      }
    };
  }, []);

  // Assign the imageHandler function to the handlers object
  modules.toolbar.handlers.image = imageHandler;

  return (
    <ReactQuill 
      ref={quillRef} 
      theme="snow" 
      value={value} 
      onChange={setValue} 
      modules={modules}
      formats={formats}
    />
  );
}

export default TextEditor;
