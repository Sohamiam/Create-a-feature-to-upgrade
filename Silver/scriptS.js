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
    
   
    setTimeout(stopVideo, 600000); 
});
