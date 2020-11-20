function writeCards( namesArray, event ) {
    const people = [ 'Lisa', 'Kaitlin', 'Jan' ] 
   let writeCards = []
    for (let i = 0; i < people.length; i++){
        writeCards.push( `Thank you, ${people[i]}, for the wonderful ${event} gift!` )
    }
    return writeCards
}
function countDown() {
    let countDown = 10;
    while (countDown >= 0) {
        console.log(countDown--);
    }
}

countDown(10);