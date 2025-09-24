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
/**
 * Imprime el corazón carácter por carácter con retardo.
 * @param {string[]} lines - Array de strings que representan el corazón.
 * @param {number} ms - Milisegundos de retardo entre caracteres.
 */
function printCharByChar(lines, ms) {
  let totalDelay = 0

  lines.forEach(line => { //
    line.split('').forEach(char => {
      setTimeout(() => process.stdout.write(char), totalDelay)
      totalDelay += ms
    })

    // Agregar salto de línea después de cada línea completa
    setTimeout(() => process.stdout.write("\n"), totalDelay)
    totalDelay += ms
  })
}
printCharByChar(asciiHeart, 100)

/*
 * Imprime el corazón línea por línea con retardo.
 * @param {string[]} lines - Array de strings que representan el corazón.
 * @param {number} ms - Milisegundos de retardo entre líneas.
 
function printLineByLine(lines, ms) {
  lines.forEach((line, index) => {
    setTimeout(() => console.log(line), index * ms)
  })
}

// Ejecución

// printLineByLine(asciiHeart, 300)*/