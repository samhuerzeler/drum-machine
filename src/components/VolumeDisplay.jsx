import './VolumeDisplay.css';
import './7segment.css';

function VolumeDisplay(props) {
  const { volume, powerOn } = props;

  let display1Class = 'display-container display-';
  let display2Class = 'display-container display-';
  let display3Class = 'display-container display-';

  if (!powerOn) {
    display1Class += 'off';
    display2Class += 'off';
    display3Class += 'off';
  } else if (volume === 100) {
    display1Class += '1';
    display2Class += '0';
    display3Class += '0';
  } else if (volume > 9) {
    display1Class += 'off';
    display2Class += `${volume.toString()[0]}`;
    display3Class += `${volume.toString()[1]}`;
  } else {
    display1Class += 'off';
    display2Class += 'off';
    display3Class += `${volume.toString()[0]}`;
  }

  return (
    <div className="display__label">
      <div className="s-sgm-container">
        <div className={display1Class}>
          <div className="segment-x segment-a"><span className="segment-border" /></div>
          <div className="segment-y segment-b"><span className="segment-border" /></div>
          <div className="segment-y segment-c"><span className="segment-border" /></div>
          <div className="segment-x segment-d"><span className="segment-border" /></div>
          <div className="segment-y segment-e"><span className="segment-border" /></div>
          <div className="segment-y segment-f"><span className="segment-border" /></div>
          <div className="segment-x segment-g"><span className="segment-border" /></div>
        </div>
        <div className={display2Class}>
          <div className="segment-x segment-a"><span className="segment-border" /></div>
          <div className="segment-y segment-b"><span className="segment-border" /></div>
          <div className="segment-y segment-c"><span className="segment-border" /></div>
          <div className="segment-x segment-d"><span className="segment-border" /></div>
          <div className="segment-y segment-e"><span className="segment-border" /></div>
          <div className="segment-y segment-f"><span className="segment-border" /></div>
          <div className="segment-x segment-g"><span className="segment-border" /></div>
        </div>
        <div className={display3Class}>
          <div className="segment-x segment-a"><span className="segment-border" /></div>
          <div className="segment-y segment-b"><span className="segment-border" /></div>
          <div className="segment-y segment-c"><span className="segment-border" /></div>
          <div className="segment-x segment-d"><span className="segment-border" /></div>
          <div className="segment-y segment-e"><span className="segment-border" /></div>
          <div className="segment-y segment-f"><span className="segment-border" /></div>
          <div className="segment-x segment-g"><span className="segment-border" /></div>
        </div>
      </div>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label>VOLUME</label>
    </div>
  );
}

export default VolumeDisplay;