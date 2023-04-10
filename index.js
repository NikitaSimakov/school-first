const entry = document.querySelector("entry");

const firstChild = entry.firstElementChild;

const allChildren = firstChild.querySelectorAll("div");

function solution(selector) {
  const firstChild = selector.firstElementChild;

  //   const allChildren = firstChild.querySelectorAll("div");
  const xMake = firstChild.querySelectorAll("[x-make]");

  console.log(xMake);
  xMake.forEach((el) => {
    const value = el.attributes["x-make"].value;

    if (value.includes("copy")) {
      console.log(Number(el.attributes["x-make"].value.split(":")));
      const num = Number(el.attributes["x-make"].value.split(":")[1]);
      for (let i = 1; i <= num; i += 1) {
        const dupNode = el.cloneNode(true);
        el.after(dupNode);
      }
      return;
    }
  });
  xMake.forEach((el) => {
    const value = el.attributes["x-make"].value;
    if (value.includes("remove")) {
      const num = Number(
        el.attributes["x-make"].value.slice(value.length - 1, value.length)
      );
      for (let i = 1; i <= num; i += 1) {
        el.nextElementSibling.remove();
      }
    }
    return;
  });
}

solution(document.querySelector("entry"));
