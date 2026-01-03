function openSport(sport) {
  const rulebooks = {
    cricket: "cricket.pdf",
    badminton: "badminton.pdf",
    volleyball: "volleyball.pdf",
    kabaddi: "kabaddi.pdf",
    tabletennis: "tabletennis.pdf",
    chess: "chess.pdf",
    carrom: "carrom.pdf",
    athletics: "athletics.pdf",
    basketball: "basketball.pdf"
  };

  if (rulebooks[sport]) {
    window.open("rulebooks/" + rulebooks[sport], "_blank");
  } else {
    alert("Rulebook not uploaded yet!");
  }

  document.getElementById("sportTitle").innerText =
    "Register for " + sport.toUpperCase();

  document.getElementById("sport").value = sport;

  document.getElementById("register").scrollIntoView({ behavior: "smooth" });
}


document.getElementById("regForm").addEventListener("submit", function(e){
  e.preventDefault(); // prevent page reload

  const name = document.getElementById("name").value;
  const roll = document.getElementById("roll").value;
  const dept = document.getElementById("dept").value;
  const sport = document.getElementById("sport").value;

  
  const csvHeader = "Name,Roll,Department,Sport\n";
  const csvRow = `${name},${roll},${dept},${sport}\n`;

  
  let csvContent = csvHeader + csvRow;


  const blob = new Blob([csvContent], { type: "text/csv" });
  const url = URL.createObjectURL(blob);


  const a = document.createElement("a");
  a.href = url;
  a.download = `registration_${sport}.csv`; 
  a.click();
  URL.revokeObjectURL(url);

  alert("Registration saved! CSV downloaded.");

  
  document.getElementById("regForm").reset();
});
