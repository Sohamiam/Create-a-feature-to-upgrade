document.addEventListener("DOMContentLoaded", function() {
    // Get the video element
    const video = document.getElementById('myVideo');
    
    // Function to pause the video and show notification
    function stopVideo() {
        if (!video.paused) {
            video.pause();
            showNotification();
        }
    }
    
    // Function to show the notification
    function showNotification() {
        const notification = document.getElementById('notification');
        if (notification) {
            notification.style.display = 'block';
        }
    }
    
    // Set a timer to stop the video after 5 minutes (300000 milliseconds)
    setTimeout(stopVideo, 420000); // 300000 ms = 5 minutes
});
