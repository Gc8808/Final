const players = [
  {
    name: "Wooden Airplane",
    age: "$5.00",
    country: "3.5 inches height ; 7 inches length ; 7 inches width",
    position: "5+ years",
    photo: "download.jpg",
    button: '<button onclick="showProfile(\'Cristiano Ronaldo\')" class="btn btn-primary">View Profile</button>'
  },
  {
    name: "Wooden Train Set",
    age: "$6.99",
    country: "84cm large ; 11cm height ; 13cm width",
    position: "3+ years",
    photo: "images.jpg",
    button: '<button onclick="showProfile(\'Lionel Messi\')" class="btn btn-primary">View Profile</button>'
  },
  {
    name: "Wooden Boat",
    age: "$7.49",
    country: "10.5 width ; 3.5 height",
    position: "All ages",
    photo: "ney.jpg",
    button: '<button onclick="showProfile(\'Neymar\')" class="btn btn-primary">View Profile</button>'
  },
  {
    name: "Wooden Block Set",
    age: "$5.30",
    country: "13 large ; 12 width; 2 height",
    position: "3+ years",
    photo: "i.jpg",
    button: '<button onclick="showProfile(\'Kylian Mbappé\')" class="btn btn-primary">View Profile</button>'
  },
  {
    name: "Wooden Car",
    age: "$6.79",
    country: "16 width ; 7 height",
    position: "6+ years",
    photo: "",
    button: '<button onclick="showProfile(\'Robert Lewandowski\')" class="btn btn-primary">View Profile</button>'
  }
];

function showProfile(name) {
  const player = players.find(p => p.name === name);
  if (!player) return;

  document.getElementById("modalHead").textContent = player.name;
  document.getElementById("modalBody").innerHTML = `
    <img src="${player.photo}" class="img-fluid mb-3" alt="${player.name}">
    <p><strong>Age:</strong> ${player.age}</p>
    <p><strong>Country:</strong> ${player.country}</p>
    <p><strong>Position:</strong> ${player.position}</p>
    <p>${getBio(player.name)}</p>
  `;

  // Show modal using Bootstrap JS
  const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
  modal.show();
}

// Optional: Basic bios
