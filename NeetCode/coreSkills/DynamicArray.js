class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this.array = [];
        this.capacity = capacity;
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        return this.array[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        this.array[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        if (this.array.length === this.capacity) this.capacity++;
        this.array.push(n);
    }

    /**
     * @returns {number}
     */
    popback() {
        return this.array.pop();
    }

    /**
     * @returns {void}
     */
    resize() {
        this.capacity *= 2;
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.array.length;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity;
    }
}

// ["Array", 1, "getSize", "getCapacity", "pushback", 1, "getSize", "getCapacity", "pushback", 2, 
//"getSize", "getCapacity", "get", 1, "set", 1, 3, "get", 1, "popback", "getSize", "getCapacity"]

const array = new DynamicArray(2);
// console.log(array.getSize(), array.getCapacity(), array.pushback(1),array.getSize(),array.getCapacity(), array.pushback(2),array.getSize(),array.getCapacity(),array,array.get(1),array.set(1,3), array.get(1), array.popback(),array.getSize(), array.getCapacity());

// ["Array", 2, "pushback", 0, "pushback", 1, "pushback", 2, "getSize", "getCapacity"]
console.log(array.pushback(0),array.pushback(1),array.pushback(2), array.getSize(), array.getCapacity())
