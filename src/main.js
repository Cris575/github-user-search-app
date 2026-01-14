
import { getUserInfo, $ } from "./module.js";

window.addEventListener('load', () => {
  setEvents();
  setTheme();
  getUser();
});

function setEvents() {
  $('body').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') getUser();
  });

  $('.mode').addEventListener('click', () => {
    setTheme()
  });

  $('.search-button').addEventListener('click', () => {
    getUser()
  });
}

async function getUser() {
  const username = $('#username').value || "octocat";
  const user = await getUserInfo(username);

  if (user !== null)
    showUserInfo(user);
}

function showUserInfo(user) {
  $('#user-avatar').src = user.avatar_url;
  $('#user-login').textContent = "@" + user.login;
  $('#user-name').textContent = user.name;
  $('#user-location').textContent = user.location ?? "Location not available";
  $('#user-company').textContent = user.company ?? "Company not available";
  $('#user-blog').textContent = user.blog;
  $('#user-twitter').textContent = user.twitter_username ?? "Not available";
  $('#user-date').textContent = getDate(user.created_at);
  $('#user-bio').textContent = user.bio ?? "This profile has no bio";
  $('#user-repos').textContent = user.public_repos;
  $('#user-followers').textContent = user.followers;
  $('#user-following').textContent = user.following;
}

function getDate(userCreatedAt) {
  const date = new Date(userCreatedAt);
  return `Joined ${date.getDate()} ${getMonth(date.getMonth())} ${date.getFullYear()}`;
}

function setTheme() {
  $("body").classList.toggle("dark-mode");
  $("body").classList.toggle("light-mode");
  changeIconTheme();
}

function changeIconTheme() {
  if ($("body").classList.contains("dark-mode")) {
    $('#icon-mode').src = '/assets/icon-sun.svg';
    $('#mode-text').textContent = 'LIGHT';
  } else {
    $('#icon-mode').src = '/assets/icon-moon.svg';
    $('#mode-text').textContent = 'DARK';
  }
}

function getMonth(month) {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return months[month];
}