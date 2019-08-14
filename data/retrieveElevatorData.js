const retrieveElevatorData = async () => {
  await fetch('http://web.mta.info/developers/data/nyct/nyct_ene.xml').then(
    res => {
      console.log(res);
    }
  );
};

export default retrieveElevatorData;

// setTimeout(retrieveElevatorData, 2000);
