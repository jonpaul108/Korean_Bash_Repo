import React from 'react'

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props)
    this.playAudio = this.playAudio.bind(this);
  }

  playAudio() {
    audio_tag.play();
  }

  render() {
    return (
      <div>
        <audio ref="audio_tag" src={this.props.soundFile} controls autoPlay/>
      </div>
    );
  }
}

export default AudioPlayer;