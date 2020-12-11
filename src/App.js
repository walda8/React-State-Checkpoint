import React from 'react'

export default class Profile extends React.Component {
  constructor(props){
    super(props)
    this.state={
     Person :{
       FullName:"Walid Khelil",
       Bio:"Love Smoking",
       Profession:"Web developper",
       imgSrc:"/profilepic.jpg"
     },
     show:false,
     count:0
    }
    this.showHide = this.showHide.bind(this);
  }

 
   showHide(){this.setState(state =>({show:!state.show}))
               this.setState({count:0})
  }
   
 

  componentDidMount(){
    setInterval(()=>this.setState({count:this.state.count+1}),1000)
    
  }
  
  render() {
    return (
      <div>{
      
  
      (!this.state.show)?
      
      <button style={{marginTop:"55px",backgroundColor:"#C1F4F0",fontSize:"large",fontWeight:"bold",marginLeft:"43%"}} onClick={this.showHide} >Take a look at my profile</button>
      
      :    
      <div> 
        <button style={{marginTop:"55px",backgroundColor:"#C1F4F0",fontSize:"large",fontWeight:"bold",marginLeft:"43%"}} onClick={this.showHide} >Hide my profile</button>

      <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",borderStyle:"solid",borderColor:"blue",borderRadius:"17px",width:"60%",height:"520px",margin:"auto",backgroundColor:"#F1F2E2 ",marginTop:"30px"}}>
       <h1 style={{color:"#5D9FA4"}} >Name:  {this.state.Person.FullName}</h1>
       <h4 style={{color:"#4E787B "}}>Bio: {this.state.Person.Bio}</h4>
       <h2 style={{color:"#295559  "}}>Profession:  {this.state.Person.Profession}</h2>
       <img src={this.state.Person.imgSrc} style={{width:"25%",height:"50%",borderRadius:"17px"}} alt="profile" />
   </div>
       <div style={{color:"black",fontWeight:"normal",textAlign:"center"}}>
       Thanks for your time : <span style={{color:"blue",fontWeight:"bolder"}} >{this.state.count} seconds</span>.</div>
   </div>
   }
   
   </div>
)
}
}
