// Function to be executed after a delay
function myFunction() {
    const endTime = Date.now();
    const timeDifference = endTime - startTime;
    console.log(`Function executed! Time difference: ${timeDifference} milliseconds`);
  }
  
  // Record the start time
  const startTime = Date.now();
  
  // Schedule the function to run after 2000 milliseconds (2 seconds)
  setTimeout(myFunction, 2000);
  