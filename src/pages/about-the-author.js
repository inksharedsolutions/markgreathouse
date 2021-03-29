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
                                <img src={AuthorImg} alt="author mugshot"/>
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
                            <p>This book was designed and created by Helena Greathouse, who continues to devote much of her life to the beauty of music, dance, and movement.  Her husband Mark’s original music was used for each of the dances.</p>

                            <p>From age seven throughout her childhood Helena sang on the Czechoslovak National Radio and performed in musicals in principal and leading roles both on Czechoslovak National TV and live theater in her native Czechoslovakia.  Her dance teacher was a direct pupil of Isadora Duncan.  Helena later studied voice with professors of Prague Conservatory of Music and continues to do so now whenever she is in Prague.  She also studies with a professional voice instructor in Oregon where she and Mark live.</p>

                            <p>During her teenage years Helena turned to competitive sports, competing in Rhythmic Gymnastics for 12 years in Europe on the advanced level.  That led to pursuing an international judging career of 29 years representing the United States (including judging at three World Championships, Pan Am Games, Goodwill Games, and two Olympics).  During her competitive years Helena continued to sing as a soloist with a folklore group in Prague.</p>

                            <p>In her adult life, after receiving a Master of Science degree in Statistics / Economics from the University of Prague, School of Economics, Helena worked first as statistician with the State of Oregon and later as a mathematician with the Bonneville Power Administration (BPA, a Federal Agency).  Then both she and Mark took early retirement when it was offered and decided to do what they loved doing as children – focusing on the arts.</p>

                            <p>Helena brought her dance experience from Rhythmic Gymnastics to another dimension, performing again on stage and in film.   In 2001 Helena and Mark formed a duo called “GREATHOUSE of Music”,  <a href="http://www.greathouseofmusic.com/" target="_blank" rel="noopener noreferrer">www.greathouseofmusic.com</a>, which focuses on performance.  In 2010 Helena and Mark made it to the Judges’ Round of America’s Got Talent (as one of the 400 acts that were advanced from the 70,000 initial entries nationwide).</p>

                            <p>Since 2005 Helena sang, acted, and danced in performances with various Portland, Oregon theatres.  As a duo Helena and Mark also appeared repeatedly as guest performers on several Portland variety shows (Miz Kitty’s Parlour Vaudeville Novelty Show, ScratchPDX, Performance Works Northwest and Shadow Vaudeville Variety Show).  In 2008 Helena and Mark represented the modern dance company tEEth in the Ten Tiny Dances event.</p>

                            <p>Mark has played music ever since his father introduced him to the accordion at age five.  He won several awards for his accordion performances in Oregon.  He received a Master of Arts degree in German from Stanford University before going to Europe to continue his German studies.  There he met his future Czech wife Helena while they were both foreign students at the University of Hamburg in Germany.  He taught German for many years in California and Oregon, and later worked and retired from federal service at BPA.</p>

                            <p>Music composition on the piano has always been a strong interest for Mark, but only after he retired did he begin to compose many piano pieces. After studying piano for several years, he began writing his first compositions in 2008 and continued to compose on the piano.  A few of his earliest compositions which lend themselves to dance are contained in this book.</p>

                            <p>The couple has performed in many places in the US, as well as in the Czech Republic, Slovakia, Germany, and Brazil. They have their own original variety show incorporating some of Mark’s songs, as well as familiar melodies. The show is called “You Do Speak English, Don’t You?” and is a cabaret style musical comedy. Through dialog and music, they trace their lives together, first when they met in Germany and then later in the U.S. The theme centers upon the challenges in their lives which they faced as a Czech-American couple. They first introduced this show at the annual Fertile Ground Festival of New Works in Portland, Oregon in 2014. They have performed this show in many venues in Oregon. Then in 2017 for the next three years they began to tour the show in Texas. After 2021 they plan to present this and future shows they create in other regions of the U.S.</p>
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