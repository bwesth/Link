export const app = [
  "<script>",
  "    import Box from './Box.svelte'",
  "</script>",
  "    \n",
  "<Box>",
  "    \n",
  "    </Box>",
];

export const box = [
  "<style>",
  "   .box {",
  `   	width: 300px;`,
  "   	border: 1px solid #aaa;",
  "   	border-radius: 2px;",
  "   	box-shadow: 2px 2px 8px rgba(0,0,0,0.1);",
  "   	padding: 1em;",
  "   	margin: 0 0 1em 0;",
  "   }",
  "</style>",
  "\n",
  '<div class="box">',
  "    <!-- content should be injected here -->",
  "</div>",
];
