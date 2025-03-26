/* JavaScript for Bloom Valley Nursery website */

// Shopping Cart functionality using localStorage
function addToCart(item) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(item);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(item + ' has been added to your cart.');
}

function viewCart() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  alert('Your cart contains: ' + cart.join(', '));
}

// Subscribe feature: Email validation and submission
document.getElementById('subscribeForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  if (validateEmail(email)) {
    alert('Thank you for subscribing!');
    // Optionally store the email or send it to a server
  } else {
    alert('Please enter a valid email address.');
  }
});

// Email validation function
function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
            return re.test(String(email).toLowerCase());
}

// Contact Us feature: Form submission using sessionStorage
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('contactEmail').value;
  const message = document.getElementById('message').value;
  if(name && validateEmail(email) && message) {
    sessionStorage.setItem('contactName', name);
    sessionStorage.setItem('contactEmail', email);
    sessionStorage.setItem('contactMessage', message);
    alert('Thank you for contacting us!');
    // Optionally, send the data to the server
  } else {
    alert('Please fill in all fields correctly.');
  }
});
