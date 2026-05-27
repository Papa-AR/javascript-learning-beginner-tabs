document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTabId = button.getAttribute('data-target');

            // 1. Remove active state from all buttons
            tabButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-selected', 'false');
            });

            // 2. Hide all tab content panels
            tabContents.forEach(content => {
                content.classList.remove('active');
            });

            // 3. Add active state to clicked button
            button.classList.add('active');
            button.setAttribute('aria-selected', 'true');

            // 4. Show the corresponding content panel
            const targetContent = document.getElementById(targetTabId);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
});