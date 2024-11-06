import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateNotice = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (title == "" || description == "") {
      alert("Enter the required fields");
    } else {
      const newNotice = {
        title: title,
        description: description,
        link: link,
      };

      axios
        .post("https://research-server-production.up.railway.app/notice/add", newNotice)
        .then(() => {
          console.log("Added successfully");
          navigate("/cms");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-[#F7F7F7]">
      <div className="text-xl w-[50%] flex flex-col gap-5 border-2 p-4 rounded-2xl border-slate-200 bg-white">
        <h1 className="font-bold text-center">Create a New Notice</h1>
        <table className="w-full border-separate border-spacing-4">
          <tr>
            <td className="w-[25%]">
              <label>Title : </label>
            </td>
            <td className="w-full">
              <input
                type="text"
                className="bg-slate-200 rounded-lg w-full"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td className="w-[25%]">
              <label>Description : </label>
            </td>
            <td className="w-full">
              <textarea
                type="text"
                rows={5}
                className="bg-slate-200 rounded-lg w-full"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td className="w-[25%]">
              <label>Link : </label>
            </td>
            <td className="w-full">
              <input
                type="text"
                className="bg-slate-200 rounded-lg w-full"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </td>
          </tr>
        </table>
        <div className="flex justify-center">
          <button
            className="bg-blue-400 text-white px-5 py-2 rounded-3xl"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateNotice;
