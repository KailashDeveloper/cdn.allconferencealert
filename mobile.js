document.getElementById('user-menu-toggle').addEventListener("click", () => {
    document.getElementById('user-menu').style.display = 'block';
    document.getElementById('filter-btn-div-id').style.display = 'none';
    document.getElementById('filter-btn-div').style.display = 'none';

});
document.getElementById('user-menu-close').addEventListener("click", () => {
    document.getElementById('user-menu').style.display = 'none';
    document.getElementById('filter-btn-div-id').style.display = 'block';
    document.getElementById('filter-btn-div').style.display = 'block';
});
const triggerPassword = document.querySelector('.fa-eye');

const showPassword = trigger => {
    trigger.addEventListener('click', () => {
        if (trigger.previousElementSibling.getAttribute('type') === 'password') {
            trigger.previousElementSibling.setAttribute('type', 'text');
            trigger.classList.remove('fa-eye');
            trigger.classList.add('fa-eye-slash');
        } else if (trigger.previousElementSibling.getAttribute('type') === 'text') {
            trigger.previousElementSibling.setAttribute('type', 'password');
            trigger.classList.remove('fa-eye-slash');
            trigger.classList.add('fa-eye');
        }
    });
}

showPassword(triggerPassword);
