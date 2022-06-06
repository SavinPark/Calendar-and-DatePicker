const Calender = $container => {

    const calender = `<div class="calendar-nav">
                        <button class="btn btn-prev"><i class="bx bxs-left-arrow btn-prev" ></i></button>
                        <div class="nav-txt">
                            <p class="month"></p>
                            <p class="year"></p>
                        </div>
                    <button class="btn btn-next"><i class="bx bxs-right-arrow btn-next"></i></button>
                    </div>
                    <div class="calendar-grid">
                        <div class="days">
                            <div class="day">SUN</div>
                            <div class="day">MON</div>
                            <div class="day">TUE</div>
                            <div class="day">WED</div>
                            <div class="day">THU</div>
                            <div class="day">FRI</div>
                            <div class="day">SAT</div>
                        </div>
                        <div class="dates"></div>
                    </div>`;
    $container.innerHTML = calender;


    let today;
    let thisMonth;

    let currentYear;
    let currentMonth;
    let currentDate;

    function renderCalender($thisMonth) {
        // 렌더링을 위한 데이터 정리
        currentYear = $thisMonth.getFullYear();
        currentMonth = $thisMonth.getMonth();
        currentDate = $thisMonth.getDate();

        // 이전 달의 마지막 날 날짜와 요일 구하기
        let startDay = new Date(currentYear, currentMonth, 0);
        let prevDate = startDay.getDate();
        let prevDay = startDay.getDay();
        // 이번 달의 마지막날 날짜와 요일 구하기
        let endDay = new Date(currentYear, currentMonth + 1, 0);
        let nextDate = endDay.getDate();
        let nextDay = endDay.getDay();
        console.log(prevDate, prevDay, nextDate, nextDay);

        // Year, Month 표기
        document.querySelectorAll('.month').forEach(ele => {
          ele.innerHTML = `${today.toLocaleString("en-US", { month: "long" })}`
        })
        document.querySelectorAll('.year').forEach(ele => {
          ele.innerHTML = `${currentYear}`
        })

        // Date 표기
        const calendar = document.querySelectorAll('.dates');
        calendar.forEach(ele => {
          ele.innerHTML = ''
          // 지난달
          for (let i = prevDate - prevDay; i <= prevDate; i++) {
            ele.innerHTML += `<div class="date prev disable">${i}</div>`
          }
          // 이번달
          for (let i = 1; i <= nextDate; i++) {
            ele.innerHTML += `<div class="date current">${i}</div>`
          }
          // // 다음달
          for (let i = 1; i <= (7 - nextDay == 1 ? 0 : 7 - nextDay-1); i++) {
            ele.innerHTML += `<div class="date next disable">${i}</div>`
          }
        })

    }


    function calendarInit() {
        today = new Date();
        thisMonth = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        renderCalender(thisMonth);
    }

    // 캘린터 초기 세팅
    window.addEventListener('DOMContentLoaded', () => {
        calendarInit();
    })


    // 클릭 이벤트 
    $container.addEventListener('click', (event) => {
        if (event.target.classList.contains('btn-prev')) {
            console.log('prev');
            // renderCalender(thisMonth);
            thisMonth = new Date(currentYear, currentMonth - 1, 1);
            renderCalender(thisMonth);
        }
        if (event.target.classList.contains('btn-next')) {
            console.log('next');
            // renderCalender(thisMonth);
            thisMonth = new Date(currentYear, currentMonth + 1, 1);
            renderCalender(thisMonth);
            
        }
    })

} 

export default Calender;