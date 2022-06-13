import Calender from '../calendar/Calender.js';

const DatePicker = $container => {

    $container.innerHTML =`<input class="datepicker-input" placeholder="Select date" readonly/>
                           <div class="calendar"></div>`;

    const datePickerInput = $container.querySelector('.datepicker-input');
    const calendar = $container.querySelector('.calendar');
    calendar.style.display = 'none';
    
    // focus시 Calendar 보임 (Input에 날짜가 지정되어 있다면 그 날짜를 기준으로 렌더링)
    datePickerInput.onfocus = function(event) {
        event.target.classList.add('focused');
        if ($container.querySelector('.datepicker-input').value) {
            Calender(calendar, document.querySelector('.datepicker-input').value);
        } else {
            Calender(calendar);
        }
        calendar.style.display = 'block';
        
        $container.querySelector('.calendar').addEventListener('date-change', (e) => {
            const date = e.detail;
            $container.querySelector('.datepicker-input').value = date;
        });
    }

    // focus 해제 (Input과 Calendar가 아닌 영역 클릭 시 focus 해제)
    $container.addEventListener('click', (event) => {
        if (event.target.classList.contains('date-picker') && !event.target.classList.contains('datepicker-input')) {
            calendar.style.display = 'none';
            datePickerInput.classList.remove('focused');
        }
    })

}

export default DatePicker;