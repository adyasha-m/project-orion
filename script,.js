const terminal = document.getElementById("terminal");

const lines = [
  "Initializing PROJECT ORION...\n",

  "Secure connection established.\n",

  "Scanning candidate...\n",

  "✓ Artificial Intelligence",

  "✓ Linux",

  "✓ Robotics",

  "✓ Embedded Systems",

  "✓ Pattern Recognition\n",

  "Candidate Accepted.\n",

  "Recovery Teams: FAILED",

  "Recovered Fragments: 0 / 7\n",

  "MISSION:",

  "Five hours ago ORION fragmented itself across the public internet.",

  "Only one candidate matches the recovery profile.",

  "\nWelcome, Agent.",
];

let i = 0;

function typeLine() {
  if (i < lines.length) {
    terminal.innerHTML += lines[i] + "\n";

    i++;

    setTimeout(typeLine, 700);
  } else {
    document.getElementById("beginButton").hidden = false;
  }
}

setTimeout(typeLine, 1000);

function startMission() {
  window.location.href = "https://github.com/adyasha-m/project-orion";
}
