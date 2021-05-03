import React from 'react';
import './Post.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Fade
  } from 'reactstrap';

const Post = (props) => {

  return (
      <Fade>
      <Card key={props.index} style={{ paddingTop:'0px'}} 
      className="position-static" >
        <CardImg top width="100%" src={props.src}/>
        <CardBody>
          <CardTitle tag="h5" className="Post">
            <a className="Post" href={props.url} target="_blank" rel="noreferrer">
              {props.title}
              </a>
            </CardTitle>
          <CardText>{props.content}</CardText>
          <p className="float-left">{props.source}</p>
          <p className="float-right">{props.publishedAt}</p>
         
        </CardBody>
      </Card>
      </Fade>
    );
}
   


export default Post;