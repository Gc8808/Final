document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("rosterGrid");
    const render = list => {
       grid.innerHTML = ""; // Clear previous content
       list.forEach(p => {
           const col = document.createElement("div");
           col.className = "col-6 col-lg-2";
              col.innerHTML = `
                <div class="card h-100 shadow-sm ">
                     <img src="${p.photo}" class="card-img-top" alt="${p.name}">
                     <div class="card-body text-center">
                          <h5 class="card-title mb-1">${p.name}</h5>
                          <p class="card-text">Age: ${p.age}</p>
                            <p class="card-text">Country: ${p.country}</p>
                            <p class="badge badge-position bg-dark badge-pos-$(p.position}"> ${p.position}</p>
                            ${p.button}
                        </div>
                    </div>
                ` 
              grid.appendChild(col);
       });
    };
    render(players)
    // Example usage: render([]); // Pass your list here
});

//Startup lines

const splash = document.getElementById('splash');
const content = document.getElementById('main-content');
const progressBar = document.getElementById('progress-bar');

let progress = 0;
const intervalTime = 50; // ms
const totalTime = 5000; // 5 seconds
const steps = totalTime / intervalTime;

const interval = setInterval(() => {
  progress++;
  progressBar.style.width = `${(progress / steps) * 100}%`;
  if (progress >= steps) {
    clearInterval(interval);
    splash.style.opacity = '0';
    setTimeout(() => {
      splash.style.display = 'none';
      content.style.display = 'block';
    }, 1000); // match fade out time
  }
}, intervalTime);