$(".js-range-slider").ionRangeSlider({
    skin:'additional-span',
    type: "double",
    min: 500,
    max: 15000,
    from: 5000,
    to: 10000,
    drag_interval:false,
    hide_min_max: true,
    hide_from_to: true,
    decorate_both: true,
    values_separator: ' - ',
    postfix: '₽',
    onStart: output,
    onChange: output,
    });

function output(data) {
    const output = $('.range__output');
    const value = `${data['from_pretty']}${this.postfix}${this['values_separator']}${data['to_pretty']}${this.postfix}`;
    output.text(value);
}