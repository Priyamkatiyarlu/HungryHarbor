import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.webp";
const Header = () =>{
    return(
        <div className="header">
              <div className="logo-container">
                  <img className="logo" src={logo} alt="logo"/>
                </div>
                <div className="nav-items">
                    <ul>
                       <li>Home</li>
                       <li>About Us</li>
                       <li>Contact US</li>
                       <li>Cart</li>
                    </ul>
                </div>
        </div>
    )
}
const Body = () =>{
    return(
        <div className="body">
          <div className="search-bar">
              search bar
           </div>
        <div className="res-container">
            {/* restaurant card */}
            <RestaurantCard/>
        </div>
        </div>
    )
}
const RestaurantCard= () =>{
    return(
        <div className="res-card">
        <h3>Megna Foods</h3>
         </div>  
    )
}
const AppLayout = () =>{
    return(
        <div className="app">
        <Header/>
        <Body/>
        //Footer
        </div>
    )
}

const parent=React.createElement("div",{className: "child"},[
    React.createElement("h1",{},"Teast heading"),
    React.createElement("h2",{},"Working Properly")
]);
const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);