const calender = document.querySelector(".container .calender")
var date = new Date();
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

var caption = document.createElement("caption");
caption.style.fontSize = "larger";
caption.style.fontWeight = "bolder";
caption.style.color = "red";
caption.style.textAlign = "left";
caption.style.padding = "10px 20px";
caption.innerText = `${calenderYear}년 ${calenderMonth}월`;
calenderLayout.appendChild(caption);

var thread = document.createElement("thread");
var columnDate = document.createElement("tr");

var il = document.createElement("th");
il.style.padding = "10px 10px";
il.style.textAlign = "center";
il.innerText = "일";
columnDate.appendChild(il);
var wal = document.createElement("th");
wal.style.padding = "10px 10px";
wal.style.textAlign = "center";
wal.innerText = "월";
columnDate.appendChild(wal);
var hwa = document.createElement("th");
hwa.style.padding = "10px 10px";
hwa.style.textAlign = "center";
hwa.innerText = "화";
columnDate.appendChild(hwa);
var su = document.createElement("th");
su.innerText = "수";
su.style.padding = "10px 10px";
su.style.textAlign = "center";
columnDate.appendChild(su);
var mok = document.createElement("th");
mok.style.padding = "10px 10px";
mok.style.textAlign = "center";
mok.innerText = "목";
columnDate.appendChild(mok);
var kum = document.createElement("th");
kum.style.padding = "10px 10px";
kum.style.textAlign = "center";
kum.innerText = "금";
columnDate.appendChild(kum);
var toe = document.createElement("th");
toe.innerText = "토";
toe.style.padding = "10px 10px";
toe.style.textAlign = "center";
columnDate.appendChild(toe);

thread.appendChild(columnDate);
calenderLayout.appendChild(thread);

var tbody = document.createElement("tbody");

var calenderPos = 0;
var calenderDay = 0;

for (let index = 0; index < calenderWeekCount; index++) {
    var tr = document.createElement("tr");
    for (let index2 = 0; index2 < 7; index2++) {
        var td = document.createElement("td");
        td.style.padding = "10px 10px";
        td.style.textAlign = "center";
        if (calenderMonthStartDay <=calenderPos && calenderDay < calenderMonthLastDate) {
            calenderDay++;
            var span = document.createElement("span");
            span.style.display = "block";
            span.style.padding = "10px 10px";
            span.innerText = `${calenderDay}`;
            td.appendChild(span);
        }
        tr.appendChild(td);
        calenderPos++;
    }
    tbody.appendChild(tr);
}
calenderLayout.appendChild(tbody)

calender.appendChild(calenderLayout);
