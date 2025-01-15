function themeChanger() {
  let theme = document.body;
  theme.classList.toggle("dark-mode");
}

/*
function themeChanger() {
    let theme = document.body;
    
    //localStorage.setItem("theme")
    //localStorage.getItem("theme", newTheme);

  if (document.documentElement.classList.contains("dark-mode")) {
           localStorage.setItem("theme", "dark-mode");
           theme.classList.toggle("dark-mode");
      } else {
        localStorage.setItem("theme", "light-mode");
      }
  }
    
  */
