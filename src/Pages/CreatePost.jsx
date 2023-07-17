import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
};
const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

function CreatePost() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");

  function createNewPost(ev) {
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("file", files[0]);
    ev.preventDefault();

    fetch("http://localhost:3000/post", {
      method: "POST",
      body: data,
    });
  }

  return (
    <div className="bg- py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <form onSubmit={createNewPost}>
          <input
            type="title"
            placeholder={"Title"}
            value={title}
            onChange={(ev) => setTitle(ev.target.value)}
            className=" mt-2 w-full rounded border bg- px-3 py-2 border-black text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
          />
          <input
            type="summary"
            placeholder={"Summary"}
            value={summary}
            onChange={(ev) => setSummary(ev.target.value)}
            className=" mt-2 w-full rounded border bg-gray-50 px-3 py-2 border-black  text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
          />
          <input
            type="file"
            onChange={(ev) => setFiles(ev.target.files)}
            className=" mt-2 w-full rounded border bg-gray-50 border-black px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100"
          />
          <ReactQuill
            value={content}
            onChange={(newValue) => setContent(newValue)}
            module={modules}
            formats={formats}
            className=" rounded border  border-black mt-2 bg-gray-50  text-gray-800 outline-none ring-indigo-300 transition duration-100"
          />

          <button className=" px-6 py-2 font-medium mt-2 mr-5 tracking-wide text-black transition-colors duration-300 transform rounded-lg hover:bg-slate-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
            Post
          </button>

          <span className="text-sm text-gray-500">*Required</span>
        </form>
      </div>
    </div>
  );
}

export default CreatePost;
