/*Here we will see how can we build objects in javascript*/
const fitBitData = {
  totalSteps: 203443,
  totalMiles: 2002.2,
  avgCaloriesBurn: 5755,
  workoutsThisWeek: "5 to 7",
  avgGoodSleep: "2:13",
  1: "one",
  10: "Ten",
};
console.log(fitBitData[1]);
console.log("Total Steps==> ", fitBitData.totalSteps);
console.log("You walk total Steps ", fitBitData["totalSteps"]);
/*
NOTE:
    WE CAN ACCESS THE DATA THROUGH OBJECT IN TWO WAYS
    ONE (.) THROUGH DOT OPERATOR
    SECOND ([]) THROUGH SQUARE BRACKETS SAME LIKE ARRAYS.
    BUT IN [] WE PASS ANY NUMBER WHICH WE USE AS KEY 
    IN OBJECTS.  
    BUT FOR KEY_VALUES LIKE STRINGS YOU MUST NEED TO 
    WRITE THEM AS STRING IN SQUARE BRACKETS.
*/
