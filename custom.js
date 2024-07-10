  /// Get the cursor effect element
  const cursorEffect = document.getElementById('cursor-effect');

  // Update the gradient styles on mouse movement

  document.addEventListener('mousemove', (e) => {
const x = e.clientX;
const y = e.clientY;

console.log(`Mouse position: (${x}, ${y})`);

cursorEffect.style.top = `${y-75}px`;
  cursorEffect.style.left = `${x-75}px`;
  // cursorEffect.style.bottom = `${x-75}px`;
  cursorEffect.style.width = "150px";
  cursorEffect.style.height = "150px";

  // Update the gradient styles
  const gradientStyles = {
      backgroundSize: `cover`,
      backgroundPosition: `center ${y/2}px ${x/2}px`
  };
  Object.keys(gradientStyles).forEach((key) => {
      cursorEffect.style[key] = gradientStyles[key];
  });


// ... rest of the code ...
});