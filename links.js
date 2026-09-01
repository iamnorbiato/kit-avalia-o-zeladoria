const linksDoKit = {
  questionario: "https://forms.gle/we7BQiZvWnN8V7rg7",
};

document.querySelectorAll("#link-questionario").forEach((link) => {
  link.href = linksDoKit.questionario;
});
