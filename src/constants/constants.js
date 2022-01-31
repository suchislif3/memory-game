export const gameStates = {
  themeSelection: "THEMESELECTION",
  settingGridSize: "SETTINGGRIDSIZE",
  playing: "PLAYING",
};

export const cardThemes = {
  animals: "ANIMALS",
  abstract: "ABSTRACT",
  landscape: "LANDSCAPE",
};

export const basicGridSize = { rows: 6, columns: 6 };

export const images = {
  CARDBACK: {
    src: "/images/card-back.jpg",
    credit: {
      name: "Ryan Wilson",
      url: "https://unsplash.com/@rbwilson?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    }
  },
  ANIMALS: [
    {
      src: "images/animals/jacques-bopp-aBKYaN4c25Q-unsplash.jpg",
      credit: {
        name: "Jacques Bopp",
        url: "https://unsplash.com/@jacquesbopp?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
      },
    },
    {
      src: "images/animals/pietro-jeng-0Sd2qqU5soQ-unsplash.jpg",
      credit: `Photo by <a href="https://unsplash.com/@pietrozj?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Pietro Jeng</a> on <a href="https://unsplash.com/s/photos/animals?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      `,
    },
    {
      src: "/images/animals/hari-nandakumar-uIrWBJEvjC4-unsplash.jpg",
      credit: `Photo by <a href="https://unsplash.com/@hariprasad000?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Hari Nandakumar</a> on <a href="https://unsplash.com/s/photos/animals?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      `,
    },
    {
      src: "/images/animals/debbie-molle-6DSID8Ey9-U-unsplash.jpg",
      credit: `Photo by <a href="https://unsplash.com/@djmle29n?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Debbie Molle</a> on <a href="https://unsplash.com/s/photos/animals?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      `,
    },
    {
      src: "/images/animals/alejandro-contreras-wTPp323zAEw-unsplash.jpg",
      credit: `Photo by <a href="https://unsplash.com/@atrialis?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alejandro Contreras</a> on <a href="https://unsplash.com/s/photos/animals?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      `,
    },
  ],
  ABSTRACT: [],
  LANDSCAPE: [],
};
