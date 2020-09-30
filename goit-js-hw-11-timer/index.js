class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.secs = document.querySelector('span[data-value="secs"]');
    this.mins = document.querySelector('span[data-value="mins"]');
    this.hours = document.querySelector('span[data-value="hours"]');
    this.days = document.querySelector('span[data-value="days"]');
    this.timerId = null;
    this.dateStart = null;
    this.delta = null;
    this.action = this.action.bind(this);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
  }

  action() {
    const sec = Math.floor((this.delta % (1000 * 60)) / 1000);
    const minutes = Math.floor((this.delta % (1000 * 60 * 60)) / (1000 * 60));
    const hours = Math.floor(
      (this.delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const days = Math.floor(this.delta / (1000 * 60 * 60 * 24));
    this.secs.textContent = this.pad(sec);
    this.mins.textContent = this.pad(minutes);
    this.hours.textContent = this.pad(hours);
    this.days.textContent = this.pad(days);
  }
  pad(value) {
    return String(value).padStart(2, "0");
  }
  start() {
    this.timerId = setInterval(() => {
      this.dateStart = Date.now();
      this.delta = this.targetDate.getTime() - this.dateStart;
      this.action();
      if (this.delta <= 0) {
        this.stop();
      }
    }, 1000);
  }
  stop() {
    clearInterval(this.timerId);
    const selector = document.querySelector(this.selector);
    selector.innerHTML = "";
  }
  init() {
    document.addEventListener("DOMContentLoaded", this.start);
  }
}

const countdownTimer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Apr 04, 2024")
});
countdownTimer.init();
