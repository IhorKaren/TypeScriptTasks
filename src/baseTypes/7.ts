enum Week {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

function isWeekend(day: string): void {
  if (day === Week.Saturday || day === Week.Sunday) {
    console.log(true);
    return;
  }

  console.log(false);
}

isWeekend(Week.Monday);
