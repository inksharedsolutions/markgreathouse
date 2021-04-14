import React from 'react'
import {Link} from 'gatsby'
import AuthorImg from '../../static/author/main_author.png'
import ReactPlayer from 'react-player/youtube'

const LowerMain = ()=>{
    return(
        <>
            <section className="author-section">
        
                <div className="grid-two-columns" id="author-container">
                    <div className="wrapper-auth-content auth-img-container">
                        <img src={AuthorImg} alt="author mugshot"/>
                    </div>

                    <div className="wrapper-auth-content" id="auth-content-wrapper">    
                        <p className="italic-tag margin-off"></p>
                        <h1>    
                            The Author
                        </h1>

                        <p className="author-content">
                            Mark has played music ever since his father introduced him to the accordion at age five.  He won several awards for his accordion performances in Oregon before going to Europe during his college years to study German, where in the late 1960’s he met his future Czech wife Helena.
                            <Link to="/about-the-author"
                             className="link-read">
                                read more
                            </Link>
                        </p>
                        
                        <p className="margin-off auth-name">
                            Mark Greathouse
                        </p>

                        <span className="span-tagline italic-tag">
                            Author & Writer
                        </span>
                        
                    </div>
                </div>
          
            </section>
            <section className="radio-interview">
                <div className="container-gt">
                    <div className="grid-two-columns" id="radio-body">  
                        <div className="grid-child-content">
                            <h5>Mark Greathouse</h5>

                            <h1>
                                <span>Dance</span>
                                <span>Videos</span>
                            </h1>

                            <p>
                            Click and learn few more dances here.
                            </p>

                            <button>
                                <Link to="/videos">
                                    See More Videos
                                </Link>
                            </button>
                            
                        </div>
                        <div className="grid-child-video">
                            <div className="player-wrapper">
                                <ReactPlayer
                                    className="react-player"
                                    url={"http://www.youtube.com/watch?v=A87PJ30fKpI"}
                                    width="100%"
                                    height="400px"
                                    controls={true}
                                    playIcon
                                />
                            </div>
                        </div>                
                    </div>
                </div>
            </section>
        </>
    )
}

export default LowerMain 