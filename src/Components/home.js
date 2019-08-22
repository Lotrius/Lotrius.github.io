import React from 'react';
import Nav from './nav'

const Home = ({ onRouteChange, route }) => {
    return (
        <div>
            <Nav onRouteChange={onRouteChange} route={route}></Nav>
            <div class="row home animated fadeIn">
                <div class="col col-sm-auto picture">
                    <div id="profile">
                        <img class="portrait" src={require("../Pics/me.jpg")} itemprop="image" alt="Avatar" />
                    </div>
                </div>
            </div>

            <div class="col col-sm-auto info">
                <div id="profile">
                    <h1>Maybe something will go here????</h1>>
                </div>
            </div>

            <footer class="bg-dark">
                <ul>
                    <li>
                        <a
                            id="fb"
                            href="https://www.facebook.com/solomon.kim.319"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <img class="social" src={require("../Pics/fb.png")} alt="Facebook" />
                        </a>
                    </li>
                    <li>
                        <a
                            id="github"
                            href="https://github.com/Lotrius"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <img class="social" src={require("../Pics/github.png")} alt="GitHub" />
                        </a>
                    </li>
                    <li>
                        <a
                            id="linkedin"
                            href="https://www.linkedin.com/in/solomon-kim/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <img class="social" src={require("../Pics/linkedin.png")} alt="LinkedIn" />
                        </a>
                    </li>
                </ul>
                <h1 id="copyright">Do I actually need to copyright this page??</h1>
            </footer>
        </div>
    )
}


export default Home;