import React from 'react';
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import ReactPlayer from 'react-player/youtube'
import { Helmet } from 'react-helmet';

import Modal from '../components/modal';

// PDFs
import Awakening from '../../static/pdf/AWAKENING.pdf';
import Fall from '../../static/pdf/fall.pdf';
import Just from '../../static/pdf/just.pdf';
import Macek from '../../static/pdf/macek.pdf';
import Mourek from '../../static/pdf/mourek.pdf';
import Rainbow from '../../static/pdf/rainbow.pdf';
import Riverflow from '../../static/pdf/RIVERFLOW.pdf';
import Scrambling from '../../static/pdf/scrambling.pdf';
import Soul from '../../static/pdf/soul.pdf';
import Spring from '../../static/pdf/Spring.pdf';
import Steeping from '../../static/pdf/steeping.pdf';
import Waltz from '../../static/pdf/waltz.pdf';

const Videos = (props) =>{

	return(
		<>
		
		 	<Layout>
                <Helmet title="Videos | Mark Greathouse" />
			 	<Nav pathExt={props.path}/>

                <Banner 
                    spanFirst={``}
                    contextHeading={`Videos`} 
                />

	 			<div className="radio-interviews-content">
				 	<div className="container-gt">
						<h1 className="video-header">Dance Videos</h1>
						<div className="grid-two-columns" style={{height: 'auto', marginBottom: '100px'}}>  
							<div className="radint-vid video-1">
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
								<Modal title="Riverflow" pdf={Riverflow} />
							</div>    
							<div className="radint-vid video-2">
								<div className="player-wrapper">
									<ReactPlayer
										className="react-player"
										url={"http://www.youtube.com/watch?v=qoCX7kasZ2s"}
										width="100%"
										height="400px"
										controls={true}
										playIcon
									/>
								</div>
								<Modal title="Spring Rain" pdf={Spring} />
							</div>
                            <div className="radint-vid video-2">
								<div className="player-wrapper">
									<ReactPlayer
										className="react-player"
										url={"http://www.youtube.com/watch?v=VEFqYQcv-qY"}
										width="100%"
										height="400px"
										controls={true}
										playIcon
									/>
								</div>
								<Modal title="Just Gettin' By" pdf={Just} />
							</div>
                            <div className="radint-vid video-2">
								<div className="player-wrapper">
									<ReactPlayer
										className="react-player"
										url={"http://www.youtube.com/watch?v=841IToBWXqw"}
										width="100%"
										height="400px"
										controls={true}
										playIcon
									/>
								</div>
								<Modal title="Soul Song" pdf={Soul} />
							</div>
                            <div className="radint-vid video-2">
								<div className="player-wrapper">
									<ReactPlayer
										className="react-player"
										url={"http://www.youtube.com/watch?v=JYEkS70ywAo"}
										width="100%"
										height="400px"
										controls={true}
										playIcon
									/>
								</div>
								<Modal title="Rainbow" pdf={Rainbow} />
							</div>
                            <div className="radint-vid video-2">
								<div className="player-wrapper">
									<ReactPlayer
										className="react-player"
										url={"http://www.youtube.com/watch?v=X2gvyjs0Qqw"}
										width="100%"
										height="400px"
										controls={true}
										playIcon
									/>
								</div>
								<Modal title="Fall Calypso" pdf={Fall} />
							</div>
                            <div className="radint-vid video-2">
								<div className="player-wrapper">
									<ReactPlayer
										className="react-player"
										url={"http://www.youtube.com/watch?v=_czE9DVJIHY"}
										width="100%"
										height="400px"
										controls={true}
										playIcon
									/>
								</div>
								<Modal title="Mourek Saunter" pdf={Mourek} />
							</div>
                            <div className="radint-vid video-2">
								<div className="player-wrapper">
									<ReactPlayer
										className="react-player"
										url={"http://www.youtube.com/watch?v=gs8GrqhrO8Y"}
										width="100%"
										height="400px"
										controls={true}
										playIcon
									/>
								</div>
								<Modal title="Macek Rag" pdf={Macek} />
							</div>
                            <div className="radint-vid video-2">
								<div className="player-wrapper">
									<ReactPlayer
										className="react-player"
										url={"http://www.youtube.com/watch?v=PDsVbBfKaYc"}
										width="100%"
										height="400px"
										controls={true}
										playIcon
									/>
								</div>
								<Modal title="Awakening" pdf={Awakening} />
							</div>
                            <div className="radint-vid video-2">
								<div className="player-wrapper">
									<ReactPlayer
										className="react-player"
										url={"http://www.youtube.com/watch?v=7nCZzdNdVmc"}
										width="100%"
										height="400px"
										controls={true}
										playIcon
									/>
								</div>
								<Modal title="Steeping Along" pdf={Steeping} />
							</div>
                            <div className="radint-vid video-2">
								<div className="player-wrapper">
									<ReactPlayer
										className="react-player"
										url={"http://www.youtube.com/watch?v=cMK9GgMT2PA"}
										width="100%"
										height="400px"
										controls={true}
										playIcon
									/>
								</div>
								<Modal title="Waltz in Eb" pdf={Waltz} />
							</div>
                            <div className="radint-vid video-2">
								<div className="player-wrapper">
									<ReactPlayer
										className="react-player"
										url={"http://www.youtube.com/watch?v=wqdqCoIh3QQ"}
										width="100%"
										height="400px"
										controls={true}
										playIcon
									/>
								</div>
								<Modal title="Scrambling" pdf={Scrambling} />
							</div>
						</div>
					</div>
 				</div>
	 		</Layout>

		</>
	)
}

export default Videos;