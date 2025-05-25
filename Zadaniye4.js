function changeLastName()
{
    const newLastName = document.getElementById("newLastName").value;
    if (newLastName) {
        document.getElementById("lastName").textContent = newLastName;
    }
}

function changeBackground()
{
    const colors = ["#ffcccc", "#ccffcc", "#ccccff", "#ffffcc", "#ffccff"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}