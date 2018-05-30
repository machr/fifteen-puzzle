export default function shuffleArray(array){
    var i = array.length, randNum, temp;
    while(--i > 0){
        randNum = Math.floor(Math.random() * (i+1));
        temp = array[randNum];
        array[randNum] = array[i];
        array[i] = temp;
    }
    return array;
}