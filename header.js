import React from "react";
import { Component } from 'react'

class Header extends Component {  
       constructor(props) {       
        console.log("In Constructor");  
        super(props);       
             this.state = { orgName: "Deccansoft" };  
           }    
          
           static firstCall = true;
           static getDerivedStateFromProps(props,state)
           {
             console.log("In getDerivedSateFromProps")
             if(Header.firstCall===true)
             {
                Header.firstCall = false;
                return {orgName: props.orgName}
             }
             else
             return null         
           }
           
            componentDidMount(){
            console.log("In Component did mount")
            document.getElementById("div1").innerHTML = "Completed..."
            setTimeout(() => 
            {            
                alert(this.state.orgName) 
                let name = this.state.orgName + "..."   
                alert(name)           
                this.setState({ orgName: name })
             }, 5000) 
            
            
            }         
           
           render() {     
                console.log("In render")       
                    return (          
                         <div><div id="div1"></div> <h2>Organization Name: {this.state.orgName}</h2></div>        
                        );    
                      } 
                    }  
                     
            export default Header 