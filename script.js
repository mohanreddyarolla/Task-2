let selectedOptionId = {};
let no_option_selected = 0;
let save_btn_clicked = false;
let initial_jobTitle = "";
let initial_department = "";

//loading all Initail content

//Adding alphabetical buttons dynalically
function addAlphabets() {
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
}
addAlphabets();

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
  if (save_btn_clicked) {
    save_changes();
    save_btn_clicked = false;
    return;
  }
  let btn = document.getElementById("add_save_btn");
  btn.setAttribute("onclick", "collectEmployeeDetails();");
  btn.innerText = "Add";

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
  addInSearchTable("JobTitle", jobTitle, empId);
  addInSearchTable("Department", department, empId);
  clear_form();
  document.getElementById("add_employee_close_btn").click();
  display_alert("Registered Successfully");
}

function clear_form() {
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
    "<h4>" + name + "</h4>" + "<P>" + jobTitle + "<p>" + "<P>" + department + "<p>";
  empData.appendChild(social);

  //adding photo and employee data
  employeeCard.appendChild(photo);
  employeeCard.appendChild(empData);

  //adding it to the main page
  let profile = document.querySelector("#employee-dashboard");
  profile.appendChild(employeeCard);
}

//search by department, location and JobTitles
function addInSearchTable(title, value, empId) {
  let searchTable = {};

  if (localStorage.searchTable) {
    searchTable = JSON.parse(localStorage.searchTable);
  }

  if (title in searchTable) {
    if (value in searchTable[title]) {
      searchTable[title][value].push(empId);
    } else {
      searchTable[title][value] = [empId];
    }
  } else {
    searchTable[title] = {};
    searchTable[title][value] = [empId];
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

        subitem.innerText = item + "(" + searchTable[searchItem][item].length + ")";

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

let present_profile_id = "1";
function open_profile(id) {
  // let btn = document.getElementById('add_bmployee_btn');
  present_profile_id = id;

  let employeeRecord = JSON.parse(localStorage.employeeRecord);

  document.getElementById("model_profiel_prefferedName").innerText =
    employeeRecord[id].prefferedName;
  document.getElementById("model_profiel_jobTitle").innerText = employeeRecord[id].jobTitle;
  document.getElementById("model_profiel_department").innerText = employeeRecord[id].department;
  document.getElementById("model_full_name").innerText = employeeRecord[id].firstName.concat(
    " ",
    employeeRecord[id].lastName
  );
  document.getElementById("model_jobTitle").innerText = employeeRecord[id].jobTitle;
  document.getElementById("model_department").innerText = employeeRecord[id].department;
  document.getElementById("model_email").innerText = employeeRecord[id].email;
  document.getElementById("model_phone").innerText = employeeRecord[id].phoneNumber;
  document.getElementById("model_skypeId").innerText = employeeRecord[id].skypeId;
}

function edit_prfile() {
  //consol;e.log(present_profile_id);
  let employeeRecord = JSON.parse(localStorage.employeeRecord);

  initial_jobTitle = employeeRecord[present_profile_id].jobTitle;
  initial_department = employeeRecord[present_profile_id].department;

  console.log(initial_department, "++...+++", initial_jobTitle);
  //displaying original saved data
  document.getElementById("firstName").value = employeeRecord[present_profile_id].firstName;
  document.getElementById("lastName").value = employeeRecord[present_profile_id].lastName;
  document.getElementById("PrefferedName").value = employeeRecord[present_profile_id].prefferedName;
  document.getElementById("email").value = employeeRecord[present_profile_id].email;
  document.getElementById("jobTitle").value = employeeRecord[present_profile_id].jobTitle;
  document.getElementById("department").value = employeeRecord[present_profile_id].department;
  document.getElementById("phoneNumber").value = employeeRecord[present_profile_id].phoneNumber;
  document.getElementById("skypeId").value = employeeRecord[present_profile_id].skypeId;

  document.getElementById("profile_close").click();
  setTimeout(function () {
    // function code goes here
    console.log("lkgjlksf");
    document.getElementById("add_bmployee_btn").click();
  }, 400);

  let btn = document.getElementById("add_save_btn");
  btn.innerText = "Save";
  save_btn_clicked = true;
  //console.log(document.getElementById('add_bmployee_btn'));
  //document.getElementById('add_bmployee_btn').click();
}

function remove_from_search_Table(title, value, id) {
  let searchTable = JSON.parse(localStorage.searchTable);
  console.log(searchTable[title][value], title, value);

  if (searchTable[title][value].length == 1) {
    delete searchTable[title][value];
    console.log(searchTable[title]);
  } else {
    for (var i = searchTable[title][value].length - 1; i >= 0; i--) {
      if (searchTable[title][value][i] === id) {
        searchTable[title][value].splice(i, 1);
      }
    }
  }
  console.log(searchTable[title][value]);
  console.log(searchTable);
  localStorage.searchTable = JSON.stringify(searchTable);
}

function save_changes() {
  let employeeRecord = JSON.parse(localStorage.employeeRecord);
  //console.log(employeeRecord[present_profile_id]);
  console.log(initial_department, "+++++", initial_jobTitle);
  employeeRecord[present_profile_id].firstName = document.getElementById("firstName").value;
  employeeRecord[present_profile_id].lastName = document.getElementById("lastName").value;
  employeeRecord[present_profile_id].prefferedName = document.getElementById("PrefferedName").value;
  employeeRecord[present_profile_id].email = document.getElementById("email").value;
  employeeRecord[present_profile_id].jobTitle = document.getElementById("jobTitle").value;
  employeeRecord[present_profile_id].department = document.getElementById("department").value;
  employeeRecord[present_profile_id].phoneNumber = document.getElementById("phoneNumber").value;
  employeeRecord[present_profile_id].skypeId = document.getElementById("skypeId").value;

  if (initial_jobTitle != document.getElementById("jobTitle").value) {
    console.log(initial_jobTitle, "---", document.getElementById("jobTitle").value);
    remove_from_search_Table("JobTitle", initial_jobTitle, present_profile_id);
    addInSearchTable("JobTitle", document.getElementById("jobTitle").value, present_profile_id);
  }
  if (initial_department != document.getElementById("department").value) {
    remove_from_search_Table("Department", initial_department, present_profile_id);
    addInSearchTable("Department", document.getElementById("department").value, present_profile_id);
  }

  localStorage.employeeRecord = JSON.stringify(employeeRecord);
  loadDashboard();
  clear_form();

  let btn = document.getElementById("add_save_btn");
  btn.setAttribute("onclick", "collectEmployeeDetails();");
  btn.innerText = "Add";
  document.getElementById("add_employee_close_btn").click();

  display_alert("Your Data Updated Successfully");
}

function display_alert(message) {
  document.getElementById("alert").style["display"] = "block";
  document.getElementById("alert_message").innerText = message;
  setTimeout(function () {
    document.getElementById("alert").style["display"] = "none";
  }, 2000);
}
