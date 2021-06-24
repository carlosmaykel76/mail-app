import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

const TinyMceEditor = () => {

    return (
    <>
      <Editor
        apiKey="w7ho35yi26g1yjpf5m9qiythq116i9udmjv0qtf2agfhkx53"
        initialValue=""
        init={{
          height: 300,
          menubar: false,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount'
          ],
          toolbar: 'undo redo | formatselect | ' +
          'bold italic backcolor | alignleft aligncenter ' +
          'alignright alignjustify | bullist numlist outdent indent | ' +
          'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
    </>
  );
}

export default TinyMceEditor
