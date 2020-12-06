import React from 'react';
//import SideNav from './SideNav';
import {BounceLoader, BeatLoader} from 'react-spinners';
import { useState, useEffect } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 



function App() {

  const [ spinner, setSpinner ] = useState(true);
  const date = new Date();
  const currDate = date.getDate();
  const currMonth = date.getMonth() + 1;
  console.log(currDate, currMonth);

  const notify = () => toast.success("Thank U ... for wishing Me.", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: 0.2,});

  useEffect(() => {
    setTimeout(() => (
      setSpinner(false)), 3000)
  }, []);

  const data = {
    'name': 'Debkanta Mondal',
    'designation': 'Student',
    'college': 'Cooch Behar Government Engg College',
    'department': 'Computer Science Engineering',
    'graduated_at': '2022',
    'skills': ['Python', 'PHP', 'Web Development', 'JS', 'CSS', 'Java'],
    'social_links': [
      {'Github': 'https://github.com/DebkantaMondal'},
      {'LinkedIn': 'https://linkedin.com/'},
      {'CV': ''},
    ],
    'profile_image': 'https://raw.githubusercontent.com/AppsWebSolutions/aws/master/assets/img/team/46219855.jpg',
    'email': 'debkantaroni01@gmail.com',
    'projects': [
      {'Online Smart School Management System': 'https://github.com/DebkantaMondal/Smart-Exam-Processing-System-Website'},
      {'Tinder Clone Desktop Application': 'https://github.com/DebkantaMondal/Tinder-Clone-Desktop-Application-'},
      {'Swastha Sebok Covid19 Tracker App': 'https://github.com/DebkantaMondal/Swastha-Sebok-Covid19'},
      
    ]
  }

  return (
    <>
    {spinner === false ? (
      <div>

      {currMonth===12 && currDate===6 ? (<div><p className='greetSpace'><b>🥳 🎈 Hi! Debkanta .... Happy Birth Day 🎂 🥳 🎉</b></p><button className='btn btn-success wishBtn' onClick={notify}>Wish Him</button>
        <ToastContainer position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover /><audio autoPlay='true' loop='true'><source src="https://defenceprep.com/wp-content/uploads/2020/11/Happy_Birthday_Song_tae5f4.mp3" type="audio/mp3" /></audio></div>) : (<div><span></span></div>)}
      
      {currMonth===12 && currDate===25 ? (<div><p className='greetSpace'><b>🎅 🎄 ❄️ Happy Christmas ⛄ 🎁 🎅</b></p><audio autoPlay='true'><source src="" type="audio/mp3" /></audio></div>) : (<div><span></span></div>)}

      <aside style={{backgroundImage: `url(${data.profile_image})`,
      background: 'cover',
      }}></aside>
    <main>
      <h1 class="mb-0">Hi 👋, I'm {data.name}</h1>
      <div class="mb-5">
        <p class="lead mb-3">Currently <b className='highlight'>{data.designation}</b> of <b className='highlight'>{data.department}</b> of <b className='highlight'>{data.college}</b></p>
        <p>
          I'm 🎯 on {
            data.skills.map(skill => (
              <strong>{skill} , </strong>
            ))
          } and
          cloud-native ecosystem with strong interest.
        </p>
        <br/>
        <b>Some of My Projects :</b>
        <ol>
        {data.projects.map((project) => (
          Object.keys(project).map(
            (key, index) => (
              <li><a href={project[key]} target="_blank">{key}</a> ✔️</li>
            )
          )
        ))}
        </ol>
        
      </div>
      <div><b>Connect Me with :</b></div>
      <ul>
        {data.social_links.map((link) => (
          Object.keys(link).map(
            (key, index) => (
              <li><a href={link[key]} target="_blank">👉 {key}</a></li>
            )
          )
        ))}
      </ul>

      <div>
        Want to reach out? <a href={"mailto:"+data.email}>Email me</a>.  ✉
      </div>
    </main>
    </div>
    ):(
      <>
      <div style={{ alignItems: 'center', justifyContent: 'center', marginTop: '20%'}}>
      <center>
      <BounceLoader color='#fff' />
      </center>
      </div>
      </>
    )}
    </>
    
  )
}

export default App;
