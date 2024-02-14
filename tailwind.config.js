module.exports = {
    mode: "jit",
    content: [],
    theme: {
      extend: {
        colors: {
          "very-dark-brown": "#261B13",
          "dark-brown": "#402E20",
          brown: "#59402D",
          "light-brown": "#BE9671",
          "very-light-brown": "#FADEBE",
          white: "#E8E6E4",
          "accent-orange": "#FF7200",
          "accent-yellow": "#FFAA00",
          "example-text-light": "rgba(232, 230, 228, 0.75)",
          "example-text-dark": "rgba(38, 27, 19, 0.6)",
          "rank-copper": "#F2852A",
          "rank-silver": "#B5B5B5",
          "rank-gold": "#F4AE10",
        },
        fontFamily: {
          sans: ["Ubuntu", "sans-serif"],
        },
        screens: {
          "side-panel-sm": "256px",
          "side-panel-md": "320px",
          "side-panel-lg": "384px",
        },
      },
    },
    plugins: [
      function ({ addVariant }) {
        addVariant("last-1", "&:first-child>:last-child");
        addVariant("first-1", "&:first-child>:first-child");
        addVariant("first-2", "&:first-child>:first-child>:first-child");
        addVariant("first-3", "&:first-child>:first-child>:first-child>:first-child");
        addVariant("first-4", "&:first-child>:first-child>:first-child>:first-child>:first-child");
      },
    ],
  };