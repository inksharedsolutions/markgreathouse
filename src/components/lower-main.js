import React from 'react'
import {Link} from 'gatsby'
import AuthorImg from '../../static/author/main_author.png'

const LowerMain = ()=>{
    return(
        <>
            <section className="author-section">
        
                <div className="grid-two-columns" id="author-container">
                    <div className="wrapper-auth-content auth-img-container">
                        <img src={AuthorImg} />
                    </div>

                    <div className="wrapper-auth-content" id="auth-content-wrapper">    
                        <p className="italic-tag margin-off">Well done, good and faithful servant</p>
                        <h1>    
                            The Author
                        </h1>

                        <p className="author-content">
                            Mark and Helena Greathouse are a musical duo and live in Portland, Oregon.  Mark plays the accordion and Helena sings and dances.  They call themselves Greathouse of Music.  Mark’s introduction to music began at the age of five when his father, a music teacher in Portland, Oregon, introduced him to the accordion.  During his teenage years Mark won several awards for his accordion performances before going to Europe to study German, where he met his future wife, Helena, from Prague.
                            
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
        </>
    )
}

export default LowerMain 