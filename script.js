//Adding alphabetical buttons dynalically
let element = document.createElement("button");
let iTag = document.createElement("i");
element.classList.add('alpha-button','alpha-icon')
element.type = "button";
iTag.className = "fa-solid fa-user-large";
element.appendChild(iTag);

let alphaSearch = document.querySelector("#alphabert-search");
alphaSearch.appendChild(element);
for (let i = 65; i <= 90; i++) {
  let char = String.fromCharCode(i);

  let element = document.createElement("button");
  element.classList.add('alpha-button','alphabets')
  element.type = "button";
  element.innerHTML = char;

  let alphaSearch = document.querySelector("#alphabert-search");
  alphaSearch.appendChild(element);
}

//Adding options in select tag to get filter detailes

for (let i = 1; i < 5; i++) {
  let option = "option";
  option = option.concat(i.toString());

  let element = document.createElement("option");
  element.value = option;
  element.innerText = option;

  let select = document.querySelector("select#select-employee");
  select.appendChild(element);
}

//Add employee detailes
function addEmployee() {
  for (let i = 0; i < 18; i++) {
    let employeeCard = document.createElement("div");
    employeeCard.className = "employee-card";

    //div for image
    let photo = document.createElement("div");
    photo.className = "photo";

    let img = document.createElement("img");
    img.src = src = "/Images/profile-1.png";

    photo.appendChild(img);

    //div for employee data
    let empData = document.createElement("div");
    empData.className = "employee-data";

    let name = "Anthony Morris";
    let jobTitile = "Product Manager";
    let department = "IT Department";

    //div for icons
    let social = document.createElement("div");
    social.className = "socail";
    addSocialIcons(social);

    empData.innerHTML =
      "<h4>" +
      name +
      "</h4>" +
      "<P>" +
      jobTitile +
      "<p>" +
      "<P>" +
      department +
      "<p>";
    empData.appendChild(social);

    //adding photo and employee data
    employeeCard.appendChild(photo);
    employeeCard.appendChild(empData);

    //adding it to the main page
    let profile = document.querySelector("#employee-dashboard");
    profile.appendChild(employeeCard);
  }
}

//function to add social icons in employee data

function addSocialIcons(div) {
  let icon;
  let atag;

  //icon for phone

  icon = document.createElement("i");
  icon.className = "fa-solid fa-square-phone";
  atag = document.createElement("a");
  atag.href = "..";
  atag.appendChild(icon);
  div.appendChild(atag);

  //icon for email
  icon = document.createElement("i");
  icon.className = "fa-solid fa-envelope";
  atag = document.createElement("a");
  atag.href = "..";
  atag.appendChild(icon);
  div.appendChild(atag);

  //icon for message
  icon = document.createElement("i");
  icon.className = "fa-solid fa-comment";
  atag = document.createElement("a");
  atag.href = "..";
  atag.appendChild(icon);
  div.appendChild(atag);

  //icon for star
  icon = document.createElement("i");
  icon.className = "fa-solid fa-star";
  atag = document.createElement("a");
  atag.href = "..";
  atag.appendChild(icon);
  div.appendChild(atag);

  //icon for heart
  icon = document.createElement("i");
  icon.className = "fa-solid fa-heart";
  atag = document.createElement("a");
  atag.href = "..";
  atag.appendChild(icon);
  div.appendChild(atag);
}
addEmployee();

function openFilter() {
  let clossFilter = document.querySelector("#closs-filter-icon");
  clossFilter.style["display"] = "block";

  let openFilter = document.querySelector("#open-filter-icon");
  openFilter.style["display"] = "none";

  //open filter options
  let filters = document.querySelector("#filters");
  filters.style["display"] = "block";
  filters.style["background-color"] = "rgba(0,177,252,255)";
  filters.style["color"] = "white";

  let allFilters = document.querySelector("#all-filters");
  allFilters.style["position"] = "fixed";
  allFilters.style["background-color"] = "rgba(0,177,252,255)";
}

function closeFilter() {
  let clossFilter = document.querySelector("#closs-filter-icon");
  clossFilter.style["display"] = "none";

  let openFilter = document.querySelector("#open-filter-icon");
  openFilter.style["display"] = "block";

  //closing the filters
  let filters = document.querySelector("#filters");
  filters.style["position"] = "static";
  filters.style["background-color"] = "white";
  filters.style["display"] = "none";
}

const open = () => {
  var mq = window.matchMedia("screen and (max-width: 620px)");
  if (mq.matches) {
    // window width is at less than 620px
    let allFilters = document.querySelector("#all-filters");
    allFilters.style["position"] = "fixed";
    allFilters.style['top']='100px';

    let filters = document.querySelector("#filters");
    filters.style["display"] = "none";
    let clossFilter = document.querySelector("#open-filter-icon");
    clossFilter.style["display"] = "block";

    let content = document.querySelector('#content');
    content.style['display'] = 'block';

   // let alphabets = document.getElementsByClassName('alphabets');
    let alphabets = document.querySelectorAll('button');
    console.log(alphabets);
    alphabets.style['display'] = 'none';

  } else {
    // window width is greater than 620px
    let clossFilter = document.querySelector("#closs-filter-icon");
    clossFilter.style["display"] = "none";

    let openFilter = document.querySelector("#open-filter-icon");
    openFilter.style["display"] = "none";

    let allFilters = document.querySelector("#all-filters");
    allFilters.style["position"] = "static";
    allFilters.style["background-color"] = "white";

    let filters = document.querySelector("#filters");
    filters.style["display"] = "block";
    filters.style["position"] = "static";
    filters.style["background-color"] = "white";

    let content = document.querySelector('#content');
    content.style['display'] = 'flex';
  }
};
onresize = open;
