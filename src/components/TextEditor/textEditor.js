"use client";
import React, { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Icon from "../Icon";
import Button from "../Button";
import { motion } from "framer-motion";

const TextEditor = () => {
  const [value, setValue] = useState(
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque quos quam nulla accusamus ducimus voluptate facilis atque, tempore sint nemo tempora omnis beatae aut, dolore consequatur, nihil quo! Iure, nesciunt!"
  );
  const [pos, setPos] = useState(false);
  const selectTextRef = useRef(null);
  useEffect(() => {

    console.log(selectTextRef);
    if (selectTextRef?.current?.editingArea) {
      selectTextRef?.current?.editingArea.addEventListener("mouseup", () => {
        const selection = window.getSelection();
        if (!selection.rangeCount) {
          return;
        }

        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();
        const selectedText = selection.toString();
        console.log(range);

        if (selectedText) {
          setPos({ x: rect.left, y: rect.top, w: rect.width });
        }


        if (selection && selection.rangeCount > 0 && !selection.isCollapsed) {
                // Text is selected, ensure toggleArea is visible
                console.log('no hide');
            } else {
                // No text selected, hide toggleArea
                console.log('hide');
            }
      });
    }

    // return () => {

    // };
  }, []);

  console.log(pos);


  const clickBold = () => {
    const quill = selectTextRef.current.getEditor();
    const range = quill.getSelection();

    if (range) {
      const currentBold = quill.getFormat(range).bold;
      quill.format('bold', !currentBold);
    }
  }

  return (
    <div className="w-full relative">
      <motion.div
        className="fixed bg-primary h-[50px] flex items-center text-white space-x-md px-sm rounded-full z-10"
        animate={{ top: `${pos.y - 70}px`, left: pos.x }}
      >
        <button className="w-[30px] h-[30px] flex justify-center items-center ml-lg">
          <Icon icon="link" size={20} color="#fff" />
        </button>
        <button onClick={clickBold} className="w-[30px] h-[30px] flex justify-center items-center">
          <Icon icon="bold" size={20} color="#fff" />
        </button>
        <button className="w-[30px] h-[30px] flex justify-center items-center">
          <Icon icon="italic" size={20} color="#fff" />
        </button>
        <Button
          type="secondary"
          classNames="!text-white !border-white"
          title={"Expand content"}
        />
      </motion.div>
      <ReactQuill
        ref={selectTextRef}
        theme="snow"
        value={value}
        onChange={setValue}
        toolbar={false}
      />
    </div>
  );
};

export default TextEditor;
