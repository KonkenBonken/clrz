const Levels = [
  {
    setup() {
      Generator.build(0, 1, 1, [0, 280, 0]);
      Belt.build(1, 1, 1);
      Goal.build(3, 5, [0, 280, 0]);
    },
    goal: 20
  },
  {
    setup() {
      Generator.build(2, 8, 0, [360, 0, 0]);
      Belt.build(2, 7, 0);
      Generator.build(7, 2, 2, [0, 360, 0]);
      Belt.build(7, 3, 3);
      Goal.build(5, 5, [180, 180, 0]);
    },
    goal: 10
  },
  {
    setup() {
      Generator.build(0, 0, 1, [360, 0, 0]);
      Generator.build(0, 1, 1, [360, 360, 360]);
      Generator.build(0, 2, 1, [360, 360, 360]);
      Goal.build(9, 9, [360, 270, 270]);
    },
    goal: 10
  },
];