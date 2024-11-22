import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTwit, deleteTwit } from "../../context/twitsSlice";
import male from "../../assets/male.png"
import female from "../../assets/female.png"
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin7Line } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import Edit from "../edit/Edit"

const AddTwit = () => {
  const [showEditModal, setShowEditModal] = useState(null);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [gender, setGender] = useState("")
  const dispatch = useDispatch();
  const twits = useSelector((state)=> state.twits.twits)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && desc && gender) {
      dispatch(createTwit({ title,  desc, gender }));
      console.log(desc);
      setTitle("");
      setDesc("");
    }
  };
  const handleDelete = (twit) => {
    dispatch(deleteTwit(twit.id))
  }

  return (
    <section className="py-8">
      <div className="container__person">
        <div className="max-w-md mx-auto bg-[#131313]  rounded-lg shadow-md overflow-hidden">
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <h2 className="text-2xl font-bold text-center mb-6 text-white">Add New Post</h2>
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-white mb-1">
                Please Enter your Name (Nickname):
              </label>
              <input
                id="title"
                type="text"
                placeholder="Full Name"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="comment" className="block text-sm font-medium text-white mb-1">
                Your comment (Twits):
              </label>
              <textarea
                id="comment"
                placeholder="Twit"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                rows={4}
              ></textarea>
            </div>
            <div>
              <label htmlFor="gender" className="block text-sm font-medium text-white mb-1">
                Select gender:
              </label>
              <select
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="" disabled>Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out"
            >
              Add Twit
            </button>
          </form>
        </div>
        <div className="mt-8  w-full">
          <h3 className="text-xl font-bold text-white mb-4">Recent Twits</h3>
          <div className='grid grid-cols-2 gap-3'>
            {twits?.map(item => (
              <div key={item.id} className='flex p-5 border rounded-2xl gap-10'>
                <div>
                  <img src={item.gender === "male" ? male : female} alt="" className='bg-white rounded-full p-1'/>
                </div>
                <div className='flex flex-col gap-3 flex-1'>
                  <h3 className='font-bold'>{item.title}</h3>
                  <p className='flex-1 text-[14px]'>{item.desc}</p>
                  <div className='flex gap-11 justify-between'>
                    <FaRegHeart/>
                    <MdOutlineEdit onClick={() => setShowEditModal(item.id)}/>
                    <RiDeleteBin7Line onClick={()=> handleDelete(item)}/>
                  </div>
                  {showEditModal === item.id && (
                    <Edit
                      show={setShowEditModal}
                      item={item}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddTwit;
