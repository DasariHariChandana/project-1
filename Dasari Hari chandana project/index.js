<script>
    document.querySelectorAll('.toggle').forEach(button = {button.addEventListener('click', () => {
        const details = button.previousElementSibling;
        details.classList.toggle('show-details');
    })})
</script>;