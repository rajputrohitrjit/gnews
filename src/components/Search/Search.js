import React, {Component} from 'react';
import './Search.css';
import {Button, Form, Input} from 'reactstrap';

class Search extends Component{

  state = {
    searchTopic :"",
    date : ""
  }

  handleChange =  (event)  =>
  {  
    this.setState({searchTopic:event.target.value});
  };

  
  handleChangeD =  (event)  =>
  {   
    // console.log(this.state.date);
    this.setState({date:event.target.value});
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.searchForTopic(this.state.searchTopic, this.state.date);
  };

  render()
  {
    return(
      <div className="search">
      <p className="text-center font-italic position-static font-weight-bold" >Search any topic, news, blog....</p>
      <Form onSubmit={this.handleSubmit} inline style={{marginLeft:'auto', marginRight:'auto'}}>
        <Input className="topHeadlines"
              type="text" value={this.state.searchTopic}
              onChange={this.handleChange} placeholder="Search Here"/>

        <Input className="topHeadlines"
        type="date" min="1970-01-01" name="datetime" 
           placeholder="Published Till Date" value={this.state.date}
           onChange={this.handleChangeD} />

        <Button className="topHeadlines" type="submit" color="secondary">Search</Button>
     
      </Form>
    </div>
  );
  }
    
}
export default Search;