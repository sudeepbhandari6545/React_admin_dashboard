/* eslint-disable react-hooks/exhaustive-deps */
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import React, { useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { useStateContext } from '../contexts/ContextProvider'
import { FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
import Cart from './Cart'
import Chats from './Chats'
import Notification from './Notification'
import UserProfile from './UserProfile'

//custome function for button
const NavButton = ({ title, icon, color, customFunc, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      style={{ color }}
      onClick={customFunc}
      className=" relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
)

const Navbar = () => {
  const {
    setActiveMenu,
    isClicked,
    handleClick,
    screenSize,
    setScreenSize,
    currentColor,
  } = useStateContext()

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth)
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.addEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false)
    } else {
      setActiveMenu(true)
    }
  }, [screenSize])

  return (
    <>
      <div className="flex justify-between p-2 md:mx-6 relative">
        <NavButton
          title="Menu"
          icon={<AiOutlineMenu />}
          color={currentColor}
          customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        />

        <div className="flex">
          <NavButton
            title="Cart"
            icon={<FiShoppingCart />}
            color={currentColor}
            customFunc={() => handleClick('cart')}
          />
          <NavButton
            title="Chat"
            icon={<BsChatLeft />}
            dotColor="#03c9d7"
            color={currentColor}
            customFunc={() => handleClick('chat')}
          />
          <NavButton
            title="Notification"
            icon={<RiNotification3Line />}
            dotColor="#03c9d7"
            color={currentColor}
            customFunc={() => handleClick('notification')}
          />
          <TooltipComponent content="Profile" position="BottomCenter">
            <div
              className="flex items-center gap-2 cursor-pointer p-1 rounded-lg hover:bg-light-gray"
              onClick={() => handleClick('profile')}
            >
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/002/275/847/small/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
                alt=""
                className="h-8 w-8 rounded-full"
              />
              <p>
                <span className="text-14 text-gray-400">Hi, </span>
                <span className="text-14 text-gray-400 font-bold">Sudeep</span>
              </p>
              <MdKeyboardArrowDown className="text-14 text-gray-400" />
            </div>
          </TooltipComponent>
          {isClicked.cart && <Cart />}
          {isClicked.chat && <Chats />}
          {isClicked.notification && <Notification />}
          {isClicked.profile && <UserProfile />}
        </div>
      </div>
    </>
  )
}

export default Navbar
