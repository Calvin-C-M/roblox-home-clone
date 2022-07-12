import './css/app.scss'

import { AiOutlineArrowRight } from "react-icons/ai"

import Navbar from "./components/Navbar"
import Friend from "./components/Friend"

import ProfilePicture from './img/profile-picture.png'

function App() {
  const friendList=[
    { username: "test1", picture: ProfilePicture, playing: true, game: "idk" },
    { username: "test2", picture: ProfilePicture, playing: false, game: undefined },
    { username: "test3", picture: ProfilePicture, playing: false, game: undefined }
  ]

  const profile={
    username:"Username",
    robux: 0,
    picture: {
        src: ProfilePicture,
    },
  }

  return (
    <div className="App">
      <header>
        <Navbar 
          profile={profile}
        />
      </header>
      <main>
        <h1>Home</h1>
        <section id="friends" className='content'>
          <div className='head'>
            <h2>Friends ({ friendList.length })</h2>
            <div className="see-all">
              <a href="#">See All</a>
              <AiOutlineArrowRight />
            </div>
          </div>
          <div className='lists'>
            { friendList.map(user => <Friend user={user} />) }
          </div>
        </section>
        <section id="continue" className='content'>

        </section>
        <section id="friend-activity" className='content'>

        </section>
      </main>
    </div>
  );
}

export default App;
