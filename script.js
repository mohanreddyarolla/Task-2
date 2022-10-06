let selectedOptionId = {};

//Adding alphabetical buttons dynalically
let element = document.createElement("button");
let iTag = document.createElement("i");
element.classList.add("alpha-button", "alpha-icon");
element.type = "button";
iTag.className = "fa-solid fa-user-large";
element.appendChild(iTag);

let alphaSearch = document.querySelector("#alphabert-search");
alphaSearch.appendChild(element);
for (let i = 65; i <= 90; i++) {
  let char = String.fromCharCode(i);

  let element = document.createElement("button");
  element.classList.add("alpha-button", "alphabets");
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
    allFilters.style["top"] = "100px";

    let filters = document.querySelector("#filters");
    filters.style["display"] = "none";
    let clossFilter = document.querySelector("#open-filter-icon");
    clossFilter.style["display"] = "block";

    let content = document.querySelector("#content");
    content.style["display"] = "block";

    document.querySelector("#input input").placeholder = "Enter";
    document.querySelector("#input input").style["width"] = "80px";
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
    filters.style["color"] = "black";

    let content = document.querySelector("#content");
    content.style["display"] = "flex";

    document.querySelector("#input input").placeholder = "Enter any keyword";
    document.querySelector("#input input").style["width"] = "fit-content";
  }
};
onresize = open;

//collecting employee details

let employeeArray = [];
let employeeCount = 0;

function collectEmployeeDetails() {
  let empId;
  if (localStorage.employeeCount) {
    empId = localStorage.employeeCount;
    localStorage.employeeCount = parseInt(localStorage.employeeCount) + 1;
  } else {
    empId = 1;
    empId = empId.toString();
    localStorage.employeeCount = 2;
  }

  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var prefferedName = document.getElementById("PrefferedName").value;
  var email = document.getElementById("email").value;
  var jobTitile = document.getElementById("jobTitle").value;
  var department = document.getElementById("department").value;
  var phoneNumber = document.getElementById("phoneNumber").value;
  var skypeId = document.getElementById("skypeId").value;
  var image = document.getElementById("uploadedImage").value;

  /*
  document.getElementById("uploadedImage").addEventListener('change',function ()
  {
    let imageReader = new FileReader();
    
    imageReader.addEventListener('load',()=>
    {
      employeeObject['profileImage'] = imageReader.result;
    })

    imageReader.readAsDataURL(this.file[0]);
  console.log(imageReader);

  });*/
  let employeeData = {
    firstName: firstName,
    lastName: lastName,
    prefferedName: prefferedName,
    email: email,
    jobTitile: jobTitile,
    department: department,
    phoneNumber: phoneNumber,
    skypeId: skypeId,
  };

  let employeeRecord = {};

  if (localStorage.employeeRecord) {
    employeeRecord = JSON.parse(localStorage.employeeRecord);
  } else {
    localStorage.employeeRecord = employeeRecord;
  }
  employeeRecord[empId] = employeeData;

  localStorage.employeeRecord = JSON.stringify(employeeRecord);

  addInDashboard(firstName, lastName, jobTitile, department);
  addInSearchTable(jobTitile, department, empId);

  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("PrefferedName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("jobTitle").value = "";
  document.getElementById("department").value = "";
  document.getElementById("phoneNumber").value = "";
  document.getElementById("skypeId").value = "";
}

function loadDashboard() {
  if (localStorage.employeeRecord) {
    let employeeRecord = JSON.parse(localStorage.employeeRecord);
    let ids = Object.keys(employeeRecord);
    console.log(ids);

    ids.forEach((id) => {
      firstName = employeeRecord[id].firstName;
      lastName = employeeRecord[id].lastName;
      jobTitile = employeeRecord[id].jobTitile;
      department = employeeRecord[id].department;

      addInDashboard(firstName, lastName, jobTitile, department);
    });
  }
}

//Adding Employee Details to dashboard
function addInDashboard(firstName, lastName, jobTitile, department) {
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

  let name = firstName.concat(" ", lastName);

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

//search by department, location and JobTitles
function addInSearchTable(jobTitle, department, empId) {
  let searchTable = {};

  if (localStorage.searchTable) {
    searchTable = JSON.parse(localStorage.searchTable);
  }

  if ("JobTitle" in searchTable) {
    if (jobTitle in searchTable["JobTitle"]) {
      searchTable["JobTitle"][jobTitle].push(empId);
    } else {
      searchTable["JobTitle"][jobTitle] = [empId];
    }
  } else {
    searchTable["JobTitle"] = {};
    searchTable["JobTitle"][jobTitle] = [empId];
  }

  if ("Department" in searchTable) {
    if (department in searchTable["Department"]) {
      searchTable["Department"][department].push(empId);
    } else {
      searchTable["Department"][department] = [empId];
    }
  } else {
    searchTable["Department"] = {};
    searchTable["Department"][department] = [empId];
  }
  localStorage.searchTable = JSON.stringify(searchTable);
  loadSearchTable();
}

function loadSearchTable() {
  let searchTable = {};

  if (localStorage.searchTable) {
    searchTable = JSON.parse(localStorage.searchTable);
    document.getElementById("filters").innerHTML = "";
    let searchItems = Object.keys(searchTable);
    searchItems.forEach((searchItem) => {
      itemsDiv = document.createElement("div");
      itemsDiv.id = searchItem;
      let heading = document.createElement("h4");
      heading.innerText = searchItem;
      itemsDiv.appendChild(heading);
      document.getElementById("filters").appendChild(itemsDiv);

      let items = Object.keys(searchTable[searchItem]);
      items.forEach((item) => {
        let subitem = document.createElement("div");

        subitem.innerText =
          item + "(" + searchTable[searchItem][item].length + ")";

        subitem.className = "optionDeSelected";
        subitem.id = item;
        subitem.setAttribute(
          "onclick",
          "optionClicked(this.id,document.getElementById(this.id).parentElement.id);"
        );
        // console.log(subitem);
        itemsDiv.appendChild(subitem);
      });
    });
  }
}

function optionClicked(id, head) {
  let searchTable = JSON.parse(localStorage.searchTable);

  item = document.getElementById(id);

  if (item.className == "optionSelected") {
    item.className = "optionDeSelected";

    searchTable[head][id].forEach((option) => {
      if (selectedOptionId[option] == 1) {
        delete selectedOptionId[option];
      } else {
        selectedOptionId[option] -= 1;
      }
    });
  } else {
    item.className = "optionSelected";

    searchTable[head][id].forEach((option) => {
      //option = option.toString();

      if (selectedOptionId[option]) {
        selectedOptionId[option] += 1;
      } else {
        selectedOptionId[option] = 1;
      }
    });
    //console.log(subitem);
  }
  loadFilteredProfiles();
  if (Object.keys(selectedOptionId).length === 0) {
    loadDashboard();
  }
}

function loadFilteredProfiles() {
  document.getElementById("employee-dashboard").innerHTML = "";
  let employeeRecord = JSON.parse(localStorage.employeeRecord);
  let optionsList = Object.keys(selectedOptionId);
  optionsList.forEach((id) => {
    firstName = employeeRecord[id].firstName;
    lastName = employeeRecord[id].lastName;
    jobTitile = employeeRecord[id].jobTitile;
    department = employeeRecord[id].department;

    addInDashboard(firstName, lastName, jobTitile, department);
  });
}
