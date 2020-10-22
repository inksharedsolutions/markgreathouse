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
                            Mark has played music ever since his father introduced him to the accordion at age five.  He won several awards for his accordion performances in Oregon before going to Europe during his college years to study German, where in the late 1960’s he met his future Czech wife Helena.  They were both foreign students at the University of Hamburg in Germany. The attraction was mutual, and when Helena discovered Mark could learn anything she could sing, he added his unique accompaniment to her music. As students in Germany they performed several months together in an international folklore cafe in Hamburg.  In 1970 they were married in the Historic Prague Old Town City Hall, and later that year they came to the United States, where they have lived ever since.  They frequently travel back to Europe to visit family and friends and perform their music.
                            </p>

                            <p>              
                            Mark’s professional career was first spent teaching German and Russian for several years at the college level.   He later worked for the Federal Government, Bonneville Power Administration (an agency of the U.S. Department. of Energy) from which he retired.
                            </p>

                            <p>He enjoys playing Czech, German, Russian and American folk songs.  His repertoire includes music from several European countries.  He also plays traditional American songs and musical standards, and he especially enjoys classical and popular solos arranged for the accordion.</p>
                            <p>Music composition on the piano has always been a strong interest for him, but only recently after he retired did he begin to compose many piano pieces. He began writing his first compositions in 2008 and continued to compose for the piano.  Mark and Helena have now published two dance books of group dances for all ages choreographed to his compositions, Dancing for Fun, Books 1 and 2.  These melodies were some of his first compositions.  Later many of his compositions were recorded on CDs played by the well-known Czech pianist Daniel Wiesner.  All of these CDs were recorded in Prague and therefore they are titled “Originals from Prague” vol. 1 - 5.  Besides these instrumental numbers, some of Mark’s compositions have lyrics primarily written by Aletha McKennon.  They are all on the CD “Oregon Dreaming”.  Besides that, one of their popular CDs is “Czech and Slovak Folk Music”, featuring Helena singing to Mark’s accordion accompaniment.  All these CDs are available through CD Baby (www.cdbaby.com). </p>
                            <p>Currently Mark is making many of his compositions available as accordion arrangements (solos, duets and trios).  They can be purchased as sheet music.  Contact him at the following email address if you are interested:  markhelenagreathouse@gmail.com.</p>
                            <p>In 2001 Helena and Mark formed a duo, ‘GREAT HOUSE of Music’, which focuses on performance.  They have performed in many places both in the US and overseas.  They now have their own original variety show incorporating some of his songs and as well as familiar melodies.  The show is called “You Do Speak English, Don’t You?” and is a cabaret style musical comedy.  Through dialog and music, they trace their lives together first in Germany and then in the U.S.  The theme centers upon the challenges of their lives together as a Czech-American couple.  They first introduced this show at the annual Fertile Ground Festival of New Works in Portland, Oregon in 2014.  Since then they have been performing this show in many venues in Oregon.  Then in 2017 for the next three years they began to tour the show in Texas.  In 2020 they will present the show in the Chicago area.  </p>
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