function printUsers() {
  let obj = JSON.parse(this.responseText);
  let follow = obj.following;
  let repos = obj.public_repos;

  document.getElementById('follow').innerHTML = follow;
  document.getElementById('repos').innerHTML = repos;
}

const request = new XMLHttpRequest();
request.onload = printUsers;
request.open('get', 'https://api.github.com/users/Manviel', true)
request.send();