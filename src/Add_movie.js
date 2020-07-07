import React, { Component } from 'react'
import './Add_movie.css'
import 'antd/dist/antd.css';
import './index.css';
import { Menu, Dropdown, Button, Icon, message } from 'antd';
import Director from './Data/user'
import { Select } from 'antd';
const { Option } = Select;
const children = [];
for (let i = 6; i < 18; i++) {
  children.push(<Option key={Director[i].name} style={{color:'black' , fontSize:'20px'}}>{Director[i].name}</Option>);
}
const children_directors=[];
for (let i = 1; i < 6; i++) {
  children_directors.push(<Option key={Director[i].name} style={{color:'black' , fontSize:'20px'}}>{Director[i].name}</Option>);
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

class Add_movie extends Component{
    constructor() {
        super();
        this.state = {};
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        
        
        this.setState({ 
            res: stringifyFormData(data),
        });
        
      }
    
      render() {
        
        return (
            <div className="form">
            <div>
            <form onSubmit={this.handleSubmit}>
        
              <div>
              <label htmlFor="Title">Enter Title of the movie</label><br/>
              <input id="Title" name="Title" type="text" />
              </div>
    
              <div>
              <label htmlFor="release_date">Enter release_date</label><br/>
              <input id="date" name="date" type="text" />
              </div>
    
              <div>
              <label htmlFor="avg_rating">Enter the average rating</label><br/>
              <input id="avg_rating" name="avg_rating" type="text" />
              </div>
              
              <div>
              <label htmlFor="description">Enter the description</label><br/>
              <input id="description" name="description" type="text" />
              </div>

              <div>
              <label htmlFor="poster">Enter the url of the poster</label><br/>
              <input id="poster" name="poster" type="text" />
              </div>
              
              <button className="button">Send data!</button><br/><br/>  
            </form>
            </div>
            <div id="components-dropdown-demo-dropdown-button">

          <br/><br/>

          <Select
    mode="multiple"
    style={{ width: '150%' ,fontSize:'20px'}}
    placeholder="Please select the directors"
    onChange={handleChange}
   
  >{children_directors}
  </Select>
  <br/> <br/>

          <Select
    mode="multiple"
    style={{ width: '150%' ,fontSize:'20px'}}
    placeholder="Please select the actors"
    onChange={handleChange}
    
    
  >{children}
  </Select>
           </div>
            {this.state.res && console.log(this.state.res) }
             
            </div>
            
        );
      }
    }

    
    
    function stringifyFormData(fd) {
      const data = {};
        for (let key of fd.keys()) {
          data[key] = fd.get(key);
      }
      return JSON.stringify(data, null, 2);
    }
      
      function handleMenuClick(e) {
        message.info('Click on menu item.');
        console.log('click', e);
      }
      

export default Add_movie;