import Calender from '../calendar/Calender.js';

const DatePicker = $container => {

    $container.innerHTML =`<input class="datepicker-input" placeholder="Select date" readonly/>
                           <div class="calendar"></div>`;

    const datePickerInput = $container.querySelector('.datepicker-input');
    const calendar = $container.querySelector('.calendar');
    Calender(calendar);
    calendar.style.display = 'none';
    
    datePickerInput.onfocus = function(event) {
        calendar.style.display = 'block';
        event.target.classList.add('focused');
        
        $container.querySelector('.calendar').addEventListener('date-change', (e) => {
            const date = e.detail;
            $container.querySelector('.datepicker-input').value = date;
        });
    }


    $container.addEventListener('click', (event) => {
        let target = event.target;
        // console.log(target)
        if (target != datePickerInput && target != calendar) {
            calendar.style.display = 'none';
            datePickerInput.classList.remove('focused');
        }
        // 캘린더와 DatePicker 이외의 영역을 클릭하면 캘린더가 사라진다.
    })


}

export default DatePicker;