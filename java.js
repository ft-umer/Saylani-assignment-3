  function Redirect() {


    var today = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var result = weekday[today.getDay()];

    if (weekday == "Monday") window.location = "b.html"
    if (weekday == "Tuesday") window.location = "b.html"
    if (weekday == "Wednesday") window.location = "b.html"
    if (weekday == "Thursday") window.location = "b.html"
    if (weekday == "Friday") window.location = "fruit.html"
    if (weekday == "Saturday") window.location = "a.html"
    if (weekday == "Sunday") window.location = "b.html"
  } 

//   function getRedirectUrl() {
//     const now = new Date();
//     const today = now.getDay();
//     const hours = now.getHours();

//     const first = rules.find(item =>
//         (item.day === undefined || item.day === today) &&
//         ((item.from === undefined || item.from >= hours) && (item.to === undefined || item.to < hours))
//     );

//     return first.url;
// }



    // const rules = [
    //     { day: 0, from: 0, to: 20, url: 'fruit.html' }, // Redirect for Sunday 00:00 - 20:00
    //     { day: 0, url: 'https://ya.ru/' }, // Redirect for Sunday for any other time
    //     { day: 5, url: 'https://bing.com/' }, // Redirect for Friday
    //     { from: 12, to: 13, url: 'https://rambler.ru/' }, // Redirect for all days 12:00 - 13:00
    //     { url: 'https://duckduckgo.com/' }, // Redirect for all other cases
    // ];

    // function getRedirectUrl() {
    //     const now = new Date();
    //     const today = now.getDay();
    //     const hours = now.getHours();

    //     const first = rules.find(item =>
    //         (item.day === undefined || item.day === today) &&
    //         ((item.from === undefined || item.from >= hours) && (item.to === undefined || item.to < hours))
    //     );

    //     return first.url;
    // }

    // function redirect() {
    //     window.location.href = getRedirectUrl();
    // }