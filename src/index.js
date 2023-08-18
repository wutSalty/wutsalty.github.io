function switchTheme() {
  // Switching themes/First load
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

function toggleTheme() {
  // If dark then light. Or if light then dark
  if (document.documentElement.classList.contains('dark')) {
    localStorage.theme = 'light';
  } else {
    localStorage.theme = 'dark';
  }

  switchTheme();
}

switchTheme();

const timeText = document.getElementById("current-time");
const replaceTime = (element) => {
    options = {
        weekday: "short", day: "numeric", month: "short", hour: "numeric", minute: "numeric", second: "numeric", timeZone: "Australia/Sydney", timeZoneName: 'short'
    }
    const finalDate = new Intl.DateTimeFormat('default', options).format(new Date());
    element.innerHTML = finalDate;
}
setInterval(replaceTime, 1000, timeText);