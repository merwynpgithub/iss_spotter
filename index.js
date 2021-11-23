const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});

//Testing invalid IP: invalidIPHere
//Valid IP: 142.113.114.195
fetchCoordsByIP('142.113.114.195', (error, data) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned co-ordinates:' , data);
});

fetchISSFlyOverTimes({latitude: 42.2979, longitude: -83.0527}, (error, data) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned fly times:' , data);
});