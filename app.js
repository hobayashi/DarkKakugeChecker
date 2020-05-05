const backgroundColor = "#282828";
const textColor = "#FFFFFF";
const aColor = "#1B95E0";
const formControlColor = "#000000";

const body = document.querySelector("body");
body.style.backgroundColor = backgroundColor;
body.style.color = textColor;

const nav = document.querySelector("nav");
nav.style.backgroundColor = backgroundColor;

const anchors = document.getElementsByTagName("a");
for (let i = 0; i < anchors.length; i++) {
  anchors[i].style.color = aColor;
}

const reminders = document.querySelectorAll(".reminder_events");
for (let i = 0; i < reminders.length; i++) {
    reminders[i].style.backgroundColor = backgroundColor;
}

const etOffLists = document.querySelectorAll(".etofflist");
for (let i = 0; i < etOffLists.length; i++) {
    etOffLists[i].style.backgroundColor = backgroundColor;
}

const streamWrapLists = document.querySelectorAll(".streamlist_wrap");
for (let i = 0; i < streamWrapLists.length; i++) {
    streamWrapLists[i].style.backgroundColor = backgroundColor;
}

const streamRowInfoDetailEvents = document.querySelectorAll(".streamlist_row_info_detail_event");
for (let i = 0; i < streamRowInfoDetailEvents.length; i++) {
    streamRowInfoDetailEvents[i].style.backgroundColor = backgroundColor;
}

const evenetOnlines = document.querySelectorAll(".event_online");
for (let i = 0; i < evenetOnlines.length; i++) {
    evenetOnlines[i].style.backgroundColor = backgroundColor;
}

const formControl = document.querySelector(".form-control");
formControl.style.backgroundColor = formControlColor;

const navbarActive = document.querySelector(".navbar-nav>.active>a");
navbarActive.style.backgroundColor = backgroundColor;