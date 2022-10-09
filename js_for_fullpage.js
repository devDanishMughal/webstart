$(document).ready(function () {
  const first_section = document.querySelector(".first_section");
  const second_section = document.querySelector(".second_section");
  const third_section = document.querySelector(".third_section");
  const img1 = document.querySelector(".img1");
  const img2 = document.querySelector(".img2");
  const img3 = document.querySelector(".img3");
  const options = {
    attributes: true,
  };

  function callback(mutationList, observer) {
    mutationList.forEach(function (mutation) {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "class"
      ) {
        if (
          mutation.target.classList.contains("fp-completely") &&
          mutation.target.classList.contains("first_section")
        ) {
          // console.log("first_section");
          img1.style.display = "block";
          img2.style.display = "none";
          img3.style.display = "none";
          first_section.classList.add("flash_light");
          second_section.classList.remove("flash_light");
          third_section.classList.remove("flash_light");
          

        }
        if (
          mutation.target.classList.contains("fp-completely") &&
          mutation.target.classList.contains("second_section")
        ) {
          // console.log("second_section");
          img1.style.display = "none";
          img2.style.display = "block";
          img3.style.display = "none";

          first_section.classList.remove("flash_light");
          second_section.classList.add("flash_light");
          third_section.classList.remove("flash_light");
        }
        if (
          mutation.target.classList.contains("fp-completely") &&
          mutation.target.classList.contains("third_section")
        ) {
          // console.log("third_section");
          img1.style.display = "none";
          img2.style.display = "none";
          img3.style.display = "block";

          first_section.classList.remove("flash_light");
          second_section.classList.remove("flash_light");
          third_section.classList.add("flash_light");
        }
      }
    });
  }

  const observer = new MutationObserver(callback);
  observer.observe(first_section, options);
  observer.observe(second_section, options);
  observer.observe(third_section, options);
});


