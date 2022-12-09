import Vimeo from '@vimeo/player'
import _throttle from 'lodash.throttle'

const player = new Vimeo('vimeo-player');

const onPlay = ({ seconds }) =>{
    localStorage.setItem('videoplayer-current-time', seconds);
}

player.on('timeupdate', _throttle(onPlay, 1000));
player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));