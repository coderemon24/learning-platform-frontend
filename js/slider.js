function animateSet(imageSet) {
    const images = imageSet.querySelectorAll('img');
    
    // Show the first image immediately without delay
    images[0].classList.add('active');
    
    // Apply staggered animation for the rest of the images with a faster delay
    images.forEach((img, index) => {
      if (index > 0) {
        setTimeout(() => {
          img.classList.add('active');
        }, index * 300); // 300ms delay between each image
      }
    });
  }

  function deactivateSet(imageSet) {
    const images = imageSet.querySelectorAll('img');

    // Apply staggered fade-out for each image with a faster delay
    images.forEach((img, index) => {
      setTimeout(() => {
        img.classList.remove('active'); // Deactivate each image one by one
      }, index * 300); // 300ms delay between each image
    });
  }

  function switchSets() {
    const set1 = document.querySelector('.set-1');
    const set2 = document.querySelector('.set-2');

    if (set1.classList.contains('active')) {
      deactivateSet(set1); // Deactivate images in set-1 one by one
      setTimeout(() => {
        set1.classList.remove('active');
        set2.classList.add('active');
        animateSet(set2);
      }, 1500); // Adjusted delay to allow all images to disappear faster
    } else {
      deactivateSet(set2); // Deactivate images in set-2 one by one
      setTimeout(() => {
        set2.classList.remove('active');
        set1.classList.add('active');
        animateSet(set1);
      }, 1500); // Adjusted delay to allow all images to disappear faster
    }
  }

  // Initial activation of images in set-1
  animateSet(document.querySelector('.set-1'));

  // Interval to switch between sets every 6 seconds
  setInterval(() => {
    switchSets();
  }, 6000); // Switch every 6 seconds