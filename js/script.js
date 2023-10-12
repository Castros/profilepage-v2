const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')
const toTopButton = document.querySelector("#to-top-button");

nav.classList.add('hidden');

btn.addEventListener('click', function() {
    if (nav.classList.contains('hidden')) {
        nav.classList.remove('hidden');
    } else {
        nav.classList.add('hidden');
    }
    btn.classList.toggle('open');
});

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.toggle-button');

       // Apply the active class to the first button on page load
    // buttons[0].classList.add('active-work-title');

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