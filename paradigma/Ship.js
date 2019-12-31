class Kapal {
    constructor(latitude,longitude) {
        this._latitude = latitude;
        this._longitude = longitude;
        this._createdDate = new Date();
    }

    get latitude() {
        return this._latitude;
    }

    get longitude() {
        return this._longitude;
    }

    get createdDate() {
        return this._createdDate;
    }
}

class PerahuMotor extends Kapal {
    constructor(latitude,longitude) {
        super(latitude,longitude);
        this._length = 6;
        this._width = 2;
        this._seat = 2;
        this._machine = 1;
    }

    get length() {
        return this._length;
    }

    get width() {
        return this._width;
    }

    get seat() {
        return this._seat;
    }

    get machine() {
        return this._machine;
    }
}

class PerahuLayar extends Kapal {
    constructor(latitude,longitude) {
        super(latitude,longitude);
        this._length = 10;
        this._width = 3;
        this._seat = 8;
        this._machine = 1;
    }

    get length() {
        return this._length;
    }

    get width() {
        return this._width;
    }

    get seat() {
        return this._seat;
    }

    get machine() {
        return this._machine;
    }
}

class KapalPesiar extends Kapal {
    constructor(latitude,longitude) {
        super(latitude,longitude);
        this._length = 100;
        this._width = 20;
        this._seat = 500;
        this._machine = 9;
    }

    get length() {
        return this._length;
    }

    get width() {
        return this._width;
    }

    get seat() {
        return this._seat;
    }

    get machine() {
        return this._machine;
    }
}
