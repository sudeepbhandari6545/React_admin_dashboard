import React from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { themeColors } from '../data/dummy'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { BsCheck } from 'react-icons/bs'
import { useStateContext } from '../contexts/ContextProvider'

const ThemeSetting = () => {
  const {
    setColor,
    setMode,
    currentMode,
    currentColor,
    setThemeSettings,
  } = useStateContext()
  return (
    <div className="fixed right-0 top-0 bg-half-transparent w-screen nav-item">
      <div className="float-right h-screen dark:text-gray-200 bg-white dark:[#484852] w-400">
        <div className="flex justify-between p-4 pl-4 items-center">
          <p className="text-xl  font-semibold">Settings</p>
          <button
            type="button"
            onClick={() => setThemeSettings(false)}
            style={{
              color: 'grb(153,171,180)',
              borderRadius: '50%',
            }}
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className="p-4 ml-4 border-t-1 border-color flex-col">
          <p className="font-semibold text-lg">Theme Options</p>
          <div className="mt-4">
            <input
              type="radio"
              id="light"
              name="theme"
              value="Light"
              className=" cursor-pointer"
              onChange={setMode}
              checked={currentMode === 'Light'}
            />
            <label htmlFor="light" className="ml-2 text-md cursor-pointer">
              Light
            </label>
          </div>
          <div className="mt-4">
            <input
              type="radio"
              id="dark"
              name="theme"
              value="Dark"
              className=" cursor-pointer"
              onChange={setMode}
              checked={currentMode === 'Dark'}
            />
            <label htmlFor="dark" className="ml-2 text-md cursor-pointer">
              Dark
            </label>
          </div>
        </div>
        <div className="p-4 ml-4 border-t-1 border-color flex-col mt-3">
          <p className="font-semibold text-lg">Theme Options</p>
          <div className="flex gap-3 mt-2">
            {themeColors.map((item, index) => (
              <TooltipComponent
                key={index}
                content={item.name}
                position="TopCenter"
              >
                <div className="relative mt-2 cursor-pointer flex gap-5 items-center">
                  <button
                    type="button"
                    className="h-10 w-10 rounded-full cursor-pointer"
                    style={{ backgroundColor: item.color }}
                    onClick={() => setColor(item.color)}
                  >
                    <BsCheck
                      className={`ml-2 text-2xl text-white ${
                        item.color === currentColor ? 'block' : 'hidden'
                      }`}
                    />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThemeSetting
