const entry = document.querySelector("entry");
// console.log(entry.querySelectorAll("[x-make]"));
// const firstChild = entry.firstElementChild;

// const allChildren = firstChild.querySelectorAll("div");

function solution(selector) {
  const domChildren = selector.querySelectorAll("[x-make]");

  //   const allChildren = firstChild.querySelectorAll("div");
  //   const xMake = firstChild.querySelectorAll("[x-make]");

  console.log(domChildren);

  domChildren.forEach((el) => {
    const value = el.attributes["x-make"].value.split(":")[0];
    const num = Number(el.attributes["x-make"].value.split(":")[1]);
    // console.log(value, num);
    if (value === "copy") {
      for (let i = 0; i < num; i += 1) {
        dupNode = el.cloneNode(true);
        el.after(dupNode);
      }
    }
    if (value === "remove") {
      for (let i = 0; i < num; i += 1) {
        if (!el.nextElementSibling) {
          console.log("not nextElementSibling");
          return;
        }
        el.nextElementSibling.remove();
      }
    }
    if (value === "removeChildren") {
      for (let i = 0; i < num; i += 1) {
        if (!el.firstElementChild) {
          return;
        }
        el.firstElementChild.remove();
      }
    }
    if (value === "switch") {
      for (let i = 0; i < num; i += 1) {
        if (!el.nextElementSibling) {
          console.log("not nextElementSibling");
          return;
        }
        el.parentNode.insertBefore(
          el,
          el.nextElementSibling.nextElementSibling
        );
      }
    }
  });

  //   domChildren.forEach((el) => {
  //     console.log(selector.firstElementChild.attributes["x-make"]);
  //     const value = selector.firstElementChild.attributes["x-make"].value;

  //     const num = Number(el.attributes["x-make"].value.split(":")[1]);
  //     if (value.includes("removeChildren")) {
  //       selector.firstElementChild.firstElementChild.remove();
  //     }
  //     if (value.includes("switch")) {
  //     }
  //   });

  //   domChildren.forEach((el) => {
  //     const value = el.attributes["x-make"].value;

  //     if (value.includes("copy")) {
  //       console.log(Number(el.attributes["x-make"].value.split(":")));
  //       const num = Number(el.attributes["x-make"].value.split(":")[1]);
  //       for (let i = 1; i <= num; i += 1) {
  //         const dupNode = el.cloneNode(true);
  //         el.after(dupNode);
  //       }
  //       return;
  //     }
  //   });

  //   domChildren.forEach((el) => {
  //     const value = el.attributes["x-make"].value;
  //     if (value.includes("remove")) {
  //       const num = Number(el.attributes["x-make"].value.split(":")[1]);
  //       for (let i = 1; i <= num; i += 1) {
  //         el.nextElementSibling.remove();
  //       }
  //     }
  //     return;
  //   });
}

solution(document.querySelector("entry"));
