"use client";
import "./page.css";
import { useState } from "react";
import parse from "html-react-parser";
import { getAxiosInstance } from "@/src/api";

export default function Home() {
  const [search, setSearch] = useState("");
  const [blog, setBlog] = useState("");
  const [loading, setLoading] = useState(false);

  const getBlogData = async (searchValue) => {
    // const api = await getAxiosInstance();
    // const data = await api.post("/openai/generate-blog", {
    //   content: searchValue,
    // });

    // console.log(data);

    const response = await fetch(
      "http://localhost:5000/api/openai/generate-blog",
      {
        method: "post",
        headers: { responseType: "stream", "content-type": "application/json" },
        body: JSON.stringify({ content: search }),
      }
    );

    const reader = response.body.getReader();
    const decoder = new TextDecoder();

    while (true) {
      const { value, done } = await reader.read();
      if (done) {
        setLoading(false);
        break;
      }

      const decodedChunk = decoder.decode(value, { stream: true });

      console.log(decodedChunk, "response");
      setBlog((prev) => (prev += decodedChunk ?? ""));
    }
  };

  const handleClick = () => {
    getBlogData(search);
  };
  return (
    <main>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Ask me anything"
      />
      <button onClick={handleClick}>Find</button>
      <div>{parse(blog, { replace: false })}</div>
    </main>
  );
}
