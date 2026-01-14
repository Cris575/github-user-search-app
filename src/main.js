
import { getUserInfo, $ } from "./module.js";

window.addEventListener('load', () => {
  setTheme();
  showUserInfo(validateUser());
})

$('.mode').addEventListener('click', setTheme)

window.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    validateUser();
  }
})

$('.search-button').addEventListener('click', validateUser);

async function validateUser() {
  const username = $('#username').value || "octocat";

  const user = await getUserInfo(username);

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

function getMonth(month) {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return months[month];
}

function setTheme() {
  $("body").classList.toggle("dark-mode");
  $("body").classList.toggle("light-mode");
  if ($("body").classList.contains("dark-mode")) {
    $('#icon-mode').src = '/assets/icon-sun.svg';
    $('#mode-text').textContent = 'LIGHT';
  } else {
    $('#icon-mode').src = '/assets/icon-moon.svg';
    $('#mode-text').textContent = 'DARK';

  }
}
