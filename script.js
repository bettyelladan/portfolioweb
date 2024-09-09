// When the DOM is fully loaded, execute the function
document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('clickMe');
    const message = document.getElementById('message');
  
    // Define an array of motivational messages
    const messages = [
      'Keep pushing forward!',
      'You are capable of amazing things!',
      'Stay positive and work hard!',
      'Believe in yourself!',
      'Never give up!'
    ];
  
    // Add an event listener to the button
    button.addEventListener('click', function () {
      // Select a random message from the array
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      // Display the message in the paragraph with the id 'message'
      message.textContent = randomMessage;
    });
  });