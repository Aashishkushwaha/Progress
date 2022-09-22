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
    if (value.completed) acc++;
    return acc;
  }, 0);
};

export const keyUpHandler = (e, cb = () => {}) => {
  if (["Enter", " "].includes(e.key)) {
    cb();
  }
};

export const getColumnTitle = (title) => {
  switch (title) {
    case "todo":
      return `To kar Na (${title})`;
    case "doing":
      return `Kaam chalu hai (${title})`;
    case "done":
      return `Ho gaya (${title})`;
    default:
      return title;
  }
};

export const literalDeepCopy = (obj) => JSON.parse(JSON.stringify(obj));
