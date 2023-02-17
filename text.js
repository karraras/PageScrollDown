let scroling = document.querySelector("header span");

window.onscroll = function () {
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  scroling.style.width = `${(scrollY / height) * 100}%`;
};
