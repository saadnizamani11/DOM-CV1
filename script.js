

var body =document.body
var image = document.createElement("img");
body.appendChild(image)

var img = document.createElement("img");
img.src ="SAADBG.png";
image.style.height="10px";
img.style.marginLeft ="450px";
img.style.borderRadius = "50%";
// img.style.boxShadow= "rgba(228, 247, 247,0.1)";
body.appendChild(img);


var edu = document.createElement("h1");

var eduContent = document.createTextNode("Education");
edu.style.color = "Black";
edu.style.marginLeft ="450px";
edu.appendChild(eduContent);
body.appendChild(edu);

var ul = document.createElement("ul");
var bsc = document.createTextNode("BSc : SAU TandoJam : \(1st Division)");
ul.style.marginLeft ="450px";
ul.style.fontSize ="30px";
ul.style.color = "Black";
ul.appendChild(bsc);
body.appendChild(ul);


var ul = document.createElement("ul");
var college = document.createTextNode("Intermediate : Government Degree Collage Tando Jam : \(B Grade)");
ul.style.marginLeft ="450px";
ul.style.fontSize ="30px";
ul.style.color = "Black";
ul.appendChild(college);
body.appendChild(ul);


var ul = document.createElement("ul");
var school = document.createTextNode("Matric : St Pauls High School: \(B Grade)");
ul.style.marginLeft ="450px";
ul.style.fontSize ="30px";
ul.style.color = "Black";
ul.appendChild(school);
body.appendChild(ul);


var h1 = document.createElement("h1");
var skills = document.createTextNode("Skills");
h1.style.color = "Black";
h1.style.marginLeft ="450px";
h1.appendChild(skills);
body.appendChild(h1);


var ul = document.createElement("ul");
var skills = document.createTextNode("HTML, CSS, JavaScript");
ul.style.marginLeft ="450px";
ul.style.fontSize ="40px";
ul.style.color = "Black";
ul.appendChild(skills);
body.appendChild(ul);


var h1 = document.createElement("h1");
var contact = document.createTextNode("Contact");
h1.style.color = "Black";
h1.style.marginLeft ="450px";
h1.appendChild(contact);
body.appendChild(h1);


var ea = document.createElement("ea");
var contact = document.createTextNode("muhammadsaadniz@gmail.com");
ea.style.color = "Black";
ea.style.marginLeft ="450px";
ea.style.fontSize ="40px"
ea.appendChild(contact);
body.appendChild(ea);

var na = document.createElement("na");
var contact = document.createTextNode("03123244362");
document.write("<br>");
document.write("<br>");
na.style.color = "Black";
na.style.marginLeft ="450px";

// na.style.
na.style.fontSize ="30px"
na.appendChild(contact);
body.appendChild(na);