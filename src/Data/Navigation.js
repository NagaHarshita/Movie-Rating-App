import React from 'react';
import {Route,BrowserRouter as Router, Link,Switch} from "react-router-dom";
import App from 'E:/reactjs/movies/src/App';
import  'E:/reactjs/movies/src/App.css';
import Displaying_movie from'./displaying_movie'
import Add_movie from 'E:/reactjs/movies/src/Add_movie'
const Navigation = () =>{
 
    return (
      
        <div className="header">
        <div className="heading">
 
        </div>
        
        <div >
          <Router>
            <div>
            <span className="star">
               <i className="fa fa-home" />{" "}
             </span>{" "} 

              <Link to="" className="links">Home</Link>
              <div className="add">
              <span className="star">
               <i className="fa fa-film" />{" "}
             </span>{" "} 
            <Link to="create_movie" className="links">Append movies</Link>
            </div>
            </div>
            
              
              
              
            <Switch>
            <Route exact path="/" component={App}/>
            <Route  path='/home' component={App}/>
            <Route  path="/create_movie" component={Add_movie}></Route>
            <Route  path="/:id" component={Displaying_movie}/>
            </Switch>
            
          </Router>
        </div>
     </div>
      
    );
};
export default Navigation;

/*<hr style={{border:'1px solid #86ddf8 ' }}*/