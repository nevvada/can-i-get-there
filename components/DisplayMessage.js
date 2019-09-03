const DisplayMessage = props => {
  console.log(props);
  return (
    <>
      <aside
        className={
          props.elevatorsWorking ? 'elevatorsWorking' : 'elevatorsNotWorking'
        }
      >
        <div className="message-area">
          <img
            src={
              props.elevatorsWorking
                ? '/static/images/happyface.svg'
                : '/static/images/sadface.svg'
            }
            alt={props.elevatorsWorking ? 'happy face' : 'sad face'}
            className="happy-sad-face"
          />
          {props.displayMessageText}
        </div>
      </aside>
    </>
  );
};

export default DisplayMessage;
