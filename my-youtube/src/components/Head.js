import React,{useState,useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API, YOUTUBE_VIDEOS_API } from '../utils/constants';
const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");

  const getSearchSuggestions = async () => {
    console.log("API call " + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json)
  }
  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestions(), 3000);

    return () => {
      clearTimeout(timer);
    } //make an API call after every key press, but if difference between 2 api calls is <200ms, decline the API call
  }, [searchQuery]);

  /*
  key:i 
  render the component, useEffect(), start timer, the timer is implanted in the DOM => make API call after 200 ms


  key:ip
  call the return method of useEffect on re-rednering of component, and the old timer is removed from the DOM, and a new timer is inserted into the DOM, which is called after 200 ms
*/
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
        <input type="text" className="w-1/2 border border-gray-400 p-2 rounded-l-full" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} ></input>
        <button className="px-3 border border-gray-400 p-2 rounded-r-full" > Search </button>
        <div className="fixed bg-white">
          <ul>
            <li> Iphone Pro </li>
            <li> Iphone Max </li>
          </ul>
        </div>
      </div>
      <div className="col-span-1">
        <img alt="user" src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png" className="h-8" />
        
      </div>
    </div >
  )
}

export default Head;