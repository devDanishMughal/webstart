const section = document.querySelector(".second_section ");
const options = {
  attributes: true,
};

function callback(mutationList, observer) {
  mutationList.forEach(function (mutation) {
    if (mutation.type === "attributes" && mutation.attributeName === "class") {
      // handle class change
    }
  });
}

const observer = new MutationObserver(callback);
observer.observe(section, options);
