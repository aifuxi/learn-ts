(() => {
  /**
   * 类的成员修饰符
   * public
   * private 在类的内部才能访问，子类也不能访问
   * proteced 受保护的，在类的内部访问，子类中可以访问，其他地方访问不到
   */

  // 抽象类
  abstract class Animal {
    // 抽象方法
    abstract run(): void;

    // 普通方法
    protected sayHi() {
      console.log('run');
    }
  }

  class Dog extends Animal {
    constructor() {
      super();
    }

    run(): void {
      console.log('dog run');
    }

    move() {
      this.sayHi();
    }
  }

  const dog = new Dog();
  dog.run();
  dog.move();

  console.log('😑😑😑😑😑😑😑😑😑😑');
})();
