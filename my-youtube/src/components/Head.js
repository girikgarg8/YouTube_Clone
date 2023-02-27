import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img onClick={() => toggleMenuHandler()} alt="menu" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAV1BMVEX///8AAADc3NyUlJT7+/s6Ojru7u5LS0uenp4lJSX39/fh4eFvb28ICAhTU1Otra3o6OjCwsK8vLw1NTWEhITR0dHKyspqampERESNjY0WFhanp6ciIiLxq9OpAAABpElE QVR4nO3dWVLjUAwF0NdxYzskJIxmCPtfJxgSSPPVP0JV8jkruKrYz5YrKrUGAAAAAAAAAPDL+mnsahmn/qy+zfZPRdvNqcBDdpQwh88Cu+wcgbq5wJvsFKFu3itcZ4cItW7tNjtDsNtW8xj9ti1+kc6XaXaCcO0qO0Gwq3aXHSHYXbvPjhDsvj1kRwj20NouO0Oo3dxYZIcI9dFeTNkpAk2fzcWq6lN/vfpqgfdDdpgAw/6fzxjXq2quAz72AAAAAAAAAAAAAP/vby0/quv3j8NFLcPj/myItOoEYnes7/IpO0mYp8uP+6/iP6BPhvl+fM5OEer5/ZDJzhCsb2N2hGBj8aGgeSzoJTtCsJcFzJDW/w3r34f1z9L6z8P67zQLeC+t31ssoD9cQo+/gO80AAAAAAAAAAAAwO+qvt+i+o6S1Wt2mCCvxz0z5XcF1d/3VHssaNcWsHet/u68+vsP6++wzE4QbgG7ZOvvA66/07n4ZbpuS9itXnb6cHacQDxk5whzODWIm5oH6nZz1uT309jVMk4/R0gBAAAAAAAAAMK9AX/vTEiQhKHCAAAAAElFTkSuQmCC" className="h-8 cursor-pointer"></img>

        <a href="/">
          <img alt="youtube" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/768px-YouTube_Logo_2017.svg.png?20220605194644" className="h-7 mx-6 mb-[2px]" />
        </a>
      </div>
      <div className="col-span-10">
        <input type="text" className="w-1/2 border border-gray-400 p-2 rounded-l-full"></input>
        </div>
        </div>
      )
  }

export default Head;