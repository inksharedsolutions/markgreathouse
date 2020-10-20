import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import AuthorImg from '../../static/author/main_author.png'

const ATB = (props)=>{
	
	return (
		<>
		 	<Layout>
                 
		 		<Nav pathExt={props.path}/>
                 <Banner 
                 spanFirst={`About The`} 
                 contextHeading={`Author`}/>
                  
		 		<div className="container">
				    <section className="body-author-contents columns">
                         
                        <div className="heading-quote column">
                            <div className="author-image-container">
                                <img src={AuthorImg} />
                            </div>

                            <div className="heading-quote">
                                <h4>
                                    {/* <p>I Am amidst you now</p>
                                    <p>My miracles to perform</p>
                                    <p>I Am not dead</p>
                                    <p>I Am alive and I Am yours to behold</p> */}
                                </h4>
                                
                                <span className="ata-span-fx">
                                    {/* author quote */}
                                </span>
                            </div>
                        </div>

                        <article className="article-section column" id="author">
                            <p>
                            Mark and Helena Greathouse are a musical duo and live in Portland, Oregon.  Mark plays the accordion and Helena sings and dances.  They call themselves Greathouse of Music.  Mark’s introduction to music began at the age of five when his father, a music teacher in Portland, Oregon, introduced him to the accordion.  During his teenage years Mark won several awards for his accordion performances before going to Europe to study German, where he met his future wife, Helena, from Prague.
                            </p>

                            <p>              
                            Since age seven Helena sang on the Czechoslovak National Radio. Throughout her childhood Helena performed in musicals on both the Czechoslovak National TV and live theater in her native Czechoslovakia.  Her dance teacher was a direct pupil of Isadora Duncan, Jarmila Jerabkova.  In teenage years Helena turned to competitive sports, competing in rhythmic gymnastics for 12 years in Europe on the advanced level.  That led to pursuing an international judging career later in her life (including three World Championships, Pan American and Goodwill Games, and two Olympics).  
                            </p>

                            <p>
                            Mark loves to compose melodies, especially on the piano.  It turns out that they lend themselves quite well to dance.  This combination of melody and dance has led to writing “Dancing for Fun”, Books 1 and 2.  The dances have been professionally choreographed and Helena’s extensive rhythmic gymnastics background has helped immensely in capturing the exact movement in written form.  
                            </p>
                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author |  Writer </span>
                                    <span className="ata-name">Mark Greathouse</span>
                                </span>
                            </p>
                        </article>

                    </section>
                </div>

		 	</Layout>
		</>
	)
}


export default ATB;