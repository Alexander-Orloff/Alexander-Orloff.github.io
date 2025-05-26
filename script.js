function min(a, b)
{
    if (a<b)
        return a;
    else
        return b;
}
function max(a, b)
{
    if (a>b)
        return a;
    else
        return b;
}
function equal(a, b)
{
    return a===b;
}

function Task1()
{
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    
    if (isNaN(num1))
    {
        document.getElementById('task1-result').textContent = 'Введите первое число';
        return;
    }
    
    if (isNaN(num2))
    {
        document.getElementById('task1-result').textContent = 'Введите второе число';
        return;
    }
    
    const result = `
        min(${num1}, ${num2}) = ${min(num1, num2)}<br>
        max(${num1}, ${num2}) = ${max(num1, num2)}<br>
        equal(${num1}, ${num2}) = ${equal(num1, num2)}
    `;
    
    document.getElementById('task1-result').innerHTML = result;
}
function Task2()
{
    if (confirm('Готовы ввести имя?'))
    {
        var admin;
        var name;
        name = prompt('Введите сюда ваше имя');
        admin = name;
        document.getElementById('task2-result').textContent = `Переменная admin: ${admin}`;
    }
}
function Task3()
{
    var age;
    if (confirm('Задание 3. Перейдем к вопросу о возрасте?'))
    {
        age = prompt('Сколько вам лет?');
        while(!(confirm('Вам точно '+age+'??')))
        {
            alert('Введите ваш возраст ещё раз!')
            age = prompt('Так сколько вам лет?????');
        }
    }
    document.getElementById('task3-result').textContent = `Ваш возраст: ${age}`;
}
function changeLastName()
{
    const newLastName = document.getElementById("newLastName").value;
    if (newLastName)
    {
        document.getElementById("lastName").textContent = newLastName;
        alert('Фамилия изменена!');
    }
}

function changeBackground()
{
    const colors = ["#ffcccc", "#ccffcc", "#ccccff", "#ffffcc", "#ffccff"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}
