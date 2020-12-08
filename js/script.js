Book = () => {
    let startDate = document.getElementById('startDate').value;
    let endDate = document.getElementById('endDate').value;
    let a = moment(startDate).format('YYYY/MM/DD')
    let b = moment(startDate).add(5, 'days').calendar();
    let Note = document.getElementById('note').value
    // moment(a).format('YYYY/MM/DD')
    alert('Start day: ' + a + ' End day: ' + b +' Note: '+Note);
}