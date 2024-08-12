let gitStyleOne = "Commit me man!"
const allStyle = () => `Hi my name is Gitty. ${gitStyleOne}`;
let gitResultOne = allStyle(gitStyleOne);
console.log(gitResultOne);
document.querySelector("h1").innerText = gitResultOne;