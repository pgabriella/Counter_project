let decr = document.getElementById("decr");
  let incr = document.getElementById("incr");
  let counter = document.getElementById("counter");
  let count = 0;

  incr.addEventListener("click",()=>{
    count++;
    counter.innerHTML = count;
  });

  decr.addEventListener("click",()=> {
    count--;
    counter.innerHTML = count;
  });
