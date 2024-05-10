const Levels = [
  {
    setup() {
      Generator.build(0, 1, 1, [0, 200, 0]);
      Belt.build(2, 1, 1);
      Goal.build(3, 5, [0, 200, 0]);
    },
    goal: 20
  },
];