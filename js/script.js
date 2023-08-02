
// Display member plans

document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.querySelector('input[data-ms-member="email"]');
    if (emailInput) {
      const email = emailInput.value.trim(); // Use .trim() to remove any leading/trailing spaces
      if (email) {
        const encodedEmail = encodeURIComponent(email);
        const apiKey = 'sk_sb_32d7476fab908c4842cc';
        const url = `https://admin.memberstack.com/members/${encodedEmail}`;

        fetch(url, {
          headers: {
            'x-api-key': apiKey
          }
        })
        .then(response => response.json())
        .then(data => {
          const planConnections = data.data.planConnections;
          const planList = document.getElementById('plan-list');

          // Clear the list before adding new <li> elements
          planList.innerHTML = '';

          if (planConnections && planConnections.length > 0) {


            planConnections.forEach(connection => {
              const planName = connection.planName;
              console.log('Plan Name:', planName);

              //Show plans
              const listItem = document.createElement('li');
              listItem.textContent = planName;
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







// Hide/show Buttons based on plan

document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.querySelector('input[data-ms-member="email"]');
    if (emailInput) {
      const email = emailInput.value.trim(); // Use .trim() to remove any leading/trailing spaces
      if (email) {
        const encodedEmail = encodeURIComponent(email);
        const apiKey = 'sk_sb_32d7476fab908c4842cc';
        const url = `https://admin.memberstack.com/members/${encodedEmail}`;

        fetch(url, {
          headers: {
            'x-api-key': apiKey
          }
        })
        .then(response => response.json())
        .then(data => {
          const planConnections = data.data.planConnections;
          
          //initialize buttons
          const button1 = document.getElementById('btn1');
          const button2 = document.getElementById('btn2');
          const button3 = document.getElementById('btn3');
          const button1a = document.getElementById('btn1a');
          const button2a = document.getElementById('btn2a');
          const button3a = document.getElementById('btn3a');


          if (planConnections && planConnections.length > 0) {

              let plan1 = false;
              let plan2 = false;
              let plan3 = false;

            planConnections.forEach(connection => {
              const planName = connection.planName;

              if (planName === 'Pegasus Plan') {
                  plan1 = true;
              }
              if (planName === 'Test Plan') {
                  plan2 = true;
              }
              if (planName === 'paid') {
                  plan3 = true;
              }

            });

            if (plan1) {
console.log("Plan 'peg' exists.");
button1.style.display = 'none';
                 button1a.style.display = 'inline-block';
} else {
console.log("Plan 'peg' does not exist.");
button1a.style.display = 'none';
}

if (plan2) {
  button2.style.display = 'none';
                 button2a.style.display = 'inline-block';
console.log("Plan 'test' exists.");
} else {
console.log("Plan 'test' does not exist.");
button2a.style.display = 'none';
}
            if (plan3) {
console.log("Plan 'paid' exists.");
button3.style.display = 'none';
                 button3a.style.display = 'inline-block';
} else {
console.log("Plan 'paid' does not exist.");
button3a.style.display = 'none';
}

          } else {
            //hide all view btns
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




