let selectedOptionId = {};
let no_option_selected = 0;
let save_btn_clicked = false;
let initial_jobTitle = "";
let initial_department = "";
let employeeArray = [];
let employeeCount = 0;
let current_selected_options = [];
let matching_active_ids = [];
let current_selected_key = "";
let present_profile_id = "1";
let no_alphabets_selected = 0;
let matching_profile_found_in_filterSearch = true;
let defaultImage =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIsAiwMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABAUGAwIBB//EADYQAAICAQIEAQoFAwUAAAAAAAABAgMEBRESITFBkQYTIiNCUWFxgbEyUmLB0XKh4TVTY4KD/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AP3EAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI2Xm4+JHe+xJvpFc2/oVura0qXKjEalYuUp9o/L4mdnOVk3OcnKT6yb5sC6yfKKyW6xaowX5p834Ffbqebb+LImvhHl9iIAOjyb293fbv8A1s915uVX+DItX/dnAAWlGu5le3nHC1fqWz8UW+FreLk7Rm3VY+0+j+plABvkDJaZq12G1Cxuyn8r6x+RqaL68iqNlUlKD6NAdAAAAAAAACk17U3Sni0S2sa9OS9le75llqGTHExZ3S23S9FPu+xi5zlZOU5veUnu2/eB8AAAA60Y12RLhprlL3tdF9QOQLKOiZTXOVS+HE/4OGRpuVjredfFFdXDnsBEAAAm6VqEsC7d86ZP04/uiEAN5XONkIzhJSjJbprueih8msxtSxJvp6UPl3RfAAAAAAGc8p8jiurxl0iuOXzfQpCXq1jt1G+W/SXD4ciIAAAEvTcN5l/C21CPOb/Y01VcKa1XXFRiuiRB0KpQwFNLnZJtv5PYsQAAAptZ06PA8miOzj+OK7/EpDZtKS2kt0+qMffDzV9la9ibj4MDwAAOuLe8bJruj7Et/p3NxFqUVJPdNbowRstHsdmm47b3ajwv6cgJgAAAADDZfPLvf/JL7nIkahDzedfF9rJfcjgAABpdEsUtPrjvzi2n47/uTzNaPmrEucbH6qzk/wBL95pU00mnun0YAAAPsY/KmrMq6xdJTbXiX2s50cel01y9dNbcvZRnQAAAGr8nf9Lh/VL7mUNdoMODS6d++7/uBYAAAAAMp5RU+b1Dj7WxT+q5MrDV6/iPJwnKC3sqfEviu5lPkAAJmn6fZmS3/BUus/2QESMXOSjFNt9ElvuT6b8/TkuOuSr6qNi5ePYvsbFpxY8NMFH3y7v6nZpNbNboCmjr3L0sbn8LP8HG3WMrI9XjVcDf5fSkXMsTGb549L/80dK64VrauEYL9K2AyWRRkVS3yK5xcval3fzORs5RjOPDOKlF9U1uim1HR1s7cRfF1/wBSgdHswB9jFykox6t7I3ONUqaK6l0hFR8DM+T+I781Wyj6unn832/k1QAAAAAAMlrWnvDyHZWvU2P0dvZfuNacsimu+qVVseKEuqAx2BiSzMhVrdRXOT9yNVXXCquNdcVGEVskjhg6esCE0nx8Ut+Lbt2JIAAAAAAAAFLrmCtnlUx2/3EvuVFNU7rY1VrecnskbCUFZFwa3TWzXwOWmaXXgqUt+OyXtPsvcB30/Ehh40ao831k/eySAAAAAAAAAAZylV3j4HUARmmuqPhJ236nxwi+wEcHfzUfiFXFdgOB7jW315HZJLokfQPMYqK5HoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//2Q==";
let search_inputs = {
  jobtitle: [],
  department: [],
  alphabets: [],
  firstname: [],
  prefferedname: [],
};
let image = defaultImage;
//loading all Initail content
addAlphabets();
document.querySelector("#uploadedImage").addEventListener("change", function () {
  //file reader for profile image
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    image = reader.result;
    console.log(image);
  });
  reader.readAsDataURL(this.files[0]);
});
function addAlphabets() {
  let element = document.createElement("button");
  let iTag = document.createElement("i");
  element.id = "alpha-icon";
  element.classList.add("optionDeSelected");
  element.type = "button";
  element.setAttribute("onclick", "optionClickedOnAlphaIcon();");
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
function isInvalid(employeeData) {
  //checks for validity of inputs entered in the form returns true if it is invalid
  let keys = Object.keys(employeeData);
  let invalid = false;
  keys.forEach((id) => {
    let invalidId = "invalid".concat("_", id);

    if (id != "prefferedName" && id != "profileImage") {
      if (
        employeeData[id] == "" ||
        (id == "phoneNumber" && (isNaN(employeeData[id]) || employeeData[id].length != 10))
      ) {
        document.getElementById(invalidId).style["display"] = "block";
        invalid = true;
      } else {
        document.getElementById(invalidId).style["display"] = "none";
      }
    }
  });

  return invalid;
}

//functions for adding new employee details
function addEmployeeClicked() {
  image = defaultImage;
}
function getInputs() {
  //gets the inputs from the form and returns the employee data that contains inputs
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var prefferedName = document.getElementById("PrefferedName").value;
  var email = document.getElementById("email").value;
  var jobTitle = document.getElementById("jobTitle").value;
  var department = document.getElementById("department").value;
  var phoneNumber = document.getElementById("phoneNumber").value;
  var skypeId = document.getElementById("skypeId").value;

  let employeeData = {
    firstName: firstName,
    lastName: lastName,
    prefferedName: prefferedName,
    email: email,
    jobTitle: jobTitle,
    department: department,
    phoneNumber: phoneNumber,
    skypeId: skypeId,
    profileImage: image,
  };

  return employeeData;
}
function collectEmployeeDetails() {
  clearFilter(); //clear all the selected filters
  if (save_btn_clicked) {
    //save changes is for edit profile option
    save_changes();
    return;
  }

  let btn = document.getElementById("add_save_btn");
  btn.setAttribute("onclick", "collectEmployeeDetails();");
  btn.innerText = "Add";

  //generate the employeeID
  let empId;
  if (localStorage.employeeCount) {
    empId = localStorage.employeeCount;
    localStorage.employeeCount = parseInt(localStorage.employeeCount) + 1;
  } else {
    empId = 1;
    empId = empId.toString();
    localStorage.employeeCount = 2;
  }

  let employeeData = getInputs();

  if (isInvalid(employeeData)) {
    document.getElementById("partialClose").click();
    document.getElementById("invalidWarning").style["display"] = "block";
    setTimeout(function () {
      document.getElementById("add_employee_btn").click();
    }, 400);

    return;
  }

  //setting default preffered Name to First name
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
  addInSearchTable("JobTitle", employeeData.jobTitle, empId);
  addInSearchTable("Department", employeeData.department, empId);
  document.getElementById("add_employee_close_btn").click();
  display_alert("Registered Successfully");

  clear_form();
}
function addSocialIcons(div) {
  //function to add social icons in employee data
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
function addInDashboard(id) {
  //Adding Employee Details to dashboard
  let employeeRecord = JSON.parse(localStorage.employeeRecord);
  firstName = employeeRecord[id].firstName;
  lastName = employeeRecord[id].lastName;
  jobTitle = employeeRecord[id].jobTitle;
  department = employeeRecord[id].department;
  profileImage = employeeRecord[id].profileImage;

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
  img.src = profileImage;

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
function loadDashboard() {
  //if no profile is found then display the proper msg
  document.getElementById("noProfileFound").style["display"] = "none";
  document.getElementById("employee-dashboard").innerHTML = "";
  if (localStorage.employeeRecord) {
    let employeeRecord = JSON.parse(localStorage.employeeRecord);
    let ids = Object.keys(employeeRecord);

    ids.forEach((id) => {
      addInDashboard(id);
    });
  }
}

//functions for searching filters
function optionClickedInAlphabets(alphabet) {
  //get the employee details from the local storage
  let employeeRecord = JSON.parse(localStorage.employeeRecord);
  let ids = Object.keys(employeeRecord);
  item = document.getElementById(alphabet);

  //calculate the number of selected alphabets
  if (item.classList.contains("optionSelected")) {
    no_alphabets_selected -= 1;
  } else {
    no_alphabets_selected += 1;
  }

  ids.forEach((id) => {
    let a1 = employeeRecord[id].firstName[0].toLowerCase();
    let a2 = alphabet.toLowerCase();

    if (a1 == a2) {
      if (item.classList.contains("optionSelected")) {
        remove_from_search_inputs("alphabets", id);
      } else {
        save_in_search_inputs("alphabets", id);
      }
    }
  });

  //set the class of selected option as not selected and vice-versa
  if (item.classList.contains("optionSelected")) {
    item.classList.remove("optionSelected");
    item.classList.add("optionDeSelected");
    no_option_selected -= 1;
  } else {
    item.classList.remove("optionDeSelected");
    item.classList.add("optionSelected");
    no_option_selected += 1;
  }
  loadFilteredProfiles();
  if (no_option_selected < 1) {
    //if no option is selected, then all the employee detiles to be displayed
    loadDashboard();
  }
}
function optionClickedInFilters(id) {
  let searchTable = JSON.parse(localStorage.searchTable);
  //splitting the id into parent(jobtitle,depatement) and child(jobtitle values,department values)
  let parsedId = id.split("_");
  let parent = parsedId[1];
  let child = parsedId[2];
  item = document.getElementById(id);

  if (item.className == "optionSelected") {
    item.className = "optionDeSelected";

    searchTable[parent][child].forEach((option) => {
      remove_from_search_inputs(parent, option);
    });

    no_option_selected -= 1;
  } else {
    item.className = "optionSelected";
    searchTable[parent][child].forEach((option) => {
      save_in_search_inputs(parent, option);
    });

    no_option_selected += 1;
  }
  loadFilteredProfiles();
  if (no_option_selected < 1) {
    //if no option is selected, then all the employee detiles to be displayed
    loadDashboard();
  }
}
function addInSearchTable(title, value, empId) {
  //search by department, location and JobTitles
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

  //filters is for normal desktopsite and filter2 is for mibile view
  let fl = ["filters", "filter2"];

  fl.forEach((filter) => {
    if (localStorage.searchTable) {
      searchTable = JSON.parse(localStorage.searchTable);
      document.getElementById(filter).innerHTML = "";
      let searchItems = Object.keys(searchTable);
      searchItems.forEach((searchItem) => {
        itemsDiv = document.createElement("div");
        itemsDiv.id = searchItem;
        let heading = document.createElement("h4");
        heading.innerText = searchItem;
        itemsDiv.appendChild(heading);
        document.getElementById(filter).appendChild(itemsDiv);

        let items = Object.keys(searchTable[searchItem]);
        items.forEach((item) => {
          let subitem = document.createElement("div");

          subitem.innerText = item + "(" + searchTable[searchItem][item].length + ")";

          subitem.className = "optionDeSelected";
          subitem.id = filter.concat("_", searchItem, "_", item);
          subitem.setAttribute("onclick", "optionClickedInFilters(this.id);");

          itemsDiv.appendChild(subitem);
        });
      });
    }
  });
}
function loadFilteredProfiles() {
  document.getElementById("employee-dashboard").innerHTML = "";
  document.getElementById("noProfileFound").style["display"] = "block";
  get_matching_values();
  console.log(matching_active_ids.length);

  if (matching_active_ids.length == 0) {
    document.getElementById("noProfileFound").innerText = "No profile found";
    console.log(document.getElementById("noProfileFound"));
  } else {
    document.getElementById("noProfileFound").innerText = "Here are the results";
  }

  matching_active_ids.forEach((id) => {
    addInDashboard(id);
  });
}
function deSelectOption() {
  //clears all the selected options
  let selected = document.querySelectorAll(".optionSelected");
  for (i = 0; i < selected.length; i++) {
    selected[i].className = "optionDeSelected";
  }
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
  document.getElementById("uploadedImage").value = "";

  //dleating the active invalid message divs
  let clearInvalidDiv = document.querySelectorAll(".invalid");

  for (let i = 0; i < clearInvalidDiv.length; i++) {
    clearInvalidDiv[i].style["display"] = "none";
  }

  document.getElementById("invalidWarning").style["display"] = "none";
  save_btn_clicked = false;
}
function loadAlphabets() {
  let alphabets = document.querySelectorAll(".alphabets");
  for (let i = 0; i < 26; i++) {
    alphabets[i].style["display"] = "block";
  }
}
function unLoadAlphabets() {
  let alphabets = document.querySelectorAll(".alphabets");
  for (let i = 0; i < 26; i++) {
    alphabets[i].style["display"] = "none";
  }
}
function optionClickedOnAlphaIcon() {
  let alphabetIcon = document.getElementById("alpha-icon");
  if (alphabetIcon.className == "optionDeSelected") {
    alphabetIcon.className = "optionSelected";
    loadAlphabets();
  } else {
    alphabetIcon.className = "optionDeSelected";
    unLoadAlphabets();
  }
}
function startSearch() {
  //search for the input entered
  let input = document.getElementById("enteredInput").value;
  let filterBy = document.getElementById("select-employee").value;

  remove_previous_selected_options();

  get_all_values(filterBy, input);
  loadFilteredProfiles();
}
function clearFilter() {
  selectedOptionId = {};
  no_alphabets_selected = 0;
  //for alphabets
  let item = document.querySelectorAll(".alphabets");
  for (i = 0; i < 25; i++) {
    if (item[i].classList.contains("optionSelected")) {
      item[i].classList.remove("optionSelected");
      item[i].classList.add("optionDeSelected");
    }
  }

  deSelectOption();

  //setting firstname as default option in select filterBy
  document.getElementById("enteredInput").value = "";
  document.getElementById("select-employee").value = "firstName";
  loadDashboard();

  //removeing all selected options from search_inputs
  let keys = Object.keys(search_inputs);
  keys.forEach((id) => {
    search_inputs[id] = [];
  });
}
function remove_previous_selected_options() {
  //removes previously selected options from filterBy search
  if (current_selected_options.length > 0) {
    current_selected_options.forEach((id) => {
      remove_from_search_inputs(current_selected_key, id);
    });
  }
}
function remove_from_search_Table(title, value, id) {
  let searchTable = JSON.parse(localStorage.searchTable);
  if (searchTable[title][value].length == 1) {
    delete searchTable[title][value];
  } else {
    for (var i = searchTable[title][value].length - 1; i >= 0; i--) {
      if (searchTable[title][value][i] === id) {
        searchTable[title][value].splice(i, 1);
      }
    }
  }

  localStorage.searchTable = JSON.stringify(searchTable);
}
function get_all_values(key, value) {
  let employeeRecord = JSON.parse(localStorage.employeeRecord);
  let ids = Object.keys(employeeRecord);
  current_selected_options = [];
  current_selected_key = key.toLowerCase();
  matching_profile_found_in_filterSearch = false;

  ids.forEach((id) => {
    if (employeeRecord[id][key].toLowerCase() == value.toLowerCase()) {
      matching_profile_found_in_filterSearch = true;
      save_in_search_inputs(key, id);
    }
  });
}
function save_in_search_inputs(parent, value) {
  parent = parent.toLowerCase();
  search_inputs[parent].push(value);
}
function remove_from_search_inputs(parent, value) {
  parent = parent.toLowerCase();
  let index = search_inputs[parent].indexOf(value);
  search_inputs[parent].splice(index, 1);
}
function get_matching_values() {
  matching_active_ids = [];

  if (
    (no_alphabets_selected != 0 && search_inputs["alphabets"].length == 0) ||
    !matching_profile_found_in_filterSearch
  ) {
    matching_profile_found_in_filterSearch = true;
    return;
  }

  let keys = Object.keys(search_inputs);
  let active_keys = [];
  keys.forEach((key) => {
    if (search_inputs[key].length != 0) {
      active_keys.push(key);
    }
  });

  let no_active_keys = active_keys.length;
  let active_keys_map = new Map();

  active_keys.forEach((key) => {
    let each_set = new Set(search_inputs[key]);
    each_set.forEach((id) => {
      active_keys_map.set(id, active_keys_map.get(id) + 1 || 1);
    });
  });

  for (const [id, value] of active_keys_map.entries()) {
    if (value == no_active_keys) {
      matching_active_ids.push(id);
    }
  }
}

//profile
function open_profile(id) {
  present_profile_id = id;
  //loading the profile details of a perticular employee
  let employeeRecord = JSON.parse(localStorage.employeeRecord);

  document.getElementById("model_profiel_image").src = employeeRecord[id].profileImage;
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
  clearFilter();
  let employeeRecord = JSON.parse(localStorage.employeeRecord);

  initial_jobTitle = employeeRecord[present_profile_id].jobTitle;
  initial_department = employeeRecord[present_profile_id].department;

  document.getElementById("firstName").value = employeeRecord[present_profile_id].firstName;
  document.getElementById("lastName").value = employeeRecord[present_profile_id].lastName;
  document.getElementById("PrefferedName").value = employeeRecord[present_profile_id].prefferedName;
  document.getElementById("email").value = employeeRecord[present_profile_id].email;
  document.getElementById("jobTitle").value = employeeRecord[present_profile_id].jobTitle;
  document.getElementById("department").value = employeeRecord[present_profile_id].department;
  document.getElementById("phoneNumber").value = employeeRecord[present_profile_id].phoneNumber;
  document.getElementById("skypeId").value = employeeRecord[present_profile_id].skypeId;

  image = employeeRecord[present_profile_id].profileImage;

  document.getElementById("profile_close").click();
  setTimeout(function () {
    document.getElementById("add_employee_btn").click();
  }, 400);

  let btn = document.getElementById("add_save_btn");
  btn.innerText = "Save";
  save_btn_clicked = true;
}
function save_changes() {
  let employeeRecord = JSON.parse(localStorage.employeeRecord);

  let employeeData = getInputs();

  if (isInvalid(employeeData)) {
    document.getElementById("partialClose").click();
    document.getElementById("invalidWarning").style["display"] = "block";
    setTimeout(function () {
      document.getElementById("add_employee_btn").click();
    }, 400);
    return;
  }

  //setting default preffered Name
  if (employeeData.prefferedName == "") {
    employeeData.prefferedName = employeeData.firstName;
  }

  employeeRecord[present_profile_id].firstName = employeeData.firstName;
  employeeRecord[present_profile_id].lastName = employeeData.lastName;
  employeeRecord[present_profile_id].prefferedName = employeeData.prefferedName;
  employeeRecord[present_profile_id].email = employeeData.email;
  employeeRecord[present_profile_id].jobTitle = employeeData.jobTitle;
  employeeRecord[present_profile_id].department = employeeData.department;
  employeeRecord[present_profile_id].phoneNumber = employeeData.phoneNumber;
  employeeRecord[present_profile_id].skypeId = employeeData.skypeId;
  employeeRecord[present_profile_id].profileImage = employeeData.profileImage;

  //update search table if any changes made
  if (initial_jobTitle != document.getElementById("jobTitle").value) {
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
  save_btn_clicked = false;
}
function display_alert(message) {
  document.getElementById("alert").style["display"] = "block";
  document.getElementById("alert_message").innerText = message;
  setTimeout(function () {
    document.getElementById("alert").style["display"] = "none";
  }, 2000);
}
