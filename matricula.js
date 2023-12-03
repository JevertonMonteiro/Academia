const closeDialogButton = document.getElementById('closeDialog')
        const dialog = document.getElementById('dialog');

        dialog.style.display = 'block'; 

        closeDialogButton.addEventListener('click', () => {
            dialog.style.display = 'none';
        });