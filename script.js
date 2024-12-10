document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    console.log('Newsletter subscription for:', email);
    alert('Thank you for subscribing to our newsletter!');
    this.reset();
});

document.getElementById('waitingListForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    console.log('Waiting list signup for:', email);
    alert('You have been added to the waiting list!');
    this.reset();
});
