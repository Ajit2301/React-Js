import React from 'react';
import './App.css';
import Header from './Components/Header'
import  Home  from './Components/Home'
import About from './Components/About'
import Project from './Components/Project'
import Contact from './Components/Contact'
import Skill from "./Components/Skill"
import "./Home.css"
 import "./About.css"
import "./Skill.css"
import  "./Project.css"
import "./Contact.css"

function App() {
  return (
    <div className="App">
      <Header/>
      <Home />
      <About />
      <Skill/>
      <Project />
      <Contact />
    </div>
  );
}

export default App;

// import React, { useState } from 'react';
// import './App.css';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const smoothScroll = (targetId) => {
//     setIsOpen(false);

//     const targetElement = document.getElementById(targetId);
//     targetElement.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <div className={`navbar ${isOpen ? 'navbar-open' : 'navbar-closed'}`}>
//       <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>☰ Menu</div>
//       <ul className="navbar-list">
//         <li><a href="#" onClick={() => smoothScroll('home')}>Home</a></li>
//         <li><a href="#" onClick={() => smoothScroll('about')}>About</a></li>
//         <li><a href="#" onClick={() => smoothScroll('portfolio')}>Portfolio</a></li>
//         <li><a href="#" onClick={() => smoothScroll('contact')}>Contact</a></li>
//       </ul>
//     </div>
//   );
// };

// export default Navbar;

// import{Routes,Route} from "react-router-dom"
// import { Home } from "./Components/Home"
// import { About } from "./Components/About"
// import { Contact } from "./Components/Contact"
// import { Project } from "./Components/Project"
// import { Navbar } from "./Components/Navbar"
// import { Education } from "./Components/Education"
// import {Skill} from "./Components/Skill"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHtml5 } from '@fortawesome/free-solid-svg-icons'

// import"./App.css"
// import"./Home.css"
// import"./About.css"
// import"./Skill.css"


// function Ajith(){
//   return(
//     <>
//      <div className="title"><h1 className="h1">MY PORTFOLIO</h1>
//    <div className="navbar"> <Navbar/>
    
//     <Routes>
      
//       <Route path="/" element={<Home/>}></Route>
//       <Route path="/About" element={<About/>}></Route>
//       <Route path="/education" element={<Education/>}></Route>
//       <Route path="/Skill" element={<Skill/>}></Route>
//       <Route path="/project" element={<Project/>}></Route>
//       <Route path="/Contact" element={<Contact/>}></Route>
//     </Routes></div></div>
    
    
//     </>
//   )
// }
// export default Ajith
// import React from 'react';
// import { Route, Switch } from 'react-router-dom';
// import Home from './components/Home';
// import About from './components/About';
// import Contact from './components/Contact';

// const Ajith = () => {
//   return (
//     <div>
//       <Route>
//         <Route path="/" exact component={Home} />
//         <Route path="/about" component={About} />
//         <Route path="/contact" component={Contact} />
//       </Route>
//     </div>
//   );
// };

// export default Ajith;
// import { useState } from "react";
// import {mist,fog,image3} from "D:\Reactajith\ak\src\images"
// function Ajith(){
// const DynamicBodyBackground = () => {
//   const [backgroundImage, setBackgroundImage] = useState('mist.jpg');

//   const handleChangeBackground = () => {
//     // Assuming you have a list of background images
//     const backgroundImagesList = ['mist.jpg', 'fog.jpg', 'image3.jpg'];

//     // Randomly select a new background image
//     const newBackgroundImage = backgroundImagesList[Math.floor(Math.random() * backgroundImagesList.length)];

//     // Update the state to trigger a re-render with the new background image
//     setBackgroundImage(newBackgroundImage);

//     // Apply the new background image to the body
//     document.body.style.backgroundImage = `url(${newBackgroundImage})`;
//     document.body.style.backgroundSize = 'cover';
//   };

//   return (
//     <div>
//       <button onClick={handleChangeBackground}>Change Body Background</button>
//     </div>
//   );
// };
// }

// export default Ajith;
// import axios   from "axios"
// import {useState,useEffect}from'react'
//  import cloud from "./images/cloud.png"
//  import mist1 from "./images/mist 1.jpg"
//  import fog from "./images/fog.jpg"
//  import haze from "./images/haze.svg"
//  import rain from "./images/rain.png"
//  import  Form from "./components/Form"
// //  import ReactDOM from 'react-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
// import "animate.css"


// import'./App.css'
// function Ajith()
//   { 
//     const[info,setInfo]=useState(null)
//   const[city,setCity]=useState(null)
  

 
//   const show=(e)=>{
//     e.preventDefault();
    
// setCity(e.target.value)
  
//   };
    
//   useEffect(()=>{

//   var myurl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1fd4726b5ff18e137d4d59819528c28a`

//   if(city!==null)
//   {
//     axios.get(myurl).then((res)=>{
//       setInfo(res.data)
//       setCity(null)
//     }).catch((err)=>{
//       setInfo(err.response.data)
//       setCity(null)
//     })
//   }
// })
// return(
//   <center>
    
        
//   <div id="ak1"><h1>WEATHER FORECAST</h1>
  
//    <div class="search-container">
//   <div id="search">Enter City Name: <input type="text" value={city} class="search-box" placeholder="Search..." onBlur={(e)=>setCity(e.target.value)} ></input>
 
//   <FontAwesomeIcon class="search-icon" icon={faMagnifyingGlass} /></div></div>
    
//  </div>
//  {
//     (info!==null&& info.cod===200 &&
//     <table>
//   <tr><th colSpan={2}>Welcome To {info.name}</th></tr>
//       <tr><th colSpan={2}>Report</th></tr>
//     <tr><td>City Name</td><td>{info.name}</td></tr>
//     <tr><td>Weather Report</td><td>{info.weather[0].main}</td></tr>
//     <tr><td>Temperature</td><td>{info.main.temp}</td></tr>
    
//     </table>)
//     }
//     {(info!=null && info.cod==="200" &&<table><tr> <th> {info.main.temp}</th></tr></table>)}
//     {(info!=null && info.cod==="404" &&<table><tr> <th> {info.message}</th></tr></table>)}
   
  
  
  
  
  
//   { info!==null&& info.cod===200 &&((info.weather[0].main==="Clouds"&&<img id="clouds"src={cloud} alt="path not found"></img>)||
// (info.weather[0].main==="Mist"&&<img id="clouds"src={mist1} alt="path not found"></img>)
//  ||(info.weather[0].main==="Fog"&&<img id="clouds"src={fog} alt="path not found"></img>)
//  ||(info.weather[0].main==="Haze"&&<img id="clouds"src={haze} alt="path not found"></img>)
//  ||(info.weather[0].main==="rain"&&<img id="clouds"src={rain} alt="path not found"></img>))}
  
  

  
//   </center>
//   )
// }
//  export default Ajith
// import axios from "axios";
// import { useState,useEffect } from "react";
//  import "./App.css"
// function Ajith()
// {
//   const[info,setInfo]=useState(null)
//   const[city,setCity]=useState(null)
  
//     useEffect(()=>{
//       if (city!==null)
//       {
//     const myapi=`https://api.openweathermap.org/data/2.5/weather?q=${city}}&appid=1fd4726b5ff18e137d4d59819528c28a`  
//     axios.get(myapi).then((res)=>{
//       setInfo(res.data)
//       setCity(null)
//     }).catch((err)=>{ 
//       setInfo(err.response.data)
//     },[])
//      }
//   })
  
//   const changecity=()=>{
//     var cn=document.getElementById("cn").value;
//     setCity(cn)

//   }

  
//   return(
//     <>
//       <h1>Axios Http Header Demo</h1>
//       <input type="text" id="cn" placeholder="Enter City Here"></input>
//       <input type="button" onClick={changecity} value="Weather Report"></input>
//       {info!=null && <>
      
//        <h1>Result Status cod:{info.cod}</h1> 
//       {info.cod==="404" &&  <h1>Report:{info.message}</h1>}       
//       {info.cod===429 && <h1>Temporary blocked limitation exceed</h1>} 
//       {info.cod===401 && <h1>Invalid API KEY - not activated</h1>} 

