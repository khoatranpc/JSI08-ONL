console.log(`Connected`);
// 1. Kế thừa
// 2. Đa hình
// 3. Đóng gói setter, getter
// 4. Trừu tượng
const pi = 3.14;
function test() {

}

class Father {
    constructor(name, skin, height, place, job) {
        this.name = name;
        this.skin = skin;
        this.height = height;
        this.place = place;
        this.job = job;
    }
    set setJob(_job) {
        this.job = _job;
    }
    get getJob() {
        return this.job;
    }
    eat() {
        console.log(`${this.name} Đang ăn nè!`);
        this.sleep();
    }
    sleep() {
        console.log(`Đang ngủ nè!`);
    }
}

export { pi, test, Father}

