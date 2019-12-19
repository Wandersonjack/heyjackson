import React, { Component } from 'react'
import VideoPlayer from "react-video-js-player"
import '../details/styles/appdetails.css'
import { Body1 } from '../typography/typography'


export default class FullPreview extends Component {
    player = {}
    state = {
      video: {
        src: "https://res.cloudinary.com/wander8jackson/video/upload/v1576763814/UI%27s%20bitofproperty/case-video-bop.mov",
        poster: "https://res.cloudinary.com/wander8jackson/image/upload/v1576747023/UI%27s%20bitofproperty/Dashboard.png",
      },
    }
  
    onPlayerReady(player) {
      console.log("Player is ready: ", player)
      this.player = player
    }
  
    onVideoPlay(duration) {
      console.log("Video played at: ", duration)
    }
  
    onVideoPause(duration) {
      console.log("Video paused at: ", duration)
    }
  
    onVideoTimeUpdate(duration) {
      console.log("Time updated: ", duration)
    }
  
    onVideoSeeking(duration) {
      console.log("Video seeking: ", duration)
    }
  
    onVideoSeeked(from, to) {
      console.log(`Video seeked from ${from} to ${to}`)
    }
  
    onVideoEnd() {
      console.log("Video ended")
    }
    render() {
      return (
        <div className="custom-container">
          <div className="preview">
            <VideoPlayer
              controls={true}
              src={this.state.video.src}
              poster={this.state.video.poster}
              width="1280"
              height="900"
              onReady={this.onPlayerReady.bind(this)}
              onPlay={this.onVideoPlay.bind(this)}
              onPause={this.onVideoPause.bind(this)}
              onTimeUpdate={this.onVideoTimeUpdate.bind(this)}
              onSeeking={this.onVideoSeeking.bind(this)}
              onSeeked={this.onVideoSeeked.bind(this)}
              onEnd={this.onVideoEnd.bind(this)}
            />
            <Body1 text="hello" children="paragraph"/>
          </div>
        </div>
      )
    }
  }
  