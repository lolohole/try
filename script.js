document.addEventListener('DOMContentLoaded', () => {
    const counterElement = document.getElementById('counter');
    let count = 0;

    document.getElementById('increase').addEventListener('click', () => {
        count++;
        counterElement.textContent = count;
    });

    document.getElementById('decrease').addEventListener('click', () => {
        count--;
        counterElement.textContent = count;
    });
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then((registration) => {
        console.log('ServiceWorker registered with scope:', registration.scope);
      })
      .catch((error) => {
        console.error('ServiceWorker registration failed:', error);
      });
  });
}
