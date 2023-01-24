const pinkCircle = document.querySelector("section") as HTMLElement;

pinkCircle.addEventListener("click", async (event) => {
    pinkCircle.innerHTML = "";
    const response = await fetch("https://www.boredapi.com/api/activity");
    const answer = await response.json();
    pinkCircle.innerHTML = answer.activity;
});