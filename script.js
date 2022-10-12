let selectedOptionId = {};
let no_option_selected = 0;
let save_btn_clicked = false;
let initial_jobTitle = "";
let initial_department = "";
let employeeArray = [];
let employeeCount = 0;
let current_selected_options = [];
let present_profile_id = "1";
let defaultImage =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIsAiwMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABAUGAwIBB//EADYQAAICAQIEAQoFAwUAAAAAAAABAgMEBRESITFBkQYTIiNCUWFxgbEyUmLB0XKh4TVTY4KD/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AP3EAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI2Xm4+JHe+xJvpFc2/oVura0qXKjEalYuUp9o/L4mdnOVk3OcnKT6yb5sC6yfKKyW6xaowX5p834Ffbqebb+LImvhHl9iIAOjyb293fbv8A1s915uVX+DItX/dnAAWlGu5le3nHC1fqWz8UW+FreLk7Rm3VY+0+j+plABvkDJaZq12G1Cxuyn8r6x+RqaL68iqNlUlKD6NAdAAAAAAAACk17U3Sni0S2sa9OS9le75llqGTHExZ3S23S9FPu+xi5zlZOU5veUnu2/eB8AAAA60Y12RLhprlL3tdF9QOQLKOiZTXOVS+HE/4OGRpuVjredfFFdXDnsBEAAAm6VqEsC7d86ZP04/uiEAN5XONkIzhJSjJbprueih8msxtSxJvp6UPl3RfAAAAAAGc8p8jiurxl0iuOXzfQpCXq1jt1G+W/SXD4ciIAAAEvTcN5l/C21CPOb/Y01VcKa1XXFRiuiRB0KpQwFNLnZJtv5PYsQAAAptZ06PA8miOzj+OK7/EpDZtKS2kt0+qMffDzV9la9ibj4MDwAAOuLe8bJruj7Et/p3NxFqUVJPdNbowRstHsdmm47b3ajwv6cgJgAAAADDZfPLvf/JL7nIkahDzedfF9rJfcjgAABpdEsUtPrjvzi2n47/uTzNaPmrEucbH6qzk/wBL95pU00mnun0YAAAPsY/KmrMq6xdJTbXiX2s50cel01y9dNbcvZRnQAAAGr8nf9Lh/VL7mUNdoMODS6d++7/uBYAAAAAMp5RU+b1Dj7WxT+q5MrDV6/iPJwnKC3sqfEviu5lPkAAJmn6fZmS3/BUus/2QESMXOSjFNt9ElvuT6b8/TkuOuSr6qNi5ePYvsbFpxY8NMFH3y7v6nZpNbNboCmjr3L0sbn8LP8HG3WMrI9XjVcDf5fSkXMsTGb549L/80dK64VrauEYL9K2AyWRRkVS3yK5xcval3fzORs5RjOPDOKlF9U1uim1HR1s7cRfF1/wBSgdHswB9jFykox6t7I3ONUqaK6l0hFR8DM+T+I781Wyj6unn832/k1QAAAAAAMlrWnvDyHZWvU2P0dvZfuNacsimu+qVVseKEuqAx2BiSzMhVrdRXOT9yNVXXCquNdcVGEVskjhg6esCE0nx8Ut+Lbt2JIAAAAAAAAFLrmCtnlUx2/3EvuVFNU7rY1VrecnskbCUFZFwa3TWzXwOWmaXXgqUt+OyXtPsvcB30/Ehh40ao831k/eySAAAAAAAAAAZylV3j4HUARmmuqPhJ236nxwi+wEcHfzUfiFXFdgOB7jW315HZJLokfQPMYqK5HoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//2Q==";

//loading all Initail content

