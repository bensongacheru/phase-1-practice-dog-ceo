console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', function () {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const dogImageContainer = document.getElementById('dog-image-container');
  
    fetch(imgUrl)
      .then(response => response.json())
      .then(data => {
        data.message.forEach(imageUrl => {
          const img = document.createElement('img');
          img.src = imageUrl;
          img.alt = 'dog image';
          dogImageContainer.appendChild(img);
        });
      })
      .catch(error => console.error('Error fetching dog images:', error));
  });
  document.addEventListener('DOMContentLoaded', function () {
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const dogBreedsList = document.getElementById('dog-breeds');
  
    fetch(breedUrl)
      .then(response => response.json())
      .then(data => {
        const breeds = Object.keys(data.message);
        breeds.forEach(breed => {
          const li = document.createElement('li');
          li.textContent = breed;
          dogBreedsList.appendChild(li);
        });
      })
      .catch(error => console.error('Error fetching dog breeds:', error));
  });
  document.addEventListener('DOMContentLoaded', function () {
    // Existing code for fetching and rendering breeds...
  
    dogBreedsList.addEventListener('click', function (event) {
      if (event.target.tagName === 'LI') {
        event.target.style.color = 'red'; // Change color to your preference
      }
    });
  });
  document.addEventListener('DOMContentLoaded', function () {
    // Existing code for fetching and rendering breeds...
  
    const breedDropdown = document.getElementById('breed-dropdown');
  
    breedDropdown.addEventListener('change', function () {
      const selectedLetter = breedDropdown.value;
      const lis = dogBreedsList.getElementsByTagName('li');
  
      for (let i = 0; i < lis.length; i++) {
        const breedName = lis[i].textContent.toLowerCase();
        if (selectedLetter === 'all' || breedName.startsWith(selectedLetter)) {
          lis[i].style.display = 'block'; // Show the breed
        } else {
          lis[i].style.display = 'none'; // Hide the breed
        }
      }
    });
  });
        
