/**
 * @fileOverview
 * @author Zoltan Toth
 * @version 0.1
 */

/**
 * @description
 * Vanilla Javascript tooltip.
 *
 * @class
 * @param {string} [options.theme=dark] - Selects one of the pre-defined tooltip styles - light or dark.
 * @param {number} [options.dist=10] - Specifies the distance in pixels from trigger to tooltip.
 * @param {number} [options.delay=0] - Specifies how long the tooltip remains visible after the mouse leaves the trigger.
 */

Tooltip = function(options) {
  const theme = options.theme || "dark",
    delay = options.delay || 0,
    dist = options.dist || 10;

  /*
   * Attaching one mouseover and one mouseout listener to the document
   * instead of listeners for each trigger
   */
  document.body.addEventListener("mouseover", function (e) {
    if (!e.target.hasAttribute("data-tooltip")) return;

    const tooltip = document.createElement("div");
    tooltip.className = "b-tooltip " + "b-tooltip-" + theme;
    tooltip.innerHTML = e.target.getAttribute("data-tooltip");
    document.body.appendChild(tooltip);

    const pos = e.target.getAttribute("data-position") || "center top";
    const posHorizontal = pos.split(" ")[0];
    const posVertical = pos.split(" ")[1];

    positionAt(e.target, tooltip, posHorizontal, posVertical);
  });

  document.body.addEventListener("mouseout", function (e) {
    if (e.target.hasAttribute("data-tooltip")) {
      setTimeout(function () {
        document.body.removeChild(document.querySelector(".b-tooltip"));
      }, delay);
    }
  });

  /**
   * Positions the tooltip.
   *
   * @param {object} parent - The trigger of the tooltip.
   * @param {object} tooltip - The tooltip itself.
   * @param {string} posHorizontal - Desired horizontal position of the tooltip relatively to the trigger (left/center/right)
   * @param {string} posVertical - Desired vertical position of the tooltip relatively to the trigger (top/center/bottom)
   *
   */
  function positionAt(parent, tooltip, posHorizontal, posVertical) {
    let parentCoords = parent.getBoundingClientRect(),
      left,
      top;

    console.log(posVertical);

    switch (posHorizontal) {
      case "left":
        left = parentCoords.left - dist - tooltip.offsetWidth;
        if (parentCoords.left - tooltip.offsetWidth < 0) {
          left = dist;
        }
        break;

      case "right":
        left = parentCoords.right + dist;
        if (
          parentCoords.right + tooltip.offsetWidth >
          document.documentElement.clientWidth
        ) {
          left =
            document.documentElement.clientWidth - tooltip.offsetWidth - dist;
        }
        break;

      default:
      case "center":
        left =
          parentCoords.left + (parent.offsetWidth - tooltip.offsetWidth) / 2;
    }

    switch (posVertical) {
      case "center":
        top =
          (parentCoords.top + parentCoords.bottom) / 2 -
          tooltip.offsetHeight / 2;
        break;

      case "bottom":
        top = parentCoords.bottom + dist;
        break;

      default:
      case "top":
        top = parentCoords.top - tooltip.offsetHeight - dist;
    }

    left = left < 0 ? parentCoords.left : left;
    top = top < 0 ? parentCoords.bottom + dist : top;

    tooltip.style.left = left + "px";
    tooltip.style.top = top + pageYOffset + "px";
  }
}
