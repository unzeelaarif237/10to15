// 1
var emptyArray = [];
// 2
emptyArray[0] = "Yes it's right";
// 3
var subjects = ["Maths", "English", "Urdu", "Science"];
// 4
var Score = [100,90,30,55];
// 5
var booleans = [true,false,true,true];
// 6
var mixed = ["Alishah", 17, "khi", true];
// 7
var qualification = ["SSC","HSC","BSC","BS","BCOM","MS","M.PHIL","phD"];
for (var i = 0; i < qualification.length; i++) {
    document.write(qualification[i] + "<br>");
}
// 8
document.write('<br>')
var names = ["Umer", "Zainab", "Ayan"];
var obtained = [340, 290, 456];
var total = 500;
document.write ("Score of " + " " + names[0] + " " + obtained[0] +". " +"Percentage is: " + (obtained[0] / total)*100 + "%" );
document.write('<br>');
document.write ("Score of " + " " + names[1] + " " + obtained[1] +". " +"Percentage is: " + (obtained[1] / total)*100 + "%" );
document.write('<br>');
document.write ("Score of " + " " + names[2] + " " + obtained[2] +". " +"Percentage is: " + (obtained[2] / total)*100 + "%" );
document.write('<br>');

// 9
var colors = ["orange", "Green", "Red"];
document.write("Current colors: " + colors + "<br>");

//color to add at the beginning
var data = prompt("What color do you want to add at the beginning?");
colors.unshift(data); // Add the new color at the start
document.write("After adding a color (start): " + colors + "<br>");

// color to add at the end
var data1 = prompt("What color do you want to add at the end?");
colors.push(data1); // Add the new color at the end
document.write("After adding a color (end): " + colors);

// remove a color at the begining
document.write('<br>')
var data2 = prompt("After that gonna remove the color from the begining");
colors.shift(); // Add the new color at the end
document.write("After remove a color (start): " + colors);

// remove a color at the ending
document.write('<br>')
var data3 = prompt("After that gonna remove the color from the ending");
colors.pop(); // Add the new color at the end
document.write("After adding a color (end): " + colors);


document.write('<br>');
// Convert the index to a number
index = parseInt(prompt("In which index number you want to add a color?"));
data3 = prompt("what color?")

// Add the color at the specified index
if (index >= 0 && index <= colors.length) {
    colors.splice(index, 0, data3); // Insert color at the specified index
    document.write("After adding the color at index " + index + ": " + colors);
} else {
    document.write("Invalid index! Please enter a number between 0 and " + colors.length);
}

document.write('<br>');
// Prompt for an index to remove
var indexToRemove = parseInt(prompt("At which position (index) do you want to remove a color?"));

// Remove the color at the specified index
if (indexToRemove >= 0 && indexToRemove < colors.length) {
    colors.splice(indexToRemove, 1); // Remove the color at the specified index
    document.write("After removing the color at index " + indexToRemove + ": " + colors);
} else {
    document.write("Invalid index for removing! Please enter a number between 0 and " + (colors.length - 1) + ".");
}

// 10
document.write('<br>');
var scores = [345,876,456,900,124,23];
document.write(scores);
document.write('<br>');
scores.sort();
document.write("After sorting:" + scores);


document.write('<br>');
var cities = ["Khi", "Isl", "lhr" , "Peshawar", "Quetta"];
document.write(cities);
document.write('<br>');
selectedCities="";
selectedCities = cities.slice(1,3);
document.write(selectedCities);


document.write('<br>');
var arr = ["This", "is", "my ", "cat"];
document.write(arr.join());


document.write('<br>');
document.write('<br>');
// 13
var devices1 = ["keyboard", "mouse", "Pc", "Monitor", "Hard disk"];
for (var i = 0; i < devices1.length; i++) {
    document.write(devices1[i] + "<br>");
}

// 14
document.write('<br>');
document.write('<br>');
var devices1 = ["keyboard", "mouse", "Pc", "Monitor", "Hard disk"];
for (var i = devices1.length - 1; i >= 0; i--) {
    document.write(devices1[i] + "<br>");
}

// 15
document.write('<br>');
document.write('<br>');
// Array to store phone manufacturers
var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Tecno"];

// Create the select element
document.write("<select>");

// Create options for each manufacturer
for (var i = 0; i < phoneManufacturers.length; i++) {
    document.write("<option>" + phoneManufacturers[i] + "</option>");
}

// Close the select element
document.write("</select>");







