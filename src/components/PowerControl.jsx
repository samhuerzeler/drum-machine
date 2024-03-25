import PropTypes from 'prop-types';
import classNames from 'classnames';
import './PowerControl.css';

PowerControl.propTypes = {
  powerOn: PropTypes.bool.isRequired,
  setPowerOn: PropTypes.func.isRequired,
  setAudioDisplayName: PropTypes.func.isRequired,
};

function PowerControl(props) {
  const { powerOn, setPowerOn, setAudioDisplayName } = props;

  const handlePowerButtonClick = () => {
    setPowerOn(!powerOn);
    setAudioDisplayName('');
  };

  const ledClass = classNames({
    led: true,
    'led--on': powerOn,
    'led--off': !powerOn,
  });

  const buttonClass = classNames({
    'drum-pad': true,
    'drum-pad--pressed': powerOn,
  });

  return (
    <div className="controllers__on-off">
      <div className="pad">
        <label className="pad__label--bottom" htmlFor="on-off">
         Power Control
        </label>
        <button
          id="on-off"
          className={buttonClass}
          aria-label="On Off button"
          type="button"
          onClick={() => handlePowerButtonClick()}
        />
      </div>
    </div>
  );
}

export default PowerControl;