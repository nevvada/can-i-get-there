const GetData = () => {
  fetch('http://web.mta.info/developers/data/nyct/nyct_ene.xml')
    .then(res => res.text())
    .then(data => {
      console.log('biiiitch', data);
    });
};

export default GetData;
