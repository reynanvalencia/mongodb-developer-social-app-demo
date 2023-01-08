import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  logoBG: {
    fill:
      theme.colorScheme === "dark"
        ? theme.colors.brand[2]
        : theme.colors.brand[9],
  },
  logoStroke: {
    stroke:
      theme.colorScheme === "dark"
        ? theme.colors.brand[9]
        : theme.colors.dark[0],
  },
}));

export function Logo(props) {
  const { classes } = useStyles();

  return (
    <svg
      {...props}
      viewBox="0 0 1769 258"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Layer_1">
        <title>Layer 1</title>
        <text x="2.5" xmlSpace="preserve" textAnchor="start" fontFamily="'Truculenta'" fontSize="300" id="svg_1" y="200" strokeWidth="5" stroke="#bf0000" fill="#bf0000">Marites</text>
      </g>
    </svg>
  );
}
