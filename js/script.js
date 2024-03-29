const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')
const toTopButton = document.querySelector("#to-top-button");

nav.classList.add('hidden');
const menuItems = document.querySelectorAll('#menu a'); // Select all anchor tags inside the menu

document.addEventListener('scroll', function() {
    const changeColorOffset = 250; // The number of pixels you need to scroll down to change the color
    const hamburgerLines = document.querySelectorAll('.hamburger-top, .hamburger-middle, .hamburger-bottom');
  
    hamburgerLines.forEach(line => {
      if (window.scrollY > changeColorOffset) {
        line.classList.add('new-color');
      } else {
        line.classList.remove('new-color');
      }
    });
  });
  
  
// Function to close the menu
function closeMenu() {
  nav.classList.add('hidden');
  btn.classList.remove('open');
}

// Toggle menu open/close
btn.addEventListener('click', function() {
  nav.classList.toggle('hidden');
  btn.classList.toggle('open');
});

// Attach click event to each menu item
menuItems.forEach(item => {
  item.addEventListener('click', closeMenu);
});

// Close the menu when scrolling begins
window.addEventListener('scroll', closeMenu);
// btn.addEventListener('click', function() {
//     if (nav.classList.contains('hidden')) {
//         nav.classList.remove('hidden');
//     } else {
//         nav.classList.add('hidden');
//     }
//     btn.classList.toggle('open');
// });

document.getElementById('menu-btn').addEventListener('click', function() {
    const menuLinks = document.querySelectorAll('#menu-a');

    menuLinks.forEach((link, index) => {
        if(link.classList.contains('hidden')) {
            setTimeout(() => {
                link.classList.remove('hidden');
                link.classList.add('animate__fadeIn');
            }, index * 400); // Delay increases for each link
        } else {
            link.classList.add('hidden');
            link.classList.remove('animate__fadeIn');
        }
    });
});







  
  
  
  

// document.addEventListener('DOMContentLoaded', function() {
//     const buttons = document.querySelectorAll('.toggle-button');

//        // Apply the active class to the first button on page load
//     // buttons[0].classList.add('active-work-title');

//     buttons.forEach(button => {
//         button.addEventListener('click', function() {
//             // Hide all content divs
//             document.querySelectorAll('.content').forEach(div => {
//                 div.classList.add('hidden');
//             });

//             // Remove active class from all buttons
//             buttons.forEach(btn => {
//                 btn.classList.remove('active-work-title');
//             });
 
//             // Show the clicked content
//             const targetId = this.getAttribute('data-target');
//             const targetContent = document.getElementById(targetId);
//             targetContent.classList.remove('hidden');
//             this.classList.add('active-work-title')
//         });
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.toggle-button');

    // Apply the active class to the first visible button on page load
    for (let button of buttons) {
        if (button.offsetParent !== null) {  // This checks if the button is visible
            button.classList.add('active-work-title');
            break;  // Exit the loop once the first visible button is found
        }
    }

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Hide all content divs
            document.querySelectorAll('.content').forEach(div => {
                div.classList.add('hidden');
            });

            // Remove active class from all buttons
            buttons.forEach(btn => {
                btn.classList.remove('active-work-title');
            });

            // Show the clicked content
            const targetId = this.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);
            targetContent.classList.remove('hidden');
            this.classList.add('active-work-title')
        });
    });
});
// const buttons = document.querySelectorAll('.toggle-button');

// buttons.forEach(button => {
//   button.addEventListener('click', () => {
//     const targetId = button.dataset.target;
//     const content = document.getElementById(targetId);
//     content.classList.toggle('hidden');
//   });
// });


// When the user scrolls down 200px from the top of the document, show the button
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      toTopButton.classList.remove("hidden");
  } else {
      toTopButton.classList.add("hidden");
  }
}

// todfauWhen the user clicks on the button, smoothy scroll to the top of the document
function goToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}