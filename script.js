const url = "actors.json";
const btn = document.querySelector(".moreInfo");

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
  copy.querySelector(".actorName").textContent = `${fullname.fullname}`;
  copy.querySelector("#movieName").textContent = "- " + `${fullname.movie}`;

  //grab the parent
  const parent = document.querySelector("main");

  //append the child
  parent.appendChild(copy);
  document.querySelector(".moreInfo").addEventListener("click", revealInfo);
}

////////////Drop down function////////
document.querySelector("body").addEventListener("click", (event) => {
  if (event.target.matches(".moreInfo")) {
    event.target.closest(".dropDown", revealInfo());
    console.log("clicked");
  }
});
function revealInfo(data) {
  const drop = document.querySelector(".dropDown");

  if (drop.style.display === "none") {
    drop.style.display = "block";
  } else {
    drop.style.display = "none";
  }
}
