import React, { Component } from 'react';
import api from '../services/api'

import './Feed.css';

import more from '../assets/more.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';

export default class Feed extends Component{
    state = {
        feed: [],
    };

    async componentDidMount() {
        const response = await api.get('posts');

        this.setState({ feed: response.data });
    }

    render(){
        return(
            <section id="post-list">
                { this.state.feed.map(post => (
                   <article>
                        <header>
                            <div className="user-info">
                                <span>{ post.author }</span>
                                <span className="place">{ post.place }</span>
                            </div>
                            <img src={more} alt="Mais"/>
                        </header>
                        <img src={`http://localhost:3333/files/${post.image}`} alt=""/>
                        <footer>
                            <div className="actions">
                                <img src={like} alt="Like"/>
                                <img src={comment} alt="Comment"/>
                                <img src={send} alt="Send"/>
                            </div>

                            <strong>{post.likes} curtidas</strong>
                            <p>{post.description}</p>
                            <span>{ post.hashtags }</span>
                        </footer>
                    </article> 
                )) }
            </section>
        )
    }
}