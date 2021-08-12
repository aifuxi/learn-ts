(() => {
  // 函数类型
  const add: (x: number, y: number) => number = (
    a: number,
    b: number
  ): number => a + b;
  console.log('add(10, 20): ', add(10, 20));

  // 函数的默认值
  const fn = (arg: string = 'default string') => {
    console.log(arg);
  };
  console.log('fn: ', fn());

  // 剩余参数
  const fn2 = (...args: any[]) => {
    console.log('...args', args);
  };
  console.log('fn2: ', fn2(1, 'b', false, 0));

  console.log('😑😑😑😑😑😑😑😑😑😑');
})();
