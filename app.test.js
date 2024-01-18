 <script>
        // Function to check the presence of buttons
        function checkButtonPresence() {
            const shareButton = document.getElementById('Share');
            const testButton = document.getElementById('Test');
            const runButton = document.getElementById('Run');

            if (shareButton && testButton && runButton) {
                alert("All buttons (Share, Test, and Run) are present on the page.");
            } else {
                alert("One or more buttons are missing on the page.");
            }
        }

        // Call the function when the page loads
        window.addEventListener('load', checkButtonPresence);
    </script>
