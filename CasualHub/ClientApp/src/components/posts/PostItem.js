import React, { Component } from 'react';

class PostItem extends Component {
    state = {  }
    render() { 
        const {post}=this.props;
        return ( 
            <div className="col-md-6">
                <div className="card">
                    <img className="card-img-top" src={post.image} alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{post.title}</h5>
                        <p className="card-text">{post.desctiption}</p>
                        <a href="/" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default PostItem;