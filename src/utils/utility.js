export const toggleThemeColors = (theme) => {
  const isDark = theme === "dark";
  document.documentElement.style.setProperty(
    "--background-dark",
    isDark ? "#22202e" : "#ffffff"
  );
  document.documentElement.style.setProperty(
    "--background-light",
    // isDark ? "#2d2b39" : "#f4f6ff"
    isDark ? "#2d2b39" : "#e5e5e5"
  );
  document.documentElement.style.setProperty(
    "--text-color",
    !isDark ? "#2d2b39" : "#fdfeff"
  );
};

export const getFinishedSubtasks = (subTasks) => {
  return subTasks.reduce((acc, value) => {
    console.log(value, acc);
    if (value.completed) acc++;
    return acc;
  }, 0);
};
