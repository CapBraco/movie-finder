import './App.css';
import './styles.css';
function App() {
  return (
    <div className='window-margin'>
  
      <div className="window">

        <aside className="sidebar">
          <div className="top-bar">
            <p className="logo">REPLEX</p>
          </div>

          <div className="search-box">
            <input type="text" placeholder="Search..."/>
            <p className="fa fa-search"></p>
          </div>

          <menu className="menu">
            <p className="menu-name">Movie trailers</p>
            <ul>
              <li className="active">
                <a href="#">Action / Adventure</a>
                <ul>
                  <li><a href="#">Latest</a></li>
                  <li className="active"><a href="#">Popular</a></li>
                  <li><a href="#">Coming soon</a></li>
                  <li><a href="#">Staff picks</a></li>
                </ul>
              </li>
              <li><a href="#">Animation</a></li>
              <li><a href="#">Comedy</a></li>
              <li><a href="#">Documentaries</a></li>
              <li><a href="#">Drama</a></li>
              <li><a href="#">Horror</a></li>
              <li><a href="#">Sci-Fi  / Fantasy</a></li>
              <li><a href="#">List A-Z</a></li>
            </ul>

            <div className="separator"></div>

            <ul className="no-bullets">
              <li><a href="#">Latest news</a></li>
              <li><a href="#">Critic reviews</a></li>
              <li><a href="#">Box office</a></li>
              <li><a href="#">Top 250</a></li>
            </ul>

            <div className="separator"></div>
          </menu>
        </aside>


        <div className="main" role="main">

          <div className="top-bar">

            <div className="profile-box">
              <div className="circle"></div>
              <span className="arrow fa fa-angle-down"></span>
            </div>

            <ul className="top-menu">
              <li className="menu-icon trigger-sidebar-toggle">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </li>
              <li><a href="#">Headlines</a></li>
              <li><a href="#">Articles</a></li>
              <li className="active"><a href="#">Movies & Films</a></li>
              <li><a href="#">Television</a></li>
              <li><a href="#">Music</a></li>
              <li><a href="#">Celebrities</a></li>
            </ul>

          </div>


          <div className="featured-movie">
            <img className="cover" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/22043/backdrop_ggwxvq_1.jpg" alt="" className="cover" />
            <p className="corner-title">Staff pick</p>

            <div className="bottom-bar">
              <div className="title-container">
                <span className="fa fa-play-circle"></span>
                <b>Non-stop</b> Trailer #1
              </div>

              <div className="right">
                <div className="stars">
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star-half-o"></span>
                  <span className="fa fa-star-o"></span>
                </div>
                <div className="share">
                  <icon className="fa fa-share-square"></icon> Share
                </div>
              </div> 
            </div> 
          </div> 


          <div className="movie-list">
            <div className="title-bar">
              <div className="left">
                <p className="bold">Popular Trailers</p>
                <p className="grey">Action / Adventure</p>
              </div>
              <div className="right">
                <a className="blue" href="#">Rating <i className="fa fa-angle-down"></i></a>
                <a href="#">Newest</a>
                <a href="#">Oldest</a>
              </div>
            </div> 

            <ul className="list">
              <li>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/22043/2014-03-08_140412_oavbye_1.png" alt="" className="cover" />
                <p className="title">Sin City: A Dame To Kill For</p>
                <p className="genre">Action, Crime</p>
              </li>
              <li>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/22043/2014-03-08_140329_aawn02_1.png" alt="" className="cover" />
                <p className="title">Transcendence</p>
                <p className="genre">Action, Drama</p>
              </li>
              <li>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/22043/2014-03-08_140239_kyg9i7_1.png" alt="" className="cover" />
                <p className="title">Need For Speed</p>
                <p className="genre">Action, Crime</p>
              </li>
              <li>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/22043/2014-03-08_140052_dq4dyx_1.png" alt="" className="cover" />
                <p className="title">The Amazing Spiderman</p>
                <p className="genre">Action, Adventure</p>
              </li>
              <li>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/22043/2014-03-08_140104_tdgzka_1.png" alt="" className="cover" />
                <p className="title">Pompeii</p>
                <p className="genre">Action, Adventure</p>
              </li>
              <li>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/22043/2014-03-08_140248_fmufrz_1.png" alt="" className="cover" />
                <p className="title">Divergent</p>
                <p className="genre">Action, Sci-Fi</p>
              </li>
              <li>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/22043/2014-03-08_140401_aewzsy_1.png" alt="" className="cover" />
                <p className="title">Guardians of the Galaxy</p>
                <p className="genre">Action, Adventure</p>
              </li>
              <li>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/22043/2014-03-08_140339_wck2gw_1.png" alt="" className="cover" />
                <p className="title">X-Men: Days of Fury</p>
                <p className="genre">Action, Adventure</p>
              </li>
              <li>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/22043/2014-03-08_140311_rj1det_1.png" alt="" className="cover" />
                <p className="title">Captain America: The Winter Soilder</p>
                <p className="genre">Action, Adventure</p>
              </li>
              <li>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/22043/2014-03-08_140248_fmufrz_1.png" alt="" className="cover" />
                <p className="title">Divergent</p>
                <p className="genre">Action, Sci-Fi</p>
              </li>
              <li>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/22043/2014-03-08_140132_bcnfqk_1.png" alt="" className="cover" />
                <p className="title">RoboCop (2014)</p>
                <p className="genre">Action, Crime</p>
              </li>
              <li>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/22043/2014-03-08_140329_aawn02_1.png" alt="" className="cover" />
                <p className="title">Transcendence</p>
                <p className="genre">Action, Drama</p>
              </li>
              <li>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/22043/2014-03-08_140239_kyg9i7_1.png" alt="" className="cover" />
                <p className="title">Need For Speed</p>
                <p className="genre">Action, Crime</p>
              </li>
              <li>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/22043/2014-03-08_140104_tdgzka_1.png" alt="" className="cover" />
                <p className="title">Pompeii</p>
                <p className="genre">Action, Adventure</p>
              </li>
              <li>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/22043/2014-03-08_140412_oavbye_1.png" alt="" className="cover" />
                <p className="title">Sin City: A Dame To Kill For</p>
                <p className="genre">Action, Crime</p>
              </li>
              <li>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/22043/2014-03-08_140339_wck2gw_1.png" alt="" className="cover" />
                <p className="title">X-Men: Days of Fury</p>
                <p className="genre">Action, Adventure</p>
              </li>
              <li>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/22043/2014-03-08_140052_dq4dyx_1.png" alt="" className="cover" />
                <p className="title">The Amazing Spiderman</p>
                <p className="genre">Action, Adventure</p>
              </li>
              <li>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/22043/2014-03-08_140248_fmufrz_1.png" alt="" className="cover" />
                <p className="title">Divergent</p>
                <p className="genre">Action, Sci-Fi</p>
              </li>
            </ul>

            <a href="#" className="load-more">Show more movies <span className="fa fa-plus"></span></a>

          </div>


        </div>

      </div>
    </div>
  )
}

export default App;
