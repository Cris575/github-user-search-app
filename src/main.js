
import { getUserInfo, $ } from "./module.js";

window.addEventListener('load', () => {
  getUserInfo()
    .then((data) => ShowInfo(data))
    .catch((err) => console.error(err.message));
})

$('.search-button').addEventListener('click', () => {
  const username = $('#username').value;
  if (username !== "") {
    getUserInfo(username)
      .then((data) => ShowInfo(data))
      .catch((err) => console.error(err.message));
  } else {
    alert("Please enter a username");
  }

});

function ShowInfo(user) {

  const date = new Date(user.created_at);

  const objDate = {
    day: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear()
  }

  $('#user-avatar').src = user.avatar_url;
  $('#user-login').textContent = user.login;
  $('#user-name').textContent = user.name;
  $('#user-location').textContent = user.location ?? "Location not available";
  $('#user-company').textContent = user.company ?? "Company not available";
  $('#user-blog').textContent = user.blog;
  $('#user-twitter').textContent = user.twitter_username ?? "Not available";
  $('#user-date').textContent = `Joined ${objDate.day} ${getMonth(objDate.month)} ${objDate.year}`;
  $('#user-bio').textContent = user.bio ?? "This profile has no bio";
  $('#user-repos').textContent = user.public_repos;
  $('#user-followers').textContent = user.followers;
  $('#user-following').textContent = user.following;
}



function getMonth(month) {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return months[month];
}


// window.addEventListener('load', () => {
//   changeMode();
// });


function changeMode() {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    $('#icon-mode').src = '/assets/icon-sun.svg';
    $('#mode-text').textContent = 'LIGHT';
  } else {
    $('#icon-mode').src = '/assets/icon-moon.svg';
    $('#mode-text').textContent = 'DARK';
  }
}
