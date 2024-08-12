// Using 1-counter.md or 2-counter.md from the easy section,
// can you create a clock that shows you the current machine time?
// Can you make it so that it updates every second, and shows time in the following formats -
// HH:MM::SS (Eg. 13:45:23)
// HH:MM::SS AM/PM (Eg 01:45:23 PM)

const clockWith24HourFormat = () => {
  setInterval(() => {
    const date = new Date();

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    console.log(`24 Hour Format Clock: ${hours}:${minutes}:${seconds}`);
  }, 1000);
};

const clockWith12HourFormat = () => {
  setInterval(() => {
    const date = new Date();

    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const meridiem = hours >= 12 ? "PM" : "AM";

    hours %= 12;
    if (hours === 0) {
      hours = 12;
    }

    console.log(
      `12 Hour Format Clock: ${hours}:${minutes}:${seconds} ${meridiem}`
    );
  }, 1000);
};

clockWith24HourFormat();
clockWith12HourFormat();
