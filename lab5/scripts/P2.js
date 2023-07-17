let input = prompt("Enter a positive integer:");
let list = [];
/*function สำหรับรับ input เรื่อยๆ จนกว่าจะเจอเลขติดลบ*/
function readInput() {
  console.log(input);
  console.log(list);
  while (input >= 0 || isNaN(input)) {
    let parsedInput = parseInt(input);
    if (!isNaN(parsedInput) && parsedInput > 0) {
      if (input != " " && Number.isInteger(Number(input))) {
        list.push(parsedInput);
      }
    }
    input = prompt("Enter a positive integer:");
    readInput();
  }
  return list;
}
/*ฟังก์ชั่นสำหรับหาค่าเฉลี่ยน, มากสุด, น้อยสุด*/
function displayStats(list) {
  if (list.length > 0) {
    let sum = list.reduce((a, b) => a + b, 0);
    let average = (sum / list.length).toFixed(2);
    let min = Math.min(...list);
    let max = Math.max(...list);
    alert(
      "Average: " + average + "\nMinimum: " + min + "\nMaximum: " + max
    );
  } else {
    alert("Average: 0" + "\nMinimum: 0" + "\nMaximum: 0");
  }
}
displayStats(readInput());
/*or*/
/*    list = readInput();
      displayStats(list);  */