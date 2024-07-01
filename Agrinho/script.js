document.addEventListener('DOMContentLoaded', function() {
    const activityForm = document.getElementById('activityForm');
    const activityList = document.getElementById('activityList');

    activityForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const dateInput = document.getElementById('date').value;
        const descriptionInput = document.getElementById('description').value;

        if (dateInput && descriptionInput) {
            addActivity(dateInput, descriptionInput);
            activityForm.reset();
        }
    });

    function addActivity(date, description) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${date} - ${description}</span>
            <button onclick="completeActivity(this)">Concluir</button>
        `;
        activityList.appendChild(li);
    }

    window.completeActivity = function(button) {
        const li = button.parentElement;
        li.classList.toggle('completed');
    };
});