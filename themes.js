const themeSelected = document.getElementById("slider")

function defaultTheme (htmlTag) {
  htmlTag.setAttribute('data-theme', 'dark')
  window.localStorage.setItem('site-theme', 'dark')
  window.localStorage.setItem('slider-val', '1')
}

function toggleTheme () {
  const themeNum = document.getElementById("slider").value;
  const htmlTag = document.getElementsByTagName('html')[0]

  switch(themeNum) {
    case "1":
      defaultTheme(htmlTag)
      break;
    case "2":
      htmlTag.setAttribute('data-theme', 'light')
      window.localStorage.setItem("site-theme", "light")
      window.localStorage.setItem("slider-val", "2")
      break;
    case "3":
      htmlTag.setAttribute('data-theme', 'purple')
      window.localStorage.setItem("site-theme", "purple")
      window.localStorage.setItem("slider-val", "3")
      break;
    default:
      defaultTheme(htmlTag)
  }
}

function applyInitialTheme () {
  const theme = window.localStorage.getItem("site-theme")
  const sliderValue = window.localStorage.getItem("slider-val")

  if (theme !== null) {
    const htmlTag = document.getElementsByTagName("html")[0]
    const slider = document.getElementById("slider");

    htmlTag.setAttribute("data-theme", theme)
    slider.value = sliderValue;
  }
}

applyInitialTheme();

themeSelected.addEventListener("input", toggleTheme);