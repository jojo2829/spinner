const chars = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];

const spinner = () => {
  let time = 100;

  for (const char of chars) {
    time += 400;
    setTimeout(() => {
      process.stdout.write(char);
    }, time);
  }
}

spinner(chars);
