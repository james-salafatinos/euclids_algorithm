var euclids_algorithm = function (M, N) {
    var x = M;
    var y = N;
    var max_iter = 100;
    var GCD = 1;
    for (var i = 0; i < max_iter; i++) {
        if (x > y) {
            x = x - y;
        }
        if (x < y) {
            y = y - x;
        }
        if (x == y) {
            GCD = x;
            console.log("Greatest Common Diviser = ".concat(x));
            break;
        }
    }
    return GCD;
};
euclids_algorithm(1500, 165);
