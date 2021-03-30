window.addEventListener('DOMContentLoaded', () => {

const form = document.querySelector('form');

const message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро с Вами свяжемся :)',
    failure: 'Чтото пошло не так :('
};


function postData(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const statusMessage = document.createElement('div'); 
        statusMessage.textContent = message.loading;
        form.append(statusMessage);

        const request = new XMLHttpRequest();
        request.open('POST', 'server.php');

        // request.setRequestHeader('Content-type', 'multipart/form-data');
        const formData = new FormData(form);
        
        request.send(formData);

        request.addEventListener('load', () => {
            if (request.status === 200) {
                console.log(request.response);
                statusMessage.textContent = message.success;
            } else {
                statusMessage.textContent = message.failure;
            }
        });
    });
}

postData(form);

});

