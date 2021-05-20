// function sliderWidthMonipulation() {
//   const list = document.querySelector(".history__list");
//   let innerWidth = 0;
//   let a = 0;
//   for (let i = 0; i < list.children.length; i++) {
//     innerWidth +=
//       list.children[i].offsetWidth +
//       Number(
//         getComputedStyle(list.children[i]).marginRight.slice(
//           0,
//           getComputedStyle(list.children[i]).marginRight.length - 2
//         )
//       );
//     a += list.children[i].offsetWidth;
//   }
//   if (innerWidth > list.offsetWidth) {
//     list.classList.add("history__list--width");
//   }
// }

// $(document).ready(function () {
//   const history__list = document.querySelector(".history__list");
//   sliderWidthMonipulation();
//   $(".history__list").slick({
//     infinite: false,
//     slidesToShow: 11,
//     slidesToScroll: 1,
//     draggable: false,
//   });
// });


/**
 * @param {string} s
 * @return {number}
 */
 var balancedStringSplit = function(s) {
  // time O(n)
  // space O(n)

// hint suggested use number to record how many L R
// but I still think stack will be better to understand

  let count = 0
  const stack = [s[0]] // get first char into the stack as start

  for (let i = 1; i < s.length; i++) {
  // loop each char in the string, if its same with prev char in the stack or the stack is empty
  // means we need to push into the stack and continue
    if (s[i] === stack[stack.length - 1] || stack.length < 1) {
      stack.push(s[i])
      continue
    }
  // if it is not same e.g. L meet R or R meet L
  // it means we hit a "couple", we remove the last char in the stack
  // check if its empty after our removal, then it means we actually completed a minimum balanced "pair" "combo"
  // thus, we add the count
    stack.pop()
    if (stack.length < 1) count += 1
  }
  return count
};

console.log(balancedStringSplit("RLRRRLLRLL"));