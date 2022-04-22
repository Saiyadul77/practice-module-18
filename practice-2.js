function traficSignal(light) {
    if (light == 'red') {
        console.log('Do not move or pass road');
    }
    else if (light == 'yellow') {
        console.log('should be stopped');
    }
    else if (light == 'green') {
        console.log('should pass road');
    }
    else {
        console.log('As your wish');
    }
    return light;
}
const traffic = traficSignal('blue');