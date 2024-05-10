const Levels = [
  {
    setup() {
      Generator.build(0, 1, 1, [0, 200, 0]);
      Belt.build(1, 1, 1);
      Goal.build(3, 5, [0, 200, 0]);
    },
    goal: 20
  },
  {
    setup() {
      Generator.build(2, 8, 0, [255, 0, 0]);
      Belt.build(2, 7, 0);
      Generator.build(7, 2, 2, [0, 255, 0]);
      Belt.build(7, 3, 3);
      Goal.build(5, 5, [255 / 2, 255 / 2, 0]);
    },
    goal: 10
  },
];