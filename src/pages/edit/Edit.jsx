import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTwit } from "../../context/twitsSlice";

const EditTwit = ({ show, item }) => {
  const [title, setTitle] = useState(item?.title);
  const [desc, setDesc] = useState(item?.desc);
  const [gender, setGender] = useState(item?.gender);
  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateTwit({ id: item?.id, title, desc, gender }));
    show(false)
  };

  return (
    <>
      <div
        className="w-full h-screen fixed bg-[#ffffff62] top-0 left-0"
        onClick={() => show(false)}
      ></div>
      <div className="fixed z-[70] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <form
          onSubmit={handleUpdate}
          className="w-[400px] rounded-[14px] p-5 bg-[#252525] z-40 h-auto flex-col flex items-center justify-center gap-5"
        >
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='indent-2 p-1 bg-slate-200 text-black rounded w-full'
          />
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className='w-full indent-2 p-1 bg-slate-200 text-black rounded'
          ></textarea>
          <select name="" id="" onChange={(e) => setGender(e.target.value)} className='p-3 bg-slate-200 text-black rounded'>
            <option value="" disabled>Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <button type="submit" className="bg-[#43a543c2] py-2 px-8 rounded-md">Update</button>
        </form>
      </div>
    </>
  );
};

export default EditTwit;
