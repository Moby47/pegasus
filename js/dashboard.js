// Display member plans

// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Find the email input element
    const emailInput = document.querySelector('input[data-ms-member="email"]');
    
    // Check if the email input element exists
    if (emailInput) {
      // Get the email value and trim any leading/trailing spaces
      const email = emailInput.value.trim();
      
      // Check if email is not empty
      if (email) {
        // Encode the email for use in the URL
        const encodedEmail = encodeURIComponent(email);
        const apiKey = 'sk_sb_6ab7fbb6fcfca120020f';
        
        // Construct the URL for the API request
        const url = `https://admin.memberstack.com/members/${encodedEmail}`;
  
        // Fetch member data from the API
        fetch(url, {
          headers: {
            'x-api-key': apiKey
          }
        })
        .then(response => response.json())
        .then(data => {
          console.log('data',data)
          return;

          // Get the plan connections from the member data
          const planConnections = data.data.planConnections;

          
          console.log('planConnections',planConnections)
          
          // Find the plan list element
          const planList = document.getElementById('plan-list');
  
          // Clear the list before adding new <li> elements
          planList.innerHTML = '';
  
          // Check if there are plan connections
          if (planConnections && planConnections.length > 0) {
            // Loop through each plan connection
            planConnections.forEach(connection => {
              // Get the plan name from the connection
              const planName = connection.planName;
              console.log('Plan Name:', planName);
  
              // Create a new list item and set its text content
              const listItem = document.createElement('li');
              listItem.textContent = planName;
              
              // Append the list item to the plan list
              planList.appendChild(listItem);
            });
          } else {
            // If no plans found, show the no-plans-message
            const noPlansMessage = document.getElementById('no-plans-message');
            noPlansMessage.style.display = 'block';
            console.log('No plans at all')
          }
        })
        .catch(error => {
          console.error('Error:', error);
        });
      } else {
        console.log('Email input is empty.');
      }
    } else {
      console.log('Input element not found.');
    }
  });
  


/* ************************************************************** 



// Hide/show Buttons based on plan

// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Find the email input element
    const emailInput = document.querySelector('input[data-ms-member="email"]');
    
    // Check if the email input element exists
    if (emailInput) {
      // Get the email value and trim any leading/trailing spaces
      const email = emailInput.value.trim();
      
      // Check if email is not empty
      if (email) {
        // Encode the email for use in the URL
        const encodedEmail = encodeURIComponent(email);
        const apiKey = 'sk_sb_6ab7fbb6fcfca120020f';
        
        // Construct the URL for the API request
        const url = `https://admin.memberstack.com/members/${encodedEmail}`;
  
        // Fetch member data from the API
        fetch(url, {
          headers: {
            'x-api-key': apiKey
          }
        })
        .then(response => response.json())
        .then(data => {
          // Get the plan connections from the member data
          const planConnections = data.data.planConnections;
          
          // Initialize buttons
          const button1 = document.getElementById('btn1');
          const button2 = document.getElementById('btn2');
          const button3 = document.getElementById('btn3');
          const button1a = document.getElementById('btn1a');
          const button2a = document.getElementById('btn2a');
          const button3a = document.getElementById('btn3a');
          
          if (planConnections && planConnections.length > 0) {
            // Initialize variables to track plan existence
            let plan1 = false;
            let plan2 = false;
            let plan3 = false;
  
            // Loop through each plan connection
            planConnections.forEach(connection => {
              const planName = connection.planName;
  
              // Check plan names and update variables
              if (planName === 'The Lost Temple') {
                plan1 = true;
              }
              if (planName === "Pirate's Cove") {
                plan2 = true;
              }
              if (planName === 'Fantasy Realm') {
                plan3 = true;
              }
            });
  
            // Check and show/hide buttons based on plan existence
            if (plan1) {
              console.log("Plan 'The Lost Temple' exists.");
              button1.style.display = 'none';
              button1a.style.display = 'inline-block';
            } else {
              console.log("Plan 'The Lost Temple' does not exist.");
              button1a.style.display = 'none';
            }
  
            if (plan2) {
              console.log("Plan 'Pirate's Cove' exists.");
              button2.style.display = 'none';
              button2a.style.display = 'inline-block';
            } else {
              console.log("Plan 'Pirate's Cove' does not exist.");
              button2a.style.display = 'none';
            }
  
            if (plan3) {
              console.log("Plan 'Fantasy Realm' exists.");
              button3.style.display = 'none';
              button3a.style.display = 'inline-block';
            } else {
              console.log("Plan 'Fantasy Realm' does not exist.");
              button3a.style.display = 'none';
            }
  
          } else {
            // Hide all view buttons
            button1a.style.display = 'none';
            button2a.style.display = 'none';
            button3a.style.display = 'none';
          }
        })
        .catch(error => {
          console.error('Error: (script2)', error);
        });
      } else {
        console.log('Email input is empty. (script2)');
      }
    } else {
      console.log('Input element not found. (script2)');
    }
  });
  
*/


