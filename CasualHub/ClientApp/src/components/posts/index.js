import React, { Component } from 'react';
import EclipseWidget from '../eclipse';
import PostItem from './PostItem';
import axios from 'axios';

class PostsPage extends Component {
    state = { 
        news: [],
        loading: true
    }
    
    componentWillMount() {
        axios.get("/api/posts")
            .then(res => { 
                console.log(res); 
                this.setState({news: res.data, loading: false})
            });
    }

    render() {
        const { news, loading }=this.state;

        const content = news.map(item => 
            <PostItem key={item.id} post={item} />
        );

        return (
            <>
                <h1>Новини нашого села</h1>
                <div className="row">
                    {content}
                </div>

                {loading && <EclipseWidget />}
            </>

        );
    }
}
 
export default PostsPage;