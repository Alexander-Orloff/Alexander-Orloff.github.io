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
        alert('Вас зовут '+admin);
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
function validateForm() {
    // Проверка имени
    const name = document.getElementById('user-name').value;
    if (!/^[a-zA-Zа-яА-Я\s]+$/.test(name)) {
        alert('Имя должно содержать только буквы');
        return;
    }
    
    // Проверка возраста
    const age = document.getElementById('user-age').value;
    if (!/^\d+$/.test(age) || parseInt(age) <= 0) {
        alert('Возраст должен быть положительным числом');
        return;
    }
    
    // Проверка пола
    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        alert('Укажите ваш пол');
        return;
    }
    
    // Проверка навыков
    const skills = document.querySelectorAll('input[name="skills"]:checked');
    if (skills.length === 0) {
        alert('Укажите хотя бы один навык');
        return;
    }
    
    // Проверка образования
    const education = document.getElementById('education').value;
    
    // Проверка условий для принятия
    let isAccepted = false;
    const mathChecked = document.getElementById('math').checked;
    const programmingChecked = document.getElementById('programming').checked;
    
    // Условие 1: знание математики и программирования
    if (mathChecked && programmingChecked) {
        isAccepted = true;
    }
    
    // Условие 2: высшее образование и 2 любых навыка
    if (education === 'university' && skills.length >= 2) {
        isAccepted = true;
    }
    
    // Показать результат
    const resultText = isAccepted 
        ? 'Поздравляем! Вас приняли.' 
        : 'К сожалению, вы не подходите по критериям.';
    
    document.getElementById('result-text').textContent = resultText;
    document.getElementById('form-result').style.display = 'block';
    
    // Блокировка чекбоксов после отправки
    const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    allCheckboxes.forEach(checkbox => {
        checkbox.disabled = true;
    });
}