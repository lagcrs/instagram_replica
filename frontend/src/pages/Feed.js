import React, { Component } from 'react';
import './Feed.css';
import more from '../assets/more.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';

export default class Feed extends Component{
    render(){
        return(
            <section id="post-list">
                <article>
                    <header>
                        <div className="user-info">
                            <span>Larissa Georgina</span>
                            <span className="place">São Paulo</span>
                        </div>
                        <img src={more} alt="Mais"/>
                    </header>
                    <img src="http://localhost:3333/files/7998_star_wars.jpg" alt=""/>
                    <footer>
                        <div className="actions">
                            <img src={like} alt="Like"/>
                            <img src={comment} alt="Comment"/>
                            <img src={send} alt="Send"/>
                        </div>

                        <strong>900 curtidas</strong>
                        <p>Um post muito massa!</p>
                        <span>#react #omnistack</span>
                    </footer>
                </article>
                <article>
                    <header>
                        <div className="user-info">
                            <span>Larissa Georgina</span>
                            <span className="place">São Paulo</span>
                        </div>
                        <img src={more} alt="Mais"/>
                    </header>
                    <img src="http://localhost:3333/files/7998_star_wars.jpg" alt=""/>
                    <footer>
                        <div className="actions">
                            <img src={like} alt="Like"/>
                            <img src={comment} alt="Comment"/>
                            <img src={send} alt="Send"/>
                        </div>

                        <strong>900 curtidas</strong>
                        <p>Um post muito massa!</p>
                        <span>#react #omnistack</span>
                    </footer>
                </article>
            </section>
        )
    }
}