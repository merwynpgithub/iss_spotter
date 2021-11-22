const { fetchMyIP, fetchCoordsByIP } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   let answer = JSON.parse(ip.body).ip;
//   console.log('It worked! Returned IP:' , answer);
//   return answer;
// });

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
  console.log('It worked! Returned data:' , data);
});