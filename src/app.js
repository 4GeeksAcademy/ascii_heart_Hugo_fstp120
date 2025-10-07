const asciiHeart = [
  "⣠⣤⣶⣶⣦⣄⡀  ⠀⢀⣤⣴⣶⣶⣤⣀",
  "⣼⣿⣿⣿⣿⣿⣿⣷⣤⣾⣿⣿⣿⣿⣿⣿⣧",
  "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
  "⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏",
  " ⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋ ",
  "   ⠙⢿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠁⠀",
  "     ⠉⢿⣿⣿⣿⠟⠋⠀",
  "⠀      ⠙⠻⠁"
]

function printCharByChar(lines, ms) {
  let totalRetraso = 0
  lines.forEach(linea => {
    linea.split('').forEach(caracter => {
      setTimeout(() => process.stdout.write(caracter), totalRetraso)
      totalRetraso += ms
    })
    setTimeout(() => process.stdout.write("\n"), totalRetraso)
    totalRetraso += ms
  })
}
printCharByChar(asciiHeart, 100)

/*
 function printLineByLine(lines, ms) {
  lines.forEach((line, index) => {
    setTimeout(() => console.log(line), index * ms)
  })
}

// Ejecución

// printLineByLine(asciiHeart, 300)*/