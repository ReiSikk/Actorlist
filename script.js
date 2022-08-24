const url = "actors.json";
const btn = document.querySelector("#moreInfo");

fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    handleActorList(data);
  });

function handleActorList(data) {
  data.forEach(showActors);
}

function showActors(fullname) {
  console.log(fullname);
  //grab the template
  const template = document.querySelector("#actorTemplate").content;
  //clone the template
  const copy = template.cloneNode(true);

  //change the content
  copy.querySelector(".actorName").textContent = fullname.fullname;

  //grab the parent
  const parent = document.querySelector("main");

  //append the child
  parent.appendChild(copy);
}
