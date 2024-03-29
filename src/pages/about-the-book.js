import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import FrontBook from '../../static/books/main_book.png'
import { Helmet } from 'react-helmet'

const ATB = (props)=>{


    const slug =(props.location.href);
    
	const disqusConfig = {
	  shortname: 'mark-greathouse',
	  config: { identifier:  12, slug}
    }
    

	return (
		<>
		 	<Layout>
                <Helmet title="About the Book | Mark Greathouse" />
		 		<Nav pathExt={props.path}/>
                 
		 		<Banner
                    spanFirst={`About The`}
                    contextHeading={`Book`}
                 />

                <main className="wrapperMain">
                    <div 
                        className="container"
                        id="book-containers" >

                            <BookInfo
                                data={{
                                    title:`Dancing For Fun:`,
                                    spanFirst: `Group Dancing For All Ages - Book 1`,
                                    imgSrc: FrontBook,
                                    id:'the_gifted_one',
                                    content:
                                    `
                                    <p>
                                    Dancing is a universal and primal form of expression, and it is something we can all enjoy. What’s more, it’s a healthy and fun way to bring more exercise into our lives. Anyone, at any age, can enjoy group dancing, from the very young children to senior citizens.
                                    </p> 
                                    
                                    <p>
                                    This guide presents a series of original group dances inspired by both folk and contemporary dances. It focuses on dance as a way for anyone and everyone to engage in movement while having fun and interacting with others.
                                    </p>

                                    <p>
                                    Author Mark L. Greathouse, in collaboration with his wife, Helena, offers original piano compositions and professionally written choreography designed to match the music exactly. To learn the dances, it is best to go to the links to the online videos demonstrating each dance and the music to go with it.
                                    </p>

                                    <p>
                                    Improve your coordination, bring more movement into your life, and have fun with dancing! Dancing for Fun can show you how. 
                                    </p>
                                    
                                    `,

                                    ebooks:{
                                        amazon :'https://www.amazon.com/Dancing-Fun-Book-Group-Ages-ebook/dp/B08464KBY9/',
                                        barnes: 'https://www.barnesandnoble.com/w/dancing-for-fun-mark-l-greathouse/1136305114?ean=9781643458564', 
                                    },
                                    paperback:{
                                        amazon:'https://www.amazon.com/Dancing-Fun-Book-Group-Ages/dp/1643458558/',
                                        barnes:'https://www.barnesandnoble.com/w/dancing-for-fun-mark-l-greathouse/1136305114',
                                        booksamillion:'https://www.booksamillion.com/p/Dancing-Fun/Mark-L-Greathouse/9781643458557',
                                    }
                                }} 
                            />
                            <div className="commentSection">
                                <div id="disqus_thread">
                                    <DiscussionEmbed {...disqusConfig} />
                                </div>
                            </div>
                    </div>	
                </main>


		 	</Layout>
		</>
	)
}


export default ATB;