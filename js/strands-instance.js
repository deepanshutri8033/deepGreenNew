import Strands from './Strands.js';

const init = () => {
  const container = document.getElementById('strands-container');
  if (!container) return;

  const getThemeColors = () => {
    const isDark = document.documentElement.classList.contains('dark-theme');
    return isDark 
      ? ['#10b981', '#059669', '#34d399'] 
      : ['#107c41', '#4caf50', '#81c784'];
  };

  try {
    const strands = new Strands(container, {
      colors: getThemeColors(),
      count: 3,
      speed: 0.4,
      amplitude: 0.8,
      waviness: 1.0,
      thickness: 0.7,
      glow: 2.5,
      taper: 3.0,
      spread: 1.2,
      intensity: 0.6,
      saturation: 1.5,
      opacity: 0.9,
      scale: 1.3,
      glass: false
    });

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          strands.updateOptions({
            colors: getThemeColors()
          });
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

  } catch (err) {
    console.error("Strands initialization failed:", err);
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
