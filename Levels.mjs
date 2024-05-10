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
      Goal.build(5, 5, [127.5, 127.5, 0]);
    },
    goal: 10
  },
  {
    setup() {
      Generator.build(0, 0, 1, [255, 0, 0]);
      Generator.build(0, 1, 1, [255, 255, 255]);
      Generator.build(0, 2, 1, [255, 255, 255]);
      Goal.build(9, 9, [255, 191.25, 191.25]);
    },
    goal: 10
  },
];