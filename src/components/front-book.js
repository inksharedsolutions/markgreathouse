import React from 'react'
import FrontBook from '../../static/books/main_book.png'
import Accordions from '../containers/accordions'

const MidBook = (props)=>{
    return(
        <>    
            <section className="upper-main">
                <div className="container-gt separator-line">

                    <div className="grid-two-columns" id="wrapper-two-books">

                        

                        <div className="content-wraps">

                            <span className="italic-tag">Read, listen, and learn in various formats</span>

                            <h1>Dancing For Fun</h1>
                            <span>Group Dancing For All Ages - Book 1</span>
                            <p>
                                Dancing is a universal and primal form of expression, and it is something we can all enjoy.
                            </p>

                            <Accordions/>
                        </div>

                        <div className="book-wraps">
                            <img src={FrontBook}/>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default MidBook