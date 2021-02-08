const testVar = {}

function testFunc() {
  return "hi"
}


const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}]

function superbowlWin(array){
  
 let a = array.find(array => array.result === "W") 
//  debugger  
return !!a ? a.year : undefined
  
};



superbowlWin(record)




