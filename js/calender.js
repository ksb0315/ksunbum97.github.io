function calenderHTML(date) {
    const calender = document.querySelector(".container .calender");
    var calenderYear = date.getFullYear();
    var calenderMonth = date.getMonth() + 1;
    var calenderToday = date.getDate();

    const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    // 윤년 계산
    if (calenderYear % 400 == 0) {
        monthDays[1] = 29;
    } else if (calenderYear % 100 == 0) {
        monthDays[1] = 28;
    } else if (calenderYear % 4 == 0) {
        monthDays[1] = 29;
    }

    var calenderMonthLastDate = monthDays[calenderMonth-1];

    var monthStartDay = new Date(calenderYear, date.getMonth(), 1);
    var calenderMonthStartDay = monthStartDay.getDay();

    var calenderWeekCount = Math.ceil((calenderMonthStartDay + calenderMonthLastDate) / 7);

    var calenderLayout = document.createElement("table");

    var yearmonthOnCal = document.querySelector(".calender-yearmonth");
    yearmonthOnCal.innerText = `${calenderYear}.${calenderMonth}`;

    var thead = document.createElement("thead");
    var columnDate = document.createElement("tr");

    var il = document.createElement("th");
    il.innerText = "일";
    il.className = "sunday";
    columnDate.appendChild(il);
    var wal = document.createElement("th");
    wal.innerText = "월";
    columnDate.appendChild(wal);
    var hwa = document.createElement("th");
    hwa.innerText = "화";
    columnDate.appendChild(hwa);
    var su = document.createElement("th");
    su.innerText = "수";
    columnDate.appendChild(su);
    var mok = document.createElement("th");
    mok.innerText = "목";
    columnDate.appendChild(mok);
    var kum = document.createElement("th");
    kum.innerText = "금";
    columnDate.appendChild(kum);
    var toe = document.createElement("th");
    toe.innerText = "토";
    toe.className = "saturday"
    columnDate.appendChild(toe);

    thead.appendChild(columnDate);
    calenderLayout.appendChild(thead);

    var tbody = document.createElement("tbody");

    var calenderPos = 0;
    var calenderDay = 0;

    for (let index = 0; index < calenderWeekCount; index++) {
        var tr = document.createElement("tr");
        
        for (let index2 = 0; index2 < 7; index2++) {
            var td = document.createElement("td");
            td.id = "round";
            
            if (calenderMonthStartDay <=calenderPos && calenderDay < calenderMonthLastDate) {
                calenderDay++;
                var span = document.createElement("span");
                span.innerText = `${calenderDay}`;
                var today = new Date();
                if (calenderYear == today.getFullYear() && calenderMonth == today.getMonth() + 1 && calenderDay == today.getDate()) {
                    span.className = 'today';
                } else {
                    if (index2 == 0) {
                        span.className = 'sunday';
                    } else if (index2 == 6) {
                        span.className = 'saturday';
                    }
                }
                td.appendChild(span);
            }
            tr.appendChild(td);
            calenderPos++;
        }
        
        tbody.appendChild(tr);
    }
    calenderLayout.appendChild(tbody);

    calender.appendChild(calenderLayout);
}

function delCalender() {
    const beforeCalender = document.querySelector("table");
    beforeCalender.remove();
}

var date = new Date();

// var yearmonthOnCal = document.querySelector(".calender-yearmonth");
// yearmonthOnCal.innerText = `${date.getFullYear()}.${date.getMonth() + 1}`;
// var calenderID = doucment.querySelector("#calender");


calenderHTML(new Date());


//버튼 뒤 오늘 앞
var prevButton = document.querySelector(".calender-controls > .calender-prev");
prevButton.addEventListener("click", function() {
    var yearmonth = document.querySelector(".calender-yearmonth").textContent.split(".");
    delCalender();
    calenderHTML(new Date(parseInt(yearmonth[0]), parseInt(yearmonth[1]) - 2, 1));
});

var nextButton = document.querySelector(".calender-controls > .calender-next");
nextButton.addEventListener("click", function() { 
    var yearmonth = document.querySelector(".calender-yearmonth").textContent.split(".");
    delCalender();
    calenderHTML(new Date(parseInt(yearmonth[0]), parseInt(yearmonth[1]), 1));
});

var todayButton = document.querySelector(".calender-controls > .calender-today");
todayButton.addEventListener("click", function() {
    delCalender();
    calenderHTML(new Date());
});



var dayClick = document.querySelector(".calender table > tbody");
console.dir(dayClick);
dayClick.addEventListener("click", function(event) {
   var yearmonth = document.querySelector(".calender-yearmonth").textContent.split(".");
   alert(`${yearmonth[0]}.${yearmonth[1]}.${event.target.textContent}`) 
});