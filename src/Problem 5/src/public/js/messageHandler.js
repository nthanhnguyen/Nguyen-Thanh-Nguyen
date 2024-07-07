// JavaScript to handle displaying the message
document.addEventListener('DOMContentLoaded', function () {

    let messageElement = document.querySelector('.message.success p');
    if (messageElement && messageElement.textContent.trim() !== '') {
        // Show success message
        let successMessageContainer = document.querySelector('.message.success');
        successMessageContainer.style.display = 'block';

        // Set time to hide notifications after 5s
        setTimeout(function () {
            successMessageContainer.style.display = 'none';
        }, 5000);
    }

    let errorMessageElement = document.querySelector('.message.error p');
    if (errorMessageElement && errorMessageElement.textContent.trim() !== '') {
        // Show error message
        let errorMessageContainer = document.querySelector('.message.error');
        errorMessageContainer.style.display = 'block';

        // Set time to hide notifications after 5s
        setTimeout(function () {
            errorMessageContainer.style.display = 'none';
        }, 5000);
    }
});
