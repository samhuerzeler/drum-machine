import PropTypes from 'prop-types';

import './AudioDisplay.css';
import './7segment.css';

AudioDisplay.propTypes = {
  audioDisplayName: PropTypes.string.isRequired,
  powerOn: PropTypes.bool.isRequired,
};

function AudioDisplay(props) {
  const { audioDisplayName, powerOn } = props;

  const displayClasses = [];

  for (let i = 0; i < 6; i += 1) {
    if (!audioDisplayName[i] || !powerOn) {
      displayClasses[i] = 'display-container display-off';
    } else {
      displayClasses[i] = `display-container display-${audioDisplayName[i].toLowerCase()}`;
    }
  }

  return (
    <div id="display" className="display__label">
      <p className="display__label--hidden">{audioDisplayName}</p>
      <div className="s-sgm-container">
        <div className={displayClasses[0]}>
          <div className="segment-x segment-a"><span className="segment-border" /></div>
          <div className="segment-y segment-b"><span className="segment-border" /></div>
          <div className="segment-y segment-c"><span className="segment-border" /></div>
          <div className="segment-x segment-d"><span className="segment-border" /></div>
          <div className="segment-y segment-e"><span className="segment-border" /></div>
          <div className="segment-y segment-f"><span className="segment-border" /></div>
          <div className="segment-x segment-g"><span className="segment-border" /></div>
        </div>
        <div className={displayClasses[1]}>
          <div className="segment-x segment-a"><span className="segment-border" /></div>
          <div className="segment-y segment-b"><span className="segment-border" /></div>
          <div className="segment-y segment-c"><span className="segment-border" /></div>
          <div className="segment-x segment-d"><span className="segment-border" /></div>
          <div className="segment-y segment-e"><span className="segment-border" /></div>
          <div className="segment-y segment-f"><span className="segment-border" /></div>
          <div className="segment-x segment-g"><span className="segment-border" /></div>
        </div>
        <div className={displayClasses[2]}>
          <div className="segment-x segment-a"><span className="segment-border" /></div>
          <div className="segment-y segment-b"><span className="segment-border" /></div>
          <div className="segment-y segment-c"><span className="segment-border" /></div>
          <div className="segment-x segment-d"><span className="segment-border" /></div>
          <div className="segment-y segment-e"><span className="segment-border" /></div>
          <div className="segment-y segment-f"><span className="segment-border" /></div>
          <div className="segment-x segment-g"><span className="segment-border" /></div>
        </div>
        <div className={displayClasses[3]}>
          <div className="segment-x segment-a"><span className="segment-border" /></div>
          <div className="segment-y segment-b"><span className="segment-border" /></div>
          <div className="segment-y segment-c"><span className="segment-border" /></div>
          <div className="segment-x segment-d"><span className="segment-border" /></div>
          <div className="segment-y segment-e"><span className="segment-border" /></div>
          <div className="segment-y segment-f"><span className="segment-border" /></div>
          <div className="segment-x segment-g"><span className="segment-border" /></div>
        </div>
        <div className={displayClasses[4]}>
          <div className="segment-x segment-a"><span className="segment-border" /></div>
          <div className="segment-y segment-b"><span className="segment-border" /></div>
          <div className="segment-y segment-c"><span className="segment-border" /></div>
          <div className="segment-x segment-d"><span className="segment-border" /></div>
          <div className="segment-y segment-e"><span className="segment-border" /></div>
          <div className="segment-y segment-f"><span className="segment-border" /></div>
          <div className="segment-x segment-g"><span className="segment-border" /></div>
        </div>
        <div className={displayClasses[5]}>
          <div className="segment-x segment-a"><span className="segment-border" /></div>
          <div className="segment-y segment-b"><span className="segment-border" /></div>
          <div className="segment-y segment-c"><span className="segment-border" /></div>
          <div className="segment-x segment-d"><span className="segment-border" /></div>
          <div className="segment-y segment-e"><span className="segment-border" /></div>
          <div className="segment-y segment-f"><span className="segment-border" /></div>
          <div className="segment-x segment-g"><span className="segment-border" /></div>
        </div>
      </div>
      <label>
      NAME
      {audioDisplayName ? ':' : ''}
      {' '}
      {audioDisplayName}
      </label>
    </div>
  );
}

export default AudioDisplay;