import React, { Component } from 'react'

export default class Content extends Component {

    // handle = (e) => {
    //     e.preventDefault();
    //     window.location.href = window.location.href + "/?="  + this.state.search_value;
    // }


  render() {
    return (
        <div className="content">
        <div className="container">
            <div className="top-games">
                <h3>Top Games</h3>
                <span></span>
            </div>
            <div className="top-game-grids">
                <ul id="flexiselDemo1">
                    <li>
                        <div className="game-grid">
                            <h4>Action Games</h4>
                            <p>Nulla elementum nunc tempus.</p>
                            <img src="assets/images/t1.jpg" className="img-responsive" alt=""/>
                        </div>	
                    </li>
                    <li>
                        <div className="game-grid">
                            <h4>Racing Games</h4>
                            <p>Nulla elementum nunc tempus.</p>
                            <img src="assets/images/t3.jpg" className="img-responsive" alt=""/>
                        </div>
                    </li>
                    <li>
                        <div className="game-grid">
                            <h4>3D Games</h4>
                            <p>Nulla elementum nunc tempus.</p>
                            <img src="assets/images/t4.jpg" className="img-responsive" alt=""/>
                        </div>
                    </li>
                    <li>
                        <div className="game-grid">
                            <h4>Arcade Games</h4>
                            <p>Nulla elementum nunc tempus.</p>
                            <img src="assets/images/t2.jpg" className="img-responsive" alt=""/>
                        </div>	
                    </li>				 				 	
                </ul>
            </div>
        </div>
   </div>
    )
  }
}
