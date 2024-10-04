import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Login from "./Login";
import axios from "axios";

const Notice = (props) => {
  const location = useLocation();
  const [isAdmin, SetisAdmin] = useState(true);
  const [allNotice, setAllNotice] = useState([]);
  const [deletePage, setdeletePage] = useState(false);
  const [deletedId, setdeleteId] = useState(null);

  useEffect(() => {
    SetisAdmin(location.state.isVerified);

    if (isAdmin) {
      axios
        .get("https://research-server-k9vc.onrender.com/notice")
        .then((res) => {
          setAllNotice(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const handleDelete = () => {
    axios
      .delete(`https://research-server-k9vc.onrender.com/notice/${deletedId}`)
      .then(() => {
        console.log("Deleted Successfully");
        setdeletePage(false).catch((err) => console.log(err));
      });

    window.location.reload();
  };

  return (
    <div className="relative">
      {isAdmin ? (
        <div className="min-h-screen py-10 flex flex-col gap-10 justify-center items-center">
          <h1 className="text-2xl font-bold">Notice Board Content</h1>
          <div className="flex flex-col gap-10 w-[75%]">
            {allNotice.map((note, index) => {
              return (
                <div
                  key={index}
                  className="border-2 border-slate-200 p-10 rounded-3xl shadow-2xl shadow-black/50"
                >
                  <h1>
                    <span className="font-bold">Title :</span> {note.title}
                  </h1>
                  <h1>
                    <span className="font-bold">Description :</span>
                    {note.description}
                  </h1>
                  <h1>
                    <span className="font-bold">Link :</span> {note.link}
                  </h1>

                  <div className="flex gap-4">
                    <Link to={`/cms/notice/edit/${note._id}`}>
                      <button className="bg-blue-500 text-white px-5 py-1 rounded-full">
                        Edit
                      </button>
                    </Link>
                    <button
                      className="bg-slate-300 px-5 py-1 rounded-full"
                      onClick={() => {
                        setdeletePage(true);
                        setdeleteId(note._id);
                        console.log("click");
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <Link to="/cms/notice/add">
            <button className="bg-blue-500 text-white text-xl px-5 py-1 rounded-full">
              Add New Notice
            </button>
          </Link>
        </div>
      ) : (
        <Login />
      )}
      {deletePage ? (
        <div className="absolute top-0 z-10 w-full h-screen bg-black/50 flex justify-center items-center">
          <div className="bg-white p-10 rounded-2xl flex flex-col gap-3">
            <h1 className="text-xl">Do you want to Delete ?</h1>
            <div className="flex justify-center gap-10">
              <button
                className="bg-red-400 px-4 py-1 rounded-2xl"
                onClick={() => {
                  handleDelete();
                  console.log("delete");
                }}
              >
                Yes
              </button>
              <button
                className="bg-blue-400 px-4 py-1 rounded-2xl"
                onClick={() => {
                  setdeletePage(false);
                  console.log("click");
                }}
              >
                No
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Notice;
