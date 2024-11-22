import React from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import male from "../../assets/male.png"
import female from "../../assets/female.png"
import { useDispatch, useSelector } from 'react-redux'
import { toggleWishlist } from '../../context/wishlistSlice';

const Wishlist = () => {
    const dispatch = useDispatch()
    const wishlistItem = useSelector((state)=> state.wishlist.items)
    const handleWishlist = (twit) => {
        dispatch(toggleWishlist(twit))
    }

    const isInWishlist = (id) => wishlistItem.some(item => item.id === id)
  return (
    <section className='mt-14'>
        <div className="container__person">
            <div className='grid grid-cols-2 gap-3'>
            {wishlistItem?.map(item => (
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
                </div>
              </div>
            </div>

          ))}
            </div>
        </div>
    </section>
  )
}

export default Wishlist