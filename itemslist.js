const players = [
  {
    name: "Cristiano Ronaldo",
    age: 38,
    country: "Portugal",
    position: "Forward",
    photo: "download.jpg",
    button: '<button onclick="showProfile(\'Cristiano Ronaldo\')" class="btn btn-primary">View Profile</button>'
  },
  {
    name: "Lionel Messi",
    age: 36,
    country: "Argentina",
    position: "Forward",
    photo: "images.jpg",
    button: '<button onclick="showProfile(\'Lionel Messi\')" class="btn btn-primary">View Profile</button>'
  },
  {
    name: "Neymar",
    age: 31,
    country: "Brazil",
    position: "Forward",
    photo: "ney.jpg",
    button: '<button onclick="showProfile(\'Neymar\')" class="btn btn-primary">View Profile</button>'
  },
  {
    name: "Kylian Mbappé",
    age: 24,
    country: "France",
    position: "Forward",
    photo: "i.jpg",
    button: '<button onclick="showProfile(\'Kylian Mbappé\')" class="btn btn-primary">View Profile</button>'
  },
  {
    name: "Robert Lewandowski",
    age: 35,
    country: "Poland",
    position: "Forward",
    photo: "lew.jpg",
    button: '<button onclick="showProfile(\'Robert Lewandowski\')" class="btn btn-primary">View Profile</button>'
  },
  {
    name: "Robert Lewandowski",
    age: 35,
    country: "Poland",
    position: "Forward",
    photo: "lew.jpg",
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
function getBio(name) {
  const bios = {
    "Cristiano Ronaldo": "Cristiano Ronaldo is a Portuguese footballer known for his goal-scoring, leadership, and numerous accolades.",
    "Lionel Messi": "Lionel Messi is an Argentine football legend with 7 Ballon d'Or titles and known for his dribbling and vision.",
    "Neymar": "Neymar is a Brazilian forward famous for his flair, creativity, and performances for club and country.",
    "Kylian Mbappé": "Mbappé is a young French star, World Cup winner, and key player for PSG.",
    "Robert Lewandowski": "Lewandowski is a Polish striker known for his consistency and finishing.",
    "Mohamed Salah": "Salah is an Egyptian forward known for his pace and success at Liverpool.",
    "Harry Kane": "Kane is an English striker recognized for his goal-scoring and playmaking.",
    "Kevin De Bruyne": "De Bruyne is a Belgian midfielder known for his passing and intelligence.",
    "Luka Modrić": "Modrić is a Croatian playmaker and Ballon d'Or winner known for his control and vision.",
    "Casemiro": "Casemiro is a Brazilian defensive midfielder renowned for his tactical strength.",
    " Kanté": "Kanté is a French midfielder with unmatched work rate and defensive skills."
  };
  return bios[name] || "This player's biography is unavailable.";
}