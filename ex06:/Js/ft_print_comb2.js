function LancermaCombinaisons() {
  for (var i = 0; i <= 9; i++) {
    for (var j = 0; j <= 9; j++) {
      if (i != j) {
        console.log(i + "" + j);
      }
    }
  }
}
