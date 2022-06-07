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
  
  let today
  let thisMonth;

  let currentYear;
  let currentMonth;
  let currentDate;

  window.addEventListener('DOMContentLoaded', () => {
    calendarInit();
  })

  function calendarInit() {
    today = new Date();
    thisMonth = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    renderCalender(thisMonth);
  }

  function renderCalender($thisMonth) {
    // 렌더링을 위한 데이터 정리
    currentYear = $thisMonth.getFullYear();
    currentMonth = $thisMonth.getMonth();
    currentDate = $thisMonth.getDate();
    // console.log(today.getDate());

    // 이전 달의 마지막날 날짜 & 요일
    let startDay = new Date(currentYear, currentMonth, 0);
    let prevDate = startDay.getDate();
    let prevDay = startDay.getDay();
    // 이번 달의 마지막날 날짜 & 요일
    let endDay = new Date(currentYear, currentMonth + 1, 0);
    let nextDate = endDay.getDate();
    let nextDay = endDay.getDay();
    // console.log(prevDate, prevDay, nextDate, nextDay);

    // Year, Month 표기
    $container.querySelector('.month').innerHTML = `${$thisMonth.toLocaleString("en-US", { month: "long" })}`;
    $container.querySelector('.year').innerHTML = `${currentYear}`;

    // Date 표기
    const calendar = $container.querySelectorAll('.dates');
    calendar.forEach(ele => {
      ele.innerHTML = '';
      // 지난달
      for (let i = prevDate - prevDay; i <= prevDate; i++) {
        ele.innerHTML += `<div class="date prev disable"  id=${currentYear}-${currentMonth}-${i}>${i}</div>`
      }
      // 이번달
      for (let i = 1; i <= nextDate; i++) {
        if(currentMonth == today.getMonth() && i == today.getDate()) {
            ele.innerHTML += `<div class="date current today" id=${currentYear}-${currentMonth+1}-${i}>${i}</div>`
        } else {
            ele.innerHTML += `<div class="date current" id=${currentYear}-${currentMonth+1}-${i}>${i}</div>`
        }
      }
     // 다음달
    //   for (let i = 1; i <= (7 - nextDay == 1 ? 0 : 7 - nextDay-1); i++) {
      for (let i = 1; i <= (6 - nextDay == 0 ? 0 : 6 - nextDay); i++) {
        ele.innerHTML += `<div class="date next disable"  id=${currentYear}-${currentMonth+2}-${i}>${i}</div>`
      }
    })

  }

  // 클릭 이벤트
  $container.querySelectorAll('.dates').forEach(date => {
    date.addEventListener('click', (event) => {
      console.log(event.target.getAttribute('id'));
    })
  })
  $container.querySelector('.btn-prev').addEventListener('click', (event) => {
    // console.log('prev');
    thisMonth = new Date(currentYear, currentMonth - 1, 1);
    renderCalender(thisMonth);
  })
  $container.querySelector('.btn-next').addEventListener('click', (event) => {
    // console.log('next');
    thisMonth = new Date(currentYear, currentMonth + 1, 1);
    renderCalender(thisMonth);
  })

} 

export default Calender;