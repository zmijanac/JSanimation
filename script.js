function myMove() {
  let di = null;
  const elem = document.getElementById("animate");   
  let pos = 0;
  clearInterval(di);
  di = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(di);
    } else {
      pos++; 
      elem.style.top = pos + "px"; 
      elem.style.left = pos + "px"; 
    }
  }
}
