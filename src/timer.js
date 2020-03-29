import React from 'react'
import './App.css'


class Timer extends React.Component{
    constructor(props){
        super(props)
        this.state=
   {
     timestarted:false,
     timestopped:true,
     seconds1: 0,
     seconds2:0,
     minutes1:0,
     minutes2:0,
     hours1:0,
     hours2:0,    
     button1:"Start",
     button2:"Reset",
     
   }
    }
  
    render(){
    return (<div className="stopwatch-section">
      <div className="time">
    <p className="hms">{this.state.hours2}{this.state.hours1}:{this.state.minutes2}{this.state.minutes1}:{this.state.seconds2}{this.state.seconds1}</p>
    <div className="HMS"><p>Hour</p> <p>Minute</p><p>Second</p></div>
    </div>
    <div className="buttons">
    <button className="start-btn" onClick={this.handTime.bind(this)}>{this.state.button1}</button>
    <button className="reset-btn" onClick={this.resTime.bind(this)} >{this.state.button2}</button>
    </div>
    </div>)
    }
  

handTime (e) {
  e.preventDefault();
   if (this.state.timestopped){
    this.setState({timestarted:true,timestopped:false,button1:"Stop"})
  this.timer = setInterval(() => {
    this.setState({timestarted:true,timestopped:false,button1:"Stop"})
       if (this.state.timestarted){
         if (this.state.seconds1>= 9){
           this.setState((prevState) => ({seconds2:prevState.seconds2 + 1, seconds1:-1}));
         }
         if (this.state.seconds2>= 6){
          this.setState((prevState) => ({minutes1:prevState.minutes1 + 1, seconds1:-1, seconds2:0}));
        }
        if (this.state.minutes1>= 10){
          this.setState((prevState) => ({minutes2:prevState.minutes2 + 1, minutes1:0,seconds1:-1, seconds2:0}));
        }
         
         if(this.state.minutes2>=6){
           this.setState((prevState) => ({hours1 :prevState.hours1 +1, minutes2:0,minutes1:0,seconds2:0,seconds:-1 }));
         }
         if(this.state.hours1>=10){
          this.setState((prevState) => ({hours2 :prevState.hours2 +1, hours1:0,minutes2:0,minutes1:0,seconds2:0,seconds:-1 }));
         }
       }
       {
         this.setState((prevState)=>({seconds1: prevState.seconds1 +1}))
       }
       
     }, 1000);

     
       
     
   }

   else {
     this.setState({timestarted:false, timestopped:true,button1:"Start"});
     clearInterval(this.timer);
   }
}

resTime(e){
  e.preventDefault();
  this.setState({timestarted:false, timestopped:true, button1:"Start"});
  this.setState({seconds1:0, minutes1:0, hours1:0,seconds2:0, minutes2:0, hours2:0});
  
}
}





export default Timer;