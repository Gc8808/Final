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