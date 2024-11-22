import React, { useEffect, useState } from 'react'
import male from "../../assets/male.png"
import female from "../../assets/female.png"
import { FaRegHeart, FaHeart  } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import { fetchTwits } from '../../context/twitsSlice';
import { RiDeleteBin7Line } from "react-icons/ri";
import { deleteTwit } from '../../context/twitsSlice'
import { MdOutlineEdit } from "react-icons/md";
import Edit from "../edit/Edit"
import { toggleWishlist } from '../../context/wishlistSlice';

const Home = () => {
  const dispatch = useDispatch()
  const [showEditModal, setShowEditModal] = useState(null);
  const twits = useSelector((state)=> state.twits.twits)
  const wishlistItems = useSelector((state) => state.wishlist.items);
  console.log(twits);
  useEffect(()=>{
    dispatch(fetchTwits())
  }, [dispatch])
  const handleDelete = (twit) => {
    dispatch(deleteTwit(twit.id))
  }
  const handleWishlist = (twit) => {
    dispatch(toggleWishlist(twit))
  }

  const isInWishlist = (id) => wishlistItems.some(item => item.id === id)
  return (
    <section className='mt-14'>
      <div className="container__person">
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

                { isInWishlist(item.id) ? (
                    <FaHeart onClick={() => handleWishlist(item)} className="text-red-500 cursor-pointer" />
                  ) : (
                    <FaRegHeart onClick={() => handleWishlist(item)} className="cursor-pointer" />
                  )}
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
    </section>
  )
}

export default Home