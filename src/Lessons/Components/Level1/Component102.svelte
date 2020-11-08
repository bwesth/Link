<script>
  import { flip } from "svelte/animate";
  import { C101inputs } from "./inputs.js";

  import C101 from "./C101";

  let lines = C101.filter(line => line !== "");

  let scriptPos = {
    start: lines.indexOf(C101inputs[0]),
    end: lines.indexOf(C101inputs[1])
  };
  let stylePos = {
    start: lines.indexOf(C101inputs[2]),
    end: lines.indexOf("</style>")
  };

  let scripts = lines.slice(scriptPos.start + 1, scriptPos.end),
    styles = lines.slice(stylePos.start + 1, stylePos.end),
    divs = lines.slice(stylePos.end + 2, lines.length - 1);
  lines = lines.filter(line => !C101inputs.includes(line));
  lines = lines.filter(line => line !== "</style>");

  let baskets = [
    {
      start: C101inputs[0],
      items: [],
      end: C101inputs[1]
    },
    {
      start: C101inputs[2],
      items: [],
      end: C101inputs[3]
    },
    {
      start: C101inputs[4],
      items: [],
      end: C101inputs[5]
    },
    {
      start: "Drag these elements into the right box",
      items: [...lines],
      end: ""
    }
  ];

  let hoveringOverBasket;

  function dragStart(event, basketIndex, itemIndex) {
    // The data we want to make available when the element is dropped
    // is the index of the item being dragged and
    // the index of the basket from which it is leaving.
    const data = { basketIndex, itemIndex };
    event.dataTransfer.setData("text/plain", JSON.stringify(data));
  }

  function drop(event, basketIndex) {
    event.preventDefault();
    const json = event.dataTransfer.getData("text/plain");
    const data = JSON.parse(json);

    // Remove the item from one basket.
    // Splice returns an array of the deleted elements, just one in this case.
    const [item] = baskets[data.basketIndex].items.splice(data.itemIndex, 1);

    // Add the item to the drop target basket.
    baskets[basketIndex].items.push(item);
    baskets = baskets;

    hoveringOverBasket = null;
    check();
  }
  function checkBasket(basket, array) {
    for (let i = 0; i < array.length; i++) {
      if (basket.items[i] !== array[i]) {
        return false;
      }
    }
    return true;
  }

  function check() {
    const script = checkBasket(baskets[0], scripts);
    const style = checkBasket(baskets[1], styles);
    const paintings = checkBasket(baskets[2], divs);
    if (script && style && paintings) {
      setTimeout(function() {
        alert("YES!");
      }, 500);
    }
  }
</script>

<style>
  .hovering {
    border-color: orange;
  }
  .item {
    display: inline; /* required for flip to work */
  }
  li {
    background-color: lightgray;
    cursor: pointer;
    display: inline-block;
    margin-right: 10px;
    padding: 10px;
    width: 160px;
  }
  li:hover {
    background: orange;
    color: white;
  }
  ul {
    border: solid lightgray 1px;
    display: flex; /* required for drag & drop to work when .item display is inline */
    height: 70px; /* needed when empty */
    width: 100%;
    padding: 10px;
    margin: 0;
  }

  .script,
  .style,
  .p {
    flex-direction: column;
    height: 120px; /* needed when empty */
    width: 180px;
  }
</style>

{#each baskets as basket, basketIndex (basket)}
  <div animate:flip>
    <b>{basket.start}</b>
    <ul
      class={basket.start.substring(1, basket.start.length - 1)}
      class:hovering={hoveringOverBasket === basket.start}
      on:dragenter={() => (hoveringOverBasket = basket.start)}
      on:dragleave={() => (hoveringOverBasket = null)}
      on:drop={event => drop(event, basketIndex)}
      ondragover="return false">
      {#each basket.items as item, itemIndex (item)}
        <div class="item" animate:flip>
          <li
            draggable={true}
            on:dragstart={event => dragStart(event, basketIndex, itemIndex)}>
            {item}
          </li>
        </div>
      {/each}
    </ul>
    <b>{basket.end}</b>

  </div>
{/each}
