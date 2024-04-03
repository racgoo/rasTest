const Gpio = require('pigpio').Gpio;
const LC = require("libcamera").libcamera; 
const led_B = new Gpio(17, {mode: Gpio.OUTPUT});
const led_Y = new Gpio(27, {mode: Gpio.OUTPUT});
let dutyCycle = 0;
LC.jpeg({config: {output: "test.jpg"}});
setInterval(() => {
  led_B.pwmWrite(dutyCycle);
  led_Y.pwmWrite(dutyCycle);
  dutyCycle += 5;
  if (dutyCycle > 255) {
    dutyCycle = 0;
  }
}, 20);
