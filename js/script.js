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
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Hide all content divs
            document.querySelectorAll('.content').forEach(div => {
                div.classList.add('hidden');
            });

            // Show the clicked content
            const targetId = this.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);
            targetContent.classList.remove('hidden');
        });
    });
});



// window.addEventListener("load", function () {
//   setTimeout(
//     function open(event) {
//       document.querySelector(".popup").style.display = "block"
//     },
//     1000
//   )
// });

// document.querySelector("#close").addEventListener("click", function () {
//   document.querySelector(".popup").style.display = "none";
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
