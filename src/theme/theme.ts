export type Theme = { [key: string]: string | Theme };

export const theme: Theme = {
  button: {
    primary: {
      idle: {
        background: "#ba985d",
        text: "#fff",
        border: "#ba985d",
      },
      disabled: {
        background: "#e2e2e2",
        text: "#979797",
        border: "#e2e2e2",
      },
      hover: {
        background: "#d4b57f",
        text: "#fff",
        border: "#d4b57f",
      },
    },
    secondary: {
      idle: {
        background: "#fff",
        text: "#ba985d",
        border: "#ba985d",
      },
      disabled: {
        background: "#efefef",
        text: "#979797",
        border: "#979797",
      },
      hover: {
        background: "#fffbf5",
        text: "#ba985d",
        border: "#ba985d",
      },
    },
  },
};
