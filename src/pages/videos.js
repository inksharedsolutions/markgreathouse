import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import ReactPlayer from 'react-player/youtube'
import { Helmet } from 'react-helmet';

const videos = (props) =>{
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
							</div>
						</div>
					</div>
 				</div>
	 		</Layout>
		</>
	)
}

export default videos;