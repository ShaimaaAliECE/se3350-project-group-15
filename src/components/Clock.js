export default function initLocalClocks(clockHtml) {
    // Get the local time using JS
    var date = new Date;
    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hours = date.getHours();

    // Create an object with each hand and it's angle in degrees
    var hands = [
        {
            hand: 'hours',
            angle: (hours * 30) + (minutes / 2)
        },
        {
            hand: 'minutes',
            angle: (minutes * 6)
        },
        {
            hand: 'seconds',
            angle: (seconds * 6)
        }
    ];
    // Loop through each of these hands to set their angle
    for (let i = 0; i < clockHtml.length; i++) {
        clockHtml[i].style.webkitTransform = 'rotateZ(' + hands[i].angle + 'deg)';
        clockHtml[i].style.transform = 'rotateZ(' + hands[i].angle + 'deg)';
        if (hands[i].hand === 'minutes') {
            clockHtml[i].parentNode.setAttribute('data-second-angle', hands[i + 1].angle);
        }
    }
}