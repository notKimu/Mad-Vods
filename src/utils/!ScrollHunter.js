import { useEffect } from 'react';

const ScrollHunter = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('classOnShowed');
        } else {
          entry.target.classList.remove('classOnShowed');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.classOnHidden');
    hiddenElements.forEach((element) => observer.observe(element));
  }, []);

  return null;
};

export default ScrollHunter;