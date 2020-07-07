import React ,{ Component }  from 'react';
import 'antd/dist/antd.css';
import Movie_data from './Data/movie_data';
import {
  BrowserRouter as Router, Link} from "react-router-dom";
import './App.css';
class App extends Component {
  constructor(props){
    super(props);
this.state = {
  posts : Movie_data
}; 
}


    
render() {  
  const {posts} = this.state;
  let movies = null;
      movies = ( 
      posts.map(movie  =>
        ( 
           <div className="title" className="card"  >
           <div>
             <Link to={`/${movie.movie_id}`}> <img src={movie.poster} height = "280"  width =  "200" alt="hi" key={movie.movie_id} >
            </img><br/>
             <div className="transtext">{movie.title}<br/> rating : {movie.avg_rating}</div></Link><br />
           </div> 
           </div> 
        ))
    
        
      );
     
      return (
        
      <div className="App">
        
          <div className="hi">
          {movies}  
          </div>
          
          

      </div>
          
      

         
      );
    }
  }
export default App;









/*<div className="card" key={movie.movie_id} >

<div className="info colored">
          <h3 className="overlay-title">
            {movie.title}
          </h3>
          <div className="overlay-description">
            {movie.description}
          </div>

          <div className="overlay-info">
            <div className="rating-time-score-container">
              <div className="sub-title Rating-data">
                <b>
                  Imdb
                  <span className="details">
                    {" "}
                    {movie.avg_rating}/5{" "}
                  </span>
                </b>
              </div>
              <div className="time-data">
                <b>
                  <span className="time">
                    <i className="fa fa-clock-o" />{" "}
                  </span>{" "}
                  <span className="details">
                    {movie.release_date}
                  </span>
                </b>
              </div></div>
              </div>
              </div>












<div className="stars"> 
           <Rate />
           </div>
<Navigation />
        <Router>
           <div>
           <ul>
             <li><Link to={`/${movie.movie_id}`}   key={movie.movie_id} >Hello</Link></li>{' '}
           </ul>
           <Route  path="/:id"  component={Child} data={Movie_data}/>
           </div>
          </Router>

         const Child =({match}) =>console.log('{match.params.id}') || (
    // const p = {match.params.id};
    
     <div className="hi">

       <h2>{match.params.id}</h2>
     </div>
     );
  );  

*/