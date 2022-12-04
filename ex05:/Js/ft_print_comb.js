function LanermaCombinaisons() {
  for (var i = 0; i <= 9; i++) {
    for (var j = 0; j <= 9; j++) {
      for (var k = 0; k <= 9; k++) {
        if (i != j && i != k && j != k) {
          console.log(i + "" + j + "" + k);
        }
      }
    }
  }
}