//       {
//       info.cod===200 && <>
//       <h1>City name:{info.name}</h1>
//       <h1>Weather Report Main:{info.weather[0].main}</h1>
//       <h1>Weather Report Description:{info.weather[0].description}</h1>
//       <h1>Temperature:{info.main.temp}</h1>
//       </> 
// }        
//       </>
//   }      
//     </> 
//   )
// }
// export default Ajith
// import axios from "axios"
// import { useEffect,useState } from "react"
// import "./App.css"
// import img1 from "./images/img 1.jpeg"
// import pic2 from "./images/pic2.jpeg"
// function Ajith(){
//   const[city,setCity]=useState("karur")
//    useEffect(()=>{
//      console.log("use effect first called")
//      document.title=city
//    })
//    const changeCityfun=(event)=>{
//      setCity(event.target.value)
//    }
//    return(
//     <>
//     <div id="ak1">Weather report
//    <div id="ak2"><span><img id="img1"src={img1} alt="path not found"></img></span>
//    <img  id="img2"src={pic2} alt="path not found"></img><br></br></div>
//   <div id="ak3">Enter city<input type="text"  value={city} onChange={changeCityfun} ></input></div><br></br>
//   <div id="ak4"> <input type="button"id="button" value="city" onClick={changeCityfun}></input></div><br></br>
//        <h1>city:{city}</h1></div>
   
//     </>
//    )
//  }
//  export default Ajith
// import React from "react";
// import "./App.css"
// class Child extends React.Component
// {
//   componentWillUnmount()
//   {
//     alert("it will delete child component");
//   }
//   render()
//     {
//       return(
//         <center>
//         <h1>welcome to react lifecycle unmount delete</h1>
//         <h1>welcome to react lifecycle unmount delete</h1>
//         <h1>welcome to react lifecycle unmount delete</h1>
//         </center>
//       )
//     }
  
// }
// class Ajith extends Child
// {
//   constructor()
//   {
//     super()
//     this.state={
//       command:true
//     }
//   }
//   delfun=()=>{
//     this.setState({command:false})
   
//   }
//   render()
//   {
//     let ans
//     if(this.state.command===true)
//     {
//       ans=<Child/>
//     }
//     return(
//       <>
//       {ans}
//       <button onClick={this.delfun} >X</button>
//       </>
//     )
//   }
// }
// export default Ajith
// import React from "react";
// import "./App.css"
// class Ajith extends React.Component
// {
//   constructor()
//   {
//     super()
//      this.state={
//     //     employId:document.getElementById("ak1"),
       
      
//     //    employname:document.getElementById("ak2").value,
//     //    employsalary:document.getElementById("ak3").value
//      }
//   }
//   getSnapshotBeforeUpdate(prevProps,prevState)
//   {
//     var a=new Date()
   
//     document.getElementById("res").innerHTML=a.getDate()
//     document.getElementById("res1").innerHTML="<h2>last rollno change value:</h2><h1>"+prevState.employId+"</h1>"+a
//     document.getElementById("res2").innerHTML="<h2>last employname  changevalue:</h2><h1>"+prevState.employname+"</h1>"+a
//     document.getElementById("res3").innerHTML="<h2>last rollno change value:</h2><h1>"+prevState.employsalary+"</h1>"+a
//   }
  
//   shouldComponentUpdate()
//   {
//     return true;
//   }
//   componentDidUpdate()
//   {
  
//     document.getElementById("res").innerHTML="data updated /changed"
//   }
//   changeemploysalary=()=>{
//   this.setState({employId:document.getElementById("ak1").value})
//   this.setState({employname:document.getElementById("ak2").value})
//   this.setState({employsalary:document.getElementById("ak3").value})
//   }

//   render()
//     {
//       return(
//         <center>
          
//       <h1>Enter the employee id:<input type="text" id="ak1" placeholder="enter employee id"></input></h1>
//         <h1>Enter the employee name:<input type="text" id="ak2"placeholder="enter employ name"></input></h1>
//         <h1>Enter the employsalary:<input type="text" id="ak3"placeholder="enter employ salary"></input></h1>
//         <h1>EmployId:{this.state.employId}</h1>
//         <h1>EmployName:{this.state.employname}</h1>
//         <h1>EmploySalary:{this.state.employsalary}</h1>
//         <button onClick={this.changeemploysalary}>clickme</button>
//        <div id="res"></div>
//         <div id="res1"></div>
//         <div id="res2"></div>
//         <div id="res3"></div>
       
//         </center>
//       )
//       }
    
//     componentDidMount()
//     { 
//     //  setTimeout(()=>{this.setState({employsalary:document.getElementById("ak3").value})},7000)
//     //  setTimeout(()=>{this.setState({employId:document.getElementById("ak1").value})},7000)
//     //  setTimeout(()=>{this.setState({employname:document.getElementById("ak2").value})},7000)
  // this.setState({employsalary:document.getElementById("ak3").value})
//   this.setState({employId:document.getElementById("ak1").value})
//   this.setState({employname:document.getElementById("ak2").value})
//     }
  
//   }
// export default Ajith

// import React from "react"
// class Ajith extends React.Component 
// {
//   constructor(props)
//   {
//     super( props)
//     this.state={employId:this.props.employId}
              

//   } 
//   render()
//   {


//   return(
//     <>
//     <h1> rollnumber:{this.props.employId}</h1>
//     <h1> employname:{this.props.employname}</h1>
//     <h1> mark:{this.props.mark}</h1>
//     </>
//   )
//   }
// }
// export default Ajith
// import React from "react";
// class Ajith extends React.Component
// {
//   constructor()
//   {
//     super()
//     this.state={
//       employId:1001,
//       employname:'ajithkumar',
//       employsalary:10000
//     }
//   }
//   getSnapshotBeforeUpdate(prevProps,prevState)
//   {
//     document.getElementById("res1").innerHTML="last value:"+prevState.employsalary
//   }
  
//   shouldComponentUpdate()
//   {
//     return true;
//   }
//   componentDidUpdate()
//   {
//     document.getElementById("res").innerHTML="data updated /changed"
//   }
//   changeemploysalary=()=>{
//     this.setState({employsalary:15000})
//   }

//   render()
//     {
//       return(
//         <>
//         <h1>welcome to class Component</h1>
//         <h1>roll number:{this.state.employId}</h1>
//         <h1>employname:{this.state.employname}</h1>
//         <h1>employsalaryary:{this.state.employsalary}</h1>
//         <button onClick={this.changeemploysalary}>clickme</button>
//         <div id="res"></div>
//         <div id="res1"></div>
//         </>
//       )
//       }
    
//     componentDidMount()
//     {
//      setTimeout(()=>{this.setState({employsalary:800})},5000)
//      setTimeout(()=>{this.setState({employId:1002})},5000)
//      setTimeout(()=>{this.setState({employname:"kumar"})},5000)
//     }
  
//   }
// export default Ajith
// import{useState,useEffect} from "react"
// function Ajith()
// {
//   const[increment,setIncrement]=useState(1)
//   const[decrement,setDecrement]=useState(10)
//   // useEffect(()=>{
//   //   console.log("use effect first called")
//   //   document.title=city
//   // })
//   const changeCityfun=()=>{
//     setIncrement(increment+4)
//     // setDecrement(decrement-1)
//  }
//   const changeCityfun1=()=>{
  
//     setDecrement(decrement-1)
//  }
//   return(
//     <center>
//       {/* <input type="button" value="+" onClick={changeCityfun}></input> */}
//       <input type="text" value={decrement}onChange={changeCityfun1}></input>
//       <input type="text"  value={increment} onChange={()=>changeCityfun()}></input>
//       <h1>increment:{increment}</h1><span> <h1>decrement:{decrement}</h1></span>
//     </center>
//   )
// }
// export default Ajith
// import{useForm} from 'react-hook-form'
// function Ajith()
// {
//   const{register,handleSubmit,formState:{errors}}=useForm()
//   const show=(data)=>{
    
//    console.log(data)
//  }
// return(
//     <form onSubmit={handleSubmit(show)}>
//       <h1> welcome to react hook form</h1>
//       <input type="text" name="employId"{...register("employId",{required:true})}></input>
//       { errors.employId&&errors.employId.type==="required"&&<font color='red' fontsize='10px'>*must type roll no</font>}<br></br>
//       <input type="text" name="employname"{...register("employname",{minLength:8,maxLength:10,required:true})}></input>
//       {errors.employname&&errors.employname.type==="minLength"&& <font color='red' fontsize='10px'>*must type  minimum 8characters </font>}
//       {errors.employname&&errors.employname.type==="maxLength"&& <font color='red' fontsize='10px'>*must type  maximum 15characters </font>} b b 
//       {errors.employname&&errors.employname.type==="required"&& <font color='red' fontsize='10px'>*must enter the student Name </font>}<br></br>
//       <input type="text" name="mark1"{...register("mark1")}></input><br></br>
//       <input type="text" name="mark1"{...register("mark1")}></input><br></br>
//       <input type="text" name="mark2"{...register("mark2")}></input><br></br>
//       <input type="text" name="mark3"{...register("mark3")}></input><br></br>
//       <input type="submit"></input>
//     </form>
//   )
// }
// export default Ajith
// import{useForm} from 'react-hook-form'
// function Ajith()
// {
//   const{register,handleSubmit}=useForm()
//   const show=(data)=>{
//     // for ( var i=0;i<=data;i++)
//     for(var i of data)
//     {
  
//       console.log(data[i])
//  }
//    console.log(data)
//  }
// return(
//     <form onSubmit={handleSubmit(show)}>
//       <h1> welcome to react hook form</h1>
//       <input type="text" name="employId"{...register("employId")}></input>
//       <input type="text" name="employname"{...register("employname")}></input>
//       <input type="text" name="mark1"{...register("mark1")}></input>
//       <input type="text" name="mark2"{...register("mark2")}></input>
//       <input type="text" name="mark3"{...register("mark3")}></input>
//       <input type="submit"></input>
//     </form>
//   )
// }
// export default Ajith
// import{useState,useEffect} from "react"
// function Ajith()
// {
//   const[city,setCity]=useState("karur")
//   useEffect(()=>{
//     console.log("use effect first called")
//     document.title=city
//   })
//   const changeCityfun=(event)=>{
//     setCity(event.target.value)
//   }
//   return(
//     <center>
//       <input type="button" value="changecityname" onClick={changeCityfun}></input>
//       <input type="text"  value={city} onChange={(e)=>changeCityfun(e)}></input>
//       <h1>city:{city}</h1>
//     </center>
//   )
// }
// export default Ajith
// function Ajith()
// {
//   const show=(event)=>{
//     document.getElementById("s"+(event.target.id).charAt(1)).innerHTML=event.target.value
//   }
//   return(<>
//     <input type="text" id="t1" onChange={(e)=>show(e)}></input><span id="s1"></span><br></br>
//     <input type="text" id="t2"onChange={(e)=>show(e)}></input><span id="s2"></span><br></br>
//     <input type="text" id="t3"onChange={(e)=>show(e)}></input><span id="s3"></span><br></br>
//     <input type="text" id="t4"onChange={(e)=>show(e)}></input><span id="s4"></span><br></br>
//     <input type="text" id="t5"onChange={(e)=>show(e)}></input><span id="s5"></span>
//     </>
//   )
// }
// export default Ajith
// import {useState} from "react"
// function Ajith()
// {
//   const[m1,setM1]=useState(0)
//   const[m2,setM2]=useState(0)
//   const[m3,setM3]=useState(0)
//   const[m4,setM4]=useState(0)
//   const[m5,setM5]=useState(0)
//   const dynamic=(event)=>{
//     if(event.target.id==="t1")
//     setM1(event.target.style.backgroundColor="red" )
//     setM1(event.target.value )
//     if(event.target.id==="t2")
//     setM2(event.target.value)
//     if(event.target.id==="t3")
//     setM3(event.target.value)
//     if(event.target.id==="t4")
//     setM4(event.target.value)
//     if(event.target.id==="t5")
//     setM5(event.target.value)
//   }
//   return(
//     <>
//     <h1>mark1:{m1}</h1>
//     <h1>mark2:{m2}</h1>
//     <h1>mark3:{m3}</h1>
//     <h1>mark4:{m4}</h1>
//     <h1>mark5:{m5}</h1>
//     <h1>total:{parseInt(m1)+parseInt(m2)+parseInt(m3)+parseInt(m4)+parseInt(m5)}</h1>
//     <input type="text" id="t1" onChange={(e)=>dynamic(e)}></input><br></br>
//     <input type="text" id="t2" onChange={(e)=>dynamic(e)}></input><br></br>
//     <input type="text" id="t3" onChange={(e)=>dynamic(e)}></input><br></br>
//     <input type="text" id="t4" onChange={(e)=>dynamic(e)}></input><br></br>
//     <input type="text" id="t5" onChange={(e)=>dynamic(e)}></input>
//     </>
//   )
// }
// export default Ajith
// basic
// import { useState } from "react";
// function Ajith()
// {

//    const[id,setId]=useState("")


//   const dis=(event)=>{
    
// setId(document.getElementById(event.target.id).style.backgroundColor="blue")
// document.getElementById("res").innerHTML="cursor inside"
    
    
  
  
//   }
//   const dis1=(event)=>{
// setId(document.getElementById(event.target.id).style.backgroundColor="white")
//     document.getElementById("res").innerHTML="cursor outside"
    
//   }
//   const dis2=(event)=>{
// setId(document.getElementById("t1").style.backgroundColor="green")
// setId(document.getElementById("t2").style.backgroundColor="orange")
// setId(document.getElementById("t3").style.backgroundColor="violet")
// // setId(document.getElementById("t4").style.backgroundColor="cyan")
    
    
//   }

//   return(
//     <>
//     <input type="text" id="t1" onFocus={(e)=>dis(e)} onBlur={(e)=>dis1(e)} ></input>
//     <input type="text" id="t2" onFocus={(e)=>dis(e)} onBlur={(e)=>dis1(e)} onClick={(e)=>dis2(e)} ></input>
//     <input type="text" id="t3" onFocus={(e)=>dis(e)} onBlur={(e)=>dis1(e)} ></input>
//     <button id="t4" onClick={(e)=>dis2(e)} >clickme</button>
//     <div id="res"></div>
//     {/* <h1>hookvalue default:{id}</h1> */}
    

      
    
//     </>
//   )
// }
// export default Ajith
// import { useState } from "react";
// function Ajith()
// {
//   const[name,setName]=useState("ak")
//   const[roll,setRoll]=useState("1001")

//   const dis=()=>{
//     setName("ajith")
//     setRoll("1002")
//   }
//   return(
//     <>
//     <button onClick={dis}>clickme</button>
//     <h1>hookvalue default:{name}</h1>
//     <h1>hookvalue default:{roll}</h1>

      
    
//     </>
//   )
// }
// export default Ajith
// function Ajith()
// {
  
//   const handleSubmit=(e)=>{
//     e.preventDefault()
//     var a=(document.getElementById("ak1").value)
//     document.getElementById("res").innerHTML=a

//   }
//   return(
//   <form onSubmit={handleSubmit}>
//   <input type="text" id="ak1"></input>
//   <input type="submit" ></input>
//   <input type="button"  value="clickme"></input>
//   <div id="res"></div>
//   </form>
//   )
// }
// export default Ajith

//  function Ajith()
// { var dis1=(e)=>{
//   if(e==="in" )
//   document.getElementById("res").innerHTML="cursor inside"
//   if(e==="out")
//   document.getElementById("res").innerHTML="cursor outside"
// }
// return(
//   <>
//   <input type="text" onFocus={()=>dis1("in")} onBlur={()=>dis1("out")}></input><br>
//   </br>
//   <div id="res"></div>
//   </>
// )
// }
// export default Ajith 
// function Ajith()
// {
//   var amt1=0 ,amt2=0,amt3=0,amt4=0,amt5=0,amt6=0
//   var dis1=()=>{

//     if(document.getElementById("ak1").value!=="")
//     amt1=parseInt(document.getElementById("ak1").value*500)
//   finalfun()
//   }
//   var dis2=()=>{
//     if(document.getElementById("ak2").value!=="")
//     amt2=parseInt(document.getElementById("ak2").value*200)
//   finalfun()

//   }  
  
//   var dis3=()=>{
//     if(document.getElementById("ak3").value!=="")
//     amt3=parseInt(document.getElementById("ak3").value*100)
//   finalfun()


//   }
//   var dis4=()=>{
//     if(document.getElementById("ak4").value!=="")
//     amt4=parseInt(document.getElementById("ak4").value*50)
//   for(var i=0;amt4<=0;i++)
//   {
//     amt4++
    
//   }
//   alert(amt4++)

//   finalfun()

//   } 
//   var dis5=()=>{
//     if(document.getElementById("ak5").value!=="")
//     amt5=parseInt(document.getElementById("ak5").value*20)
//   finalfun()

//   }     
//   var dis6=()=>{
//     if(document.getElementById("ak6").value!=="")
//     amt6=parseInt(document.getElementById("ak6").value*10)
//   finalfun()

//   }     
// function finalfun(){


// document.getElementById("res").innerHTML="total:"+(amt1+amt2+amt3+amt4+amt5+amt6)

//   }
//   return(
  
//   <div  align="center">
//       500x<input type="text" id="ak1" placeholder="enter the no1" onChange={dis1}></input><br></br>
//       200x<input type="text" id="ak2" placeholder="enter the no2" onChange={dis2}></input><br></br>
//       100x<input type="tex///t" id="ak3" placeholder="enter the no3" onChange={dis3}></input><br></br>
//       50x<input type="text" id="ak4" placeholder="enter the no4" onChange={dis4}></input><br></br>
//       20x<input type="text" id="ak5" placeholder="enter the no5" onChange={dis5}></input><br></br>
      
//       10x<input type="text" id="ak6" placeholder="enter the no6" onChange={dis6}></input><br></br> 
//       <div id="res"></div>

    
//   </div>
//   )
// }
// export default Ajith
// import "./App.css"
//  export default function Ajith()
//  {
//   return(<>
//     <div  clasemployname="ajith"align="center">
//       <h1>client details</h1>
//       <h2> enter the details of all incoming clients</h2>

//     </div>
//     <div  align="center">
//       <table>
//       <tr><td clasemployname="ak">clientname:<span>*</span></td><td><label><input type="text" id="ak1"></input></label></td></tr>
//       <tr><td clasemployname="ak">Company name:<span>*</span></td><td><label><input type="text" id="ak1"></input></label></td></tr>
//       <tr><td clasemployname="ak">title:<span>*</span></td><td><label id="ak1">
//          <select>
//            <optgroup label="departments">
//            <option> ece</option>
//            <option> eee</option>
//            <option> civil</option>
//            <option> mechanical</option>
//            <option> it</option>
         
//            </optgroup>
//            </select>

//        </label></td></tr>
//       <tr><td clasemployname="ak">department:<span>*</span></td><td><label><input type="text" id="ak1"></input></label></td></tr>
//  <tr><td clasemployname="ak">perfered contact method:<span>*</span></td><td><label><input type="checkbox" id="ak1"></input>
//       email<input type="checkbox" id="ak1"></input>phone</label></td></tr>
//       <tr><td clasemployname="ak">email:<span>*</span></td><td><label><input type="text" id="ak1"></input></label></td></tr>
//       <tr><td clasemployname="ak">phone:<span>*</span></td><td><label><input type="text" id="ak1"></input></label></td></tr>
//       <tr><td clasemployname="ak">address:<span>*</span></td><td><label><input type="text" id="ak1"></input></label></td></tr></table>
//     </div>
// </> 
//   )
//  }
// import img from "./images/aswin.png"
// function Ajith()
// {
//   return(
//     <form>
//       <label>enter user name:<input type="text"></input></label><br></br>
//       <label>enter password:<input type="password"></input></label><br></br>
//       <label>enter address:<textarea rows="5" cols="25"></textarea></label><br></br>
//       <label>select gender:</label>
//       <input type="radio" name="gen"></input>male
//       <input type="radio" name="gen"></input>female
//       <input type="radio" name="gen"></input>others
//       <br></br>
//       <label>selectcourse:</label>
//       <input type="checkbox"></input>c
//       <input type="checkbox"></input>c++
//       <input type="checkbox"></input>java
//       <input type="checkbox"></input>javascript
//       <input type="checkbox"></input>python
//       <input type="checkbox"></input>none of the above
//       <br></br>
//       <label>selectday:
//         <select>
//           <optgroup label="select weekday">
//           <option> sunday</option>
//           <option> monday</option>
//           <option> tuesday</option>
//           <option> wednesay</option>
//           <option> thursday</option>
//           <option> friday</option>
//           <option> saturday</option>
//           </optgroup>

//         </select>
//       </label><br></br>
//       <label>upload your documents:
//       <input type="file"></input>
//       </label><br></br>
//       <label>favouritecolor:
//         <input type="color"></input>
//       </label><br></br>
//       <label>selectdate:
//         <input type="date"></input>
//       </label><br></br>
//       <label>selecttime:
//         <input type="time"></input>
//       </label><br></br>
//       <label>selectweek:
//         <input type="week"></input>
//       </label><br></br>
//       <label>selectweek:
//         <input type="button"></input><br></br>
//         <input type="submit"></input><br></br>
//         <input type="reset"></input><br></br>
//         <button>clickme</button><br></br>
//         <button><img  src={img}></img></button> 
//         <input type="range" min="0"max="10"></input>
//         <button><font></font></button>


//       </label><br></br>

//     </form>
//   )
// }
// export default Ajith
// import React from "react"
// class Ajith extends React.Component 
// {
//   constructor(props)
//   {
//     super( props)
//     this.state={ employId:this.props. student.employId,
//                 employname:this.props.student.employname,
//                 tamil:this.props.student.marks.tamil
//   return(
//     <>
//     <h1> rollnumber:{this.state.employId}</h1>
//     <h1> employname:{this.state.employname}</h1>
//     <h1> tamil:{this.state.tamil}</h1>
//     <h1> english:{this.state.english}</h1>
//     <h1> maths:{this.state.maths}</h1>
//     <h1> science:{this.state.science}</h1>
//     <h1> social:{this.state.social}</h1>
//     <h1> geography:{this.state.geography}</h1>
    
//     </>
//   )
//   }
// }
// export default Ajith
// // react state using props
// // import React from "react"
// // class Ajith extends React.Component 
// // {
// //   constructor(props)
// //   {
// //     super( props)
// //     this.state={ employId:this.props.employId,
// //                employname:this.props.name,
// //                mark:this.props.mark

// //     }
// //   } 
// //   render()
// //   {

  
// //   return(
// //     <>
// //     <h1> rollnumber:{this.props.employId}</h1>
// //     <h1> rollnumber:{this.props.employname}</h1>
// //     <h1> rollnumb
// er:{this.props.mark}</h1>
// //     </>
// //   )
// //   }
// // }
// // export default Ajith


// //react state

// // import React from "react"
// // class Ajith extends React.Component
// // { 
// //   constructor( )
// //   {
// //     super()
// //     this.state={
// //       rollno:1001,
// //       employname:"Ajith",
// //       marks:{
// //         tamil:88,
// //         english:45,
// //         maths: 99,
// //         science:90,
// //         social:89
// //       }
// //     }
// //   }
// //   render()
// //   {
// //     return(
// //       <>
// //       <h1> react sate</h1>
// //       <h1> rollnumber:{this.state.rollno}</h1>
// //       <h1> employname:{this.state.employname}</h1>
// //       <h1> mark:{this.state.marks.tamil}</h1>
// //       <h1> mark:{this.state.marks.english}</h1>
// //       <h1> mark:{this.state.marks.maths}</h1>
// //       <h1> mark:{this.state.marks.science}</h1>
// //       <h1> mark:{this.state.marks.social}</h1>
// //       </>
// //     )
// //   }

// // }
// // export default Ajith
// function using props
// function Ajith(props)
// { 
//   var sum=0
// var res=[]
// var index=0
// for (var k in props.student.marks)
// {
//   console.log(k)
  
  
//   // res[index++]=<div>{k}:{props.student.marks[k]}</div>
//   res[index++]=<tr><th>{k}</th><th align="right">{props.student.marks[k]}</th></tr>
//   sum=sum+props.student.marks[k]
// }
// return(
//   <>
//   <table border="2">
//     <tr><th>subject</th><th>marks</th></tr>
//   {/* {res.map((item)=><tr><td>{item}</td></tr>)}   */}
//  {res}
// </table>
//   <h1>sum:{sum}</h1>
  
//   </>
// )

// }
// export default Ajith
