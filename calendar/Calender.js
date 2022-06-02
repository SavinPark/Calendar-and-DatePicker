const Calender = $container => {

    const calender = `<div class="calendar-nav">
                        <button class="btn btn-prev"><i class="bx bxs-left-arrow btn-prev" ></i></button>
                        <div class="nav-txt">
                            <p class="month"></p>
                            <p class="year"></p>
                        </div>
                    <button class="btn btn-next"><i class="bx bxs-right-arrow btn-next"></i></button>
                    </div>
                    <div class="calendar-grid"></div>`;
    $container.innerHTML = calender;

    let $today = new Date();
    let $year;
    let $month;
    let $date;
    let $n = 0;
    
    function setCalender(now, N) {
        $today = new Date(now.setMonth(now.getMonth() + N));
        $year = $today.getFullYear();
        $month = $today.toLocaleString("en-US", { month: "long" });
        $date = $today.getDate();
    }
    function setNav(month, year) {
        document.querySelectorAll('.nav-txt').forEach(ele => ele.innerHTML = `<p class="month">`+ $month +`</p><p class="year">`+ $year +`</p>`);
    }
    function setGrid(today) {
        document.querySelectorAll('.calendar-grid').forEach($gridbox => {
            let gridInner = `<div class="day-col day-sun">SUN</div>
                             <div class="day-col day-mon">MON</div>
                             <div class="day-col day-tue">TUE</div>
                             <div class="day-col day-wed">WED</div>
                             <div class="day-col day-thu">THU</div>
                             <div class="day-col day-fri">FRI</div>
                             <div class="day-col day-sat">SAT</div>`
            for (let i=0; i<6; i++ ) {
                gridInner += `<div class="date-col date-sun"></div>
                              <div class="date-col date-mon"></div>
                              <div class="date-col date-tue"></div>
                              <div class="date-col date-wed"></div>
                              <div class="date-col date-thu"></div>
                              <div class="date-col date-thu"></div>
                              <div class="date-col date-thu"></div>`
            }
            $gridbox.innerHTML = gridInner;
        });
    }

    $container.addEventListener("click", (event) => {
        if (event.target.classList.contains('btn-prev')) {
            // console.log('prev')
            $n = -1
        }
        if (event.target.classList.contains('btn-next')) {
            // console.log('next')
            $n = 1
        }
        setCalender($today, $n);
        setNav($month, $year);
        // console.log(`$n : ${$n} \n$today : ${$today}`);
        console.log(`$n : ${$n} \n${$year}-${$today.getMonth()+1}-${$date}`);
    });

    window.addEventListener('DOMContentLoaded', () => {
        setCalender($today, $n);
        setNav($month, $year);
        setGrid();
    })

} 

export default Calender;