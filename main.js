const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFilenames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const imageAlts = {
  'pic1.jpg': 'Closeup of a blue human eye',
  'pic2.jpg': 'A sandstone rock formation',
  'pic3.jpg': 'Purple and white flowers',
  'pic4.jpg': 'An ancient Egyptian painting',
  'pic5.jpg': 'A butterfly on a green leaf'
};

/* Looping through images */
imageFilenames.forEach((filename) => {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${filename}`);
  newImage.setAttribute('alt', imageAlts[filename]);
  thumbBar.appendChild(newImage);

  // Add click event to update the displayed image
  newImage.addEventListener('click', () => {
    displayedImage.setAttribute('src', `images/${filename}`);
    displayedImage.setAttribute('alt', imageAlts[filename]);
  });
});

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
  if (btn.getAttribute('class') === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});
