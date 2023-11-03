import { useState } from 'react';
import './App.css'
import Assigments from './Components/Chapter4Assigments';
const App = () => {
  let cardData = [];
  let [videos, setvideos] = useState(cardData);
  let Playbtn = () => {
    console.log('play')
  }
  let Pausebtn = () => {
    console.log('pause');
  }
  return (
    <>
      <div>
        <button onClick={()=>{
          setvideos([...videos,{
            "id": videos.length+1,
            "title": `Image ${Math.floor(Math.random() * 100)}`,
            "views": `${(Math.random() * 10).toFixed(2)}K`,
            "Likes": `${(Math.random() * 10).toFixed(2)}K`,
            "verified": Math.random() >= 0.5
          }])
        }}>Add</button>
      </div>
      {videos.map((data) => (
        <ReactCard
          id={data.id}
          title={data.title}
          likes={data.Likes}
          views={data.views}
          verification={data.verified}
        >
          <Buttons play={Playbtn} pause={Pausebtn}></Buttons>
        </ReactCard>
      ))}

    </>
  )
}
const ReactCard = ({ id, title, views, verification, likes, children }) => {
  return (
    <>
      <div className="card">
        <img src={`https://picsum.photos/id/${id}/160/90`} alt="" />
        <div>
          <p>{views}</p>
          <p>{likes}</p>
        </div>
        <p>Verified:{verification ? " ✅" : "❌"}</p>
        <h3>{title}</h3>
        <div>{children}</div>
      </div>

    </>
  )
}
const Buttons = ({ children, play, pause }) => {
  let [btnStatus, setBtnStatus] = useState(false);
  let flag = false;
  let playPause = (e) => {
    e.stopPropagation();
    if (flag) {
      play();
    } else {
      play()
    }
    flag = !flag;
    setBtnStatus(!btnStatus)
  }
  return (
    <>
      <button onClick={playPause}>{btnStatus ? "play" : "pause"}</button>
    </>
  )
}
export default App;