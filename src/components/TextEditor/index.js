"use client";
import React, { useEffect, useRef, useState } from "react";
import "react-quill/dist/quill.snow.css";
import Icon from "../ui/Icon";
import Button from "../ui/Button";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const QuillEditor = dynamic(() => import("./QuillEditor"), { ssr: false });

const TextEditor = ({ value = "", onChange = () => {} }) => {
  const [pos, setPos] = useState({});
  const editorRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleMouseUp = () => {
        const selection = window.getSelection();
        if (!selection.rangeCount) {
          return;
        }

        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();
        const selectedText = selection.toString();

        if (selectedText) {
          setPos({ x: rect.left, y: rect.top, w: rect.width });
        }

        if (selection && selection.rangeCount > 0 && !selection.isCollapsed) {
          // Text is selected, ensure toggleArea is visible
          console.log("no hide");
        } else {
          setPos({});
          console.log("hide");
        }
      };

      if (editorRef?.current?.editingArea) {
        editorRef.current.editingArea.addEventListener(
          "mouseup",
          handleMouseUp
        );
      }

      return () => {
        if (editorRef?.current?.editingArea) {
          editorRef.current.editingArea.removeEventListener(
            "mouseup",
            handleMouseUp
          );
        }
      };
    }
  }, [value]);

  const clickBold = () => {
    const quill = editorRef.current.getEditor();
    const range = quill.getSelection();

    if (range) {
      const currentBold = quill.getFormat(range).bold;
      quill.format("bold", !currentBold);
    }
  };

  return (
    <div className="w-full relative">
      {Object.keys(pos).length !== 0 && (
        <motion.div
          className="fixed bg-primary h-[50px] flex items-center text-white space-x-md px-sm rounded-full z-10"
          animate={{ top: `${pos.y - 70}px`, left: pos.x }}
        >
          <button className="w-[30px] h-[30px] flex justify-center items-center ml-lg">
            <Icon icon="link" size={20} color="#fff" />
          </button>
          <button
            onClick={clickBold}
            className="w-[30px] h-[30px] flex justify-center items-center"
          >
            <Icon icon="bold" size={20} color="#fff" />
          </button>
          <button className="w-[30px] h-[30px] flex justify-center items-center">
            <Icon icon="italic" size={20} color="#fff" />
          </button>
          <Button
            type="secondary"
            className="!text-white !border-white"
            title={"Expand content"}
          />
        </motion.div>
      )}
      <QuillEditor
        editorRef={editorRef}
        theme="snow"
        value={value}
        onChange={onChange}
        toolbar={false}
      />
    </div>
  );
};

export default TextEditor;
