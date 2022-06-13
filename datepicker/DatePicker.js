import Calender from '../calendar/Calender.js';

const DatePicker = $container => {

    $container.innerHTML =`<input class="datepicker-input" placeholder="Select date" readonly/>
                           <div class="calendar"></div>`;

    const datePickerInput = $container.querySelector('.datepicker-input');
    const calendar = $container.querySelector('.calendar');
    calendar.style.display = 'none';
    
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


    $container.addEventListener('click', (event) => {
        if (event.target.classList.contains('date-picker') && !event.target.classList.contains('datepicker-input')) {
            calendar.style.display = 'none';
            datePickerInput.classList.remove('focused');
        }
    })

}

export default DatePicker;