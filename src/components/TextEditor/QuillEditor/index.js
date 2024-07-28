import React from "react";
import ReactQuill from "react-quill";

const QuillEditor = ({ editorRef, ...props }) => {
  return <ReactQuill ref={editorRef} {...props} />;
};

export default QuillEditor;