//Adding alphabetical buttons dynalically
addAlphabets();
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
  let keys = Object.keys(employeeData);
  let invalid = false;
  keys.forEach((id) => {
    let invalidId = "invalid".concat("_", id);

    if (id != "prefferedName" && id != "profileImage") {
      //console.log(id, isNaN(employeeData[id]), employeeData[id]);
      if (
        employeeData[id] == "" ||
        (id == "phoneNumber" && (isNaN(employeeData[id]) || employeeData[id].length != 10))
      ) {
        document.getElementById(invalidId).style["display"] = "block";
        //console.log(invalidId);
        invalid = true;
      } else {
        document.getElementById(invalidId).style["display"] = "none";
      }
    }
  });
  //console.log(document.querySelectorAll(".invalid"), ",,,,,,,,,,,,,,,,,,,,,,,,");
  return invalid;
}
//function to add social icons in employee data
let image = defaultImage;

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
document.querySelector("#uploadedImage").addEventListener("change", function () {
  const reader = new FileReader();
  //image = defaultImage;
  //console.log("mmmmmm");
  reader.addEventListener("load", () => {
    image = reader.result;
    //console.log(image);
  });

  reader.readAsDataURL(this.files[0]);
});
//collecting employee details
function getInputs() {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var prefferedName = document.getElementById("PrefferedName").value;
  var email = document.getElementById("email").value;
  var jobTitle = document.getElementById("jobTitle").value;
  var department = document.getElementById("department").value;
  var phoneNumber = document.getElementById("phoneNumber").value;
  var skypeId = document.getElementById("skypeId").value;

  //console.log("0000", image);
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
  //console.log(document.querySelectorAll(".invalid"));
  //document.querySelectorAll(".invalid").style.display = "none";

  if (save_btn_clicked) {
    save_changes();
    return;
  }
  image = defaultImage;
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

  let employeeData = getInputs();

  if (isInvalid(employeeData)) {
    document.getElementById("partialClose").click();
    document.getElementById("invalidWarning").style["display"] = "block";
    setTimeout(function () {
      document.getElementById("add_employee_btn").click();
      //console.log("sss");
    }, 400);

    //console.log(document.getElementById("add_employee_btn"));
    return;
  }

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
  addInSearchTable("JobTitle", employeeData.jobTitle, empId);
  addInSearchTable("Department", employeeData.department, empId);
  document.getElementById("add_employee_close_btn").click();
  display_alert("Registered Successfully");

  clear_form();
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
      if (item.classList.contains("optionSelected")) {
        AddIn_SelecetOptionId_OnDeSelect(id);
      } else {
        AddIn_SelecetOptionId_OnSelect(id);
      }
    }
  });

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
    loadDashboard();
  }
  //console.log(no_option_selected);
}
function optionClickedInFilters(id) {
  let searchTable = JSON.parse(localStorage.searchTable);
  let parsedId = id.split("_");
  let parent = parsedId[1];
  let child = parsedId[2];
  item = document.getElementById(id);
  console.log(item.className, id);
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
function AddIn_SelecetOptionId_OnSelect(id) {
  if (selectedOptionId[id]) {
    selectedOptionId[id] += 1;
  } else {
    selectedOptionId[id] = 1;
  }
}
function AddIn_SelecetOptionId_OnDeSelect(id) {
  //console.log("-----", selectedOptionId);
  if (selectedOptionId[id]) {
    if (selectedOptionId[id] == 1) {
      delete selectedOptionId[id];
    } else {
      selectedOptionId[id] -= 1;
    }
  }

  //console.log("....", selectedOptionId);
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
function loadDashboard() {
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
function loadSearchTable() {
  let searchTable = {};

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
          // console.log(subitem);
          itemsDiv.appendChild(subitem);
        });
      });
    }
  });
}
function loadFilteredProfiles() {
  document.getElementById("employee-dashboard").innerHTML = "";
  let optionsList = Object.keys(selectedOptionId);

  document.getElementById("noProfileFound").style["display"] = "block";
  if (optionsList.length == 0) {
    document.getElementById("noProfileFound").innerText = "No profile found";
  } else {
    document.getElementById("noProfileFound").innerText = "Here are the results";
  }
  console.log(selectedOptionId, optionsList, no_option_selected);
  optionsList.forEach((id) => {
    addInDashboard(id);
  });
}
function deSelectOption() {
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
function openFilter() {
  // let clossFilter = document.querySelector("#closs-filter-icon");
  // clossFilter.style["display"] = "block";
  // let openFilter = document.querySelector("#open-filter-icon");
  // openFilter.style["display"] = "none";
  //open filter options
  // let filters = document.querySelector("#filter2");
  // filters.style["display"] = "block";
  //filters.style["position"] = "fixed";
  // filters.style["background-color"] = "rgb(132, 191, 250)";
  // filters.style["color"] = "white";
  // let allFilters = document.querySelector("#all-filters");
  // allFilters.style["position"] = "block";
  // allFilters.style["background-color"] = "rgb(132, 191, 250)";
}
function closeFilter() {
  //   let clossFilter = document.querySelector("#closs-filter-icon");
  //   clossFilter.style["display"] = "none";
  //   let openFilter = document.querySelector("#open-filter-icon");
  //   openFilter.style["display"] = "block";
  //   //closing the filters
  //   let filters = document.querySelector("#filter2");
  //   filters.style["position"] = "static";
  //   filters.style["background-color"] = "white";
  //   filters.style["display"] = "none";
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
function clearFilter() {
  selectedOptionId = {};

  //for alphabets
  let item = document.querySelectorAll(".alphabets");

  for (i = 0; i < 25; i++) {
    if (item[i].classList.contains("optionSelected")) {
      item[i].classList.remove("optionSelected");
      item[i].classList.add("optionDeSelected");
    }
  }

  deSelectOption();

  document.getElementById("enteredInput").value = "";
  document.getElementById("select-employee").value = "prefferedName";
  loadDashboard();
  //console.log("clear", selectedOptionId);
}
function open_profile(id) {
  // let btn = document.getElementById('add_bmployee_btn');
  present_profile_id = id;

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
function startSearch() {
  //search for the input entered
  let input = document.getElementById("enteredInput").value;
  let filterBy = document.getElementById("select-employee").value;
  //console.log(filterBy);
  remove_previous_selected_options();
  //console.log(current_selected_options);
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
  //console.log("mmmm......", selectedOptionId);
  ids.forEach((id) => {
    if (employeeRecord[id][key].toLowerCase() == value.toLowerCase()) {
      //console.log(id);
      AddIn_SelecetOptionId_OnSelect(id);
      current_selected_options.push(id);
    }
  });
  //console.log("ihkjhjkh", current_selected_options);
  // console.log("mmmm", selectedOptionId);
}
function edit_prfile() {
  //consol;e.log(present_profile_id);
  let employeeRecord = JSON.parse(localStorage.employeeRecord);

  initial_jobTitle = employeeRecord[present_profile_id].jobTitle;
  initial_department = employeeRecord[present_profile_id].department;

  //console.log(initial_department, "++...+++", initial_jobTitle);
  //displaying original saved data
  document.getElementById("firstName").value = employeeRecord[present_profile_id].firstName;
  document.getElementById("lastName").value = employeeRecord[present_profile_id].lastName;
  document.getElementById("PrefferedName").value = employeeRecord[present_profile_id].prefferedName;
  document.getElementById("email").value = employeeRecord[present_profile_id].email;
  document.getElementById("jobTitle").value = employeeRecord[present_profile_id].jobTitle;
  document.getElementById("department").value = employeeRecord[present_profile_id].department;
  document.getElementById("phoneNumber").value = employeeRecord[present_profile_id].phoneNumber;
  document.getElementById("skypeId").value = employeeRecord[present_profile_id].skypeId;
  //document.getElementById("uploadedImage").value = employeeRecord[present_profile_id].profileImage;
  image = employeeRecord[present_profile_id].profileImage;

  document.getElementById("profile_close").click();
  setTimeout(function () {
    // function code goes here
    //console.log("lkgjlksf");
    document.getElementById("add_employee_btn").click();
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
  //console.log(initial_department, "+++++", initial_jobTitle);

  let employeeData = getInputs();

  if (isInvalid(employeeData)) {
    document.getElementById("partialClose").click();
    document.getElementById("invalidWarning").style["display"] = "block";
    setTimeout(function () {
      document.getElementById("add_employee_btn").click();
      //console.log("sss");
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

  if (initial_jobTitle != document.getElementById("jobTitle").value) {
    //console.log(initial_jobTitle, "---", document.getElementById("jobTitle").value);
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
