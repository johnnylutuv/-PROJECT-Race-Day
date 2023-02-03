// step1
let raceNumber = Math.floor(Math.random() * 1000);

// step2
const earlyRegistered = true;

// step3
const runnerAge = 23;

// step4/5/6/7/8/9
if (runnerAge > 18 && earlyRegistered){
  raceNumber += 1000;
  console.log('Your race time is at 09:30AM. Race number is ${raceNumber}.');
} else if (runnerAge > 18 && !earlyRegistered){
  console.log('Your race time is at 11:00AM, Race number is ${raceNumber}.')
} else if (runnerAge < 18){
  console.log('Your race time is at 12:30PM, Race number is ${raceNumber}.')
} else{
  console.log('Please go and register first to race')
}


console.log(raceNumber);
