import Bulb from './bulb.jpg';

export function Project() {
    return (
      <div>
          <h1  style={{textAlign:"center",backgroundColor:"teal",color:"lavender"}}>PROJECTS</h1>
        <div
          class="p-3  mt-0 "
          style={{ color: "lavender", overflow: "auto" ,backgroundColor:"teal"}}>
          <h2 class="text-primary">SMART BULB</h2>
          <img src={Bulb} style={{ float: "right", height: "200px",width:"300px"}} class="ms-2"/>
          <h5>Problem Statement:</h5>
          <p>
            We often tend to forget switching on and off lights at our homes and
            workplaces. At times, when we go for long holidays, when we are away
            from our homes, turning on lights and switching them off is a
            brainstorming problem.
          </p>
          <h5 >Solution</h5>
          <p>
            We did a project on Enable LED to turn on and off automatically for a
            certain period of time with an added option to adjust time without the
            help of IoT.
          </p>
        </div>
        <div
          class="p-3  mt-0"
          style={{ color: "lavender", overflow: "auto",backgroundColor:"teal" }}>
          <h2 class="text-primary">DATA ANALYSIS</h2>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-JtqKo2bJKs_s_rEEJ_K0CxJjK4gYl3VuWK9oQhDcuf7P0Y8XZy7Wl0mTKtaAm7mxbBs&usqp=CAU" style={{ float: "right", height: "200px",width:"300px"}} class="ms-2" />
          <p>
          Data analysis on Amazon
Tools used: Rstudio.
Collected data from various resources and performed basic data cleaning and data interpretation
using Rstudio
          </p>
        </div>
      </div>
    );
  }
  