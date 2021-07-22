function doSomething() {
  for (var i = 0; i < 5; i++) {
    console.log(i)
  }

  console.log('Finally: ' + i)
}

doSomething();
// Leaky data: i is still available outside of the for block
