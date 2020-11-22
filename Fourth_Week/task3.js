class Item{
    constructor(name, percent, price){
        this.name = name;
        this.percent = percent;
        this.price = 1000;
    }

    discount(){return this.price - (this.price/100 * this.percent)};
}

const firstItem = new Item("qbulka", 10);
const secondItem = new Item("banan", 25);
const thirdItem = new Item("torta", 50);

console.log(firstItem.discount());
console.log(secondItem.discount());
console.log(thirdItem.discount());

