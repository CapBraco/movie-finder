import './App.css';
import './styles.css';
import GenresContainer  from './containers/GenresContainer';

function App() {
  return (
    <div className='window-margin'>
      <div className="window">

        <div className="main" role="main">

          <div className="top-bar">
{/* 
            <div className="profile-box">
              <div className="circle"></div>
              <span className="arrow fa fa-angle-down"></span>
            </div>
               */}
            {/* <ul className="top-menu">
              <li className="menu-icon trigger-sidebar-toggle">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </li>
              <li className="active"><a href="#">Movies & Films</a>
              </li>
            </ul> */}

          </div>
          <div className="movie-list">
            <div className="title-bar">
              <div className="left">
                <p className="bold">Popular Trailers</p>
                <GenresContainer  />
              </div>
              {/* <div className="right">
                <a className="blue" href="#">Rating <i className="fa fa-angle-down"></i></a>
                <a href="#">Newest</a>
                <a href="#">Oldest</a>
              </div> */}
            </div> 
            <details className="load-more">
              <summary>Show more movies</summary>
              <div>No more movies available</div>
            </details>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App;
