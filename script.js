let selectedOptionId = {};
let no_option_selected = 0;
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
  element.classList.add("alpha-button", "alphabets", "optionDeSelected");
  element.id = char;
  element.type = "button";
  element.innerHTML = char;
  element.setAttribute("onclick", "optionClickedInAlphabets(this.id);");

  let alphaSearch = document.querySelector("#alphabert-search");
  alphaSearch.appendChild(element);
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
  filters.style["background-color"] = "rgb(132, 191, 250)";
  filters.style["color"] = "white";

  let allFilters = document.querySelector("#all-filters");
  allFilters.style["position"] = "fixed";
  allFilters.style["background-color"] = "rgb(132, 191, 250)";
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
  var jobTitle = document.getElementById("jobTitle").value;
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
    jobTitle: jobTitle,
    department: department,
    phoneNumber: phoneNumber,
    skypeId: skypeId,
  };

  //setting default preffered Name
  if (employeeData.prefferedName == "") {
    employeeData.prefferedName = employeeData.firstName;
  }

  let employeeRecord = {};

  if (localStorage.employeeRecord) {
    employeeRecord = JSON.parse(localStorage.employeeRecord);
  } else {
    localStorage.employeeRecord = employeeRecord;
  }
  employeeRecord[empId] = employeeData;

  localStorage.employeeRecord = JSON.stringify(employeeRecord);

  addInDashboard(empId);
  addInSearchTable(jobTitle, department, empId);

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
  document.getElementById("employee-dashboard").innerHTML = "";
  if (localStorage.employeeRecord) {
    let employeeRecord = JSON.parse(localStorage.employeeRecord);
    let ids = Object.keys(employeeRecord);

    ids.forEach((id) => {
      addInDashboard(id);
    });
  }
}

//Adding Employee Details to dashboard
function addInDashboard(id) {
  let employeeRecord = JSON.parse(localStorage.employeeRecord);
  firstName = employeeRecord[id].firstName;
  lastName = employeeRecord[id].lastName;
  jobTitle = employeeRecord[id].jobTitle;
  department = employeeRecord[id].department;

  let employeeCard = document.createElement("div");
  employeeCard.className = "employee-card";
  employeeCard.id = id;
  employeeCard.setAttribute("onclick", "open_profile(this.id)");
  employeeCard.setAttribute("data-target", "#profileModel");
  employeeCard.setAttribute("data-toggle", "modal");

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
    jobTitle +
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
        subitem.id = searchItem.concat("_", item);
        subitem.setAttribute("onclick", "optionClickedInFilters(this.id);");
        // console.log(subitem);
        itemsDiv.appendChild(subitem);
      });
    });
  }
}

function optionClickedInAlphabets(alphabet) {
  let employeeRecord = JSON.parse(localStorage.employeeRecord);
  let ids = Object.keys(employeeRecord);
  item = document.getElementById(alphabet);
  ids.forEach((id) => {
    //console.log(employeeRecord[id].firstName[0],employeeRecord[id].firstName[0].toString().toLowerCase());
    let a1 = employeeRecord[id].firstName[0].toLowerCase();
    let a2 = alphabet.toLowerCase();
    //console.log(a1,a2);
    if (a1 == a2) {
      if (item.className == "optionSelected") {
        AddIn_SelecetOptionId_OnDeSelect(id);
      } else {
        AddIn_SelecetOptionId_OnSelect(id);
      }
    }
  });

  if (item.className == "optionSelected") {
    item.className = "optionDeSelected";
    no_option_selected -= 1;
  } else {
    item.className = "optionSelected";
    no_option_selected += 1;
  }
  loadFilteredProfiles();
  if (no_option_selected < 1) {
    loadDashboard();
  }
}

function AddIn_SelecetOptionId_OnSelect(id) {
  if (selectedOptionId[id]) {
    selectedOptionId[id] += 1;
  } else {
    selectedOptionId[id] = 1;
  }
}
function AddIn_SelecetOptionId_OnDeSelect(id) {
  if (selectedOptionId[id] == 1) {
    delete selectedOptionId[id];
  } else {
    selectedOptionId[id] -= 1;
  }
}

function optionClickedInFilters(id) {
  let searchTable = JSON.parse(localStorage.searchTable);
  let parsedId = id.split("_");
  let parent = parsedId[0];
  let child = parsedId[1];
  item = document.getElementById(id);

  if (item.className == "optionSelected") {
    item.className = "optionDeSelected";

    searchTable[parent][child].forEach((option) => {
      AddIn_SelecetOptionId_OnDeSelect(option);
    });

    no_option_selected -= 1;
  } else {
    item.className = "optionSelected";

    searchTable[parent][child].forEach((option) => {
      AddIn_SelecetOptionId_OnSelect(option);
    });

    no_option_selected += 1;
  }
  loadFilteredProfiles();
  if (no_option_selected < 1) {
    loadDashboard();
  }
}

function loadFilteredProfiles() {
  document.getElementById("employee-dashboard").innerHTML = "";
  let employeeRecord = JSON.parse(localStorage.employeeRecord);
  let optionsList = Object.keys(selectedOptionId);
  optionsList.forEach((id) => {
    addInDashboard(id);
  });
}

function deSelectOption(parentId) {
  let parent = document.getElementById(parentId);
  let child = parent.children;

  for (let i = 0; i < child.length; i++) {
    child[i].className = "optionDeSelected";
  }
}

function clearFilter() {
  selectedOptionId = {};

  deSelectOption("alphabert-search");
  deSelectOption("JobTitle");
  deSelectOption("Department");
  document.getElementById("enteredInput").value = "";
  document.getElementById("select-employee").value = "prefferedName";
  loadDashboard();
}

//search for the input entered
let current_selected_options = [];
function startSearch() {
  let input = document.getElementById("enteredInput").value;
  let filterBy = document.getElementById("select-employee").value;
  //console.log(filterBy);
  remove_previous_selected_options();
  get_all_values(filterBy, input);
  loadFilteredProfiles();
}

function remove_previous_selected_options() {
  current_selected_options.forEach((id) => {
    AddIn_SelecetOptionId_OnDeSelect(id);
  });
}

function get_all_values(key, value) {
  let employeeRecord = JSON.parse(localStorage.employeeRecord);
  let ids = Object.keys(employeeRecord);
  current_selected_options = [];
  ids.forEach((id) => {
    if (employeeRecord[id][key].toLowerCase() == value.toLowerCase()) {
      AddIn_SelecetOptionId_OnSelect(id);
      current_selected_options.push(id);
    }
  });
}

function open_profile(id) {
  // let btn = document.getElementById('add_bmployee_btn');
  // btn.click();
}
