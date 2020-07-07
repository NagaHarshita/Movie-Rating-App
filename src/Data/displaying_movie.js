import React ,{ Component }  from 'react';
import movie from './movie_data'
import 'antd/dist/antd.css';
import user from './user'
import { Rate} from 'antd';
import './Navigation'
import { Button } from 'antd/lib/radio';
import './displaying movie.css'
class displaying_movie extends Component{

  constructor(props, {match}) {
    super(props, {match});
    this.state = {
        ID : props.match.params.id,
        value:0,
      }
    };
   
    handleChange = value => {
      this.setState({ 
        value:{value}, });
    };
  
  
    handleSubmit=()=>{
        var obj= {movie:movie[this.state.ID].title, rating:this.state.value}
        console.log( JSON.stringify(obj));
    }
render(){
  const { value } = this.state.value;
  const p=movie[this.state.ID].director_id;
return (
  console.log('came'),
  
  <div>
     <div className="img" >
     <img src={movie[this.state.ID].big_posture} height="350px" width="800px" align="middle" alt="hello"></img>
     </div>
     <br/>
       <div  className="desc">
            <div>
               <span className="time">
               <i className="fa fa-calendar" />{" "}
                </span>{" "} 
                      Date of release : {movie[this.state.ID].release_date}<br/>
               <span className="star">
               <i className="fa fa-star" />{" "}
               </span>{" "} 
                      Average Rating : {movie[this.state.ID].avg_rating } <br/>
                      Director : {user[p].name}
     <div className="stars"> 
        <Rate  onChange={this.handleChange} value={value} allowHalf allowClear className="submit"/>
        {value ? <span className="ant-rate-text" style={{color:'#86ddf8'}}>{value}</span> : ''}
      <div>
      <Button onClick= {this.handleSubmit} className="button">Submit Rating </Button></div>
          </div>

            </div>
            <div>
            {movie[this.state.ID].description}
            </div>
       </div>
          
          <br/>
          </div>     
          
 );
}
}


export default displaying_movie;