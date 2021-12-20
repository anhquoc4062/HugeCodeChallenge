var draw = SVG().addTo('#global-shape').size('100%', '100%');

for (let i = 0; i <= 26; i++) {
    const defaultAttr = {
        'stroke': '#FAFAFA', 'stroke-width': '0.5px', 'fill': 'none'
    }

    const r1 = 70 + (i * 12);
    const r2 = 70 + (i * 12);
    const initX = 0;
    const initY = 0;
    const currentX = initX + (i * 0.07);
    const currentY = initY + (i * 0.07);
    draw.circle(r1, r2).x(currentX).y(currentY).attr({
        ...defaultAttr,
        class: 'circle_static_1',
        stroke: '#9AA0A6'
    });

    draw.circle(r1, r2).x(currentX).y(currentY).attr({
        ...defaultAttr,
        class: 'circle_1',
        'stroke-width': '0.7px'
    });

}

for (let i = 0; i <= 26; i++) {
    const defaultAttr = {
        'stroke': '#FAFAFA', 'stroke-width': '0.5px', 'fill': 'none'
    }

    const r1 = 248 - (i * 7.8);
    const r2 = 253 - (i * 8);
    const initX = 130;
    const initY = 133;
    const currentX = initX + (i * 7.8);
    const currentY = initY + (i * 7);

    draw.circle(r1, r2).x(currentX).y(currentY).attr({
        ...defaultAttr,
        class: 'circle_static_2',
        stroke: '#9AA0A6'
    });

    draw.circle(r1, r2).x(currentX).y(currentY).attr({
        ...defaultAttr,
        class: 'circle_2',
        'stroke-width': '0.7px'
    })
}

var circleOne = ".circle_1", circleTwo = '.circle_2'
    circleOneTimeLine = gsap.timeline({ repeat: 100, yoyo: true }),
    circleTwoTimeLine = gsap.timeline({ repeat: 100, yoyo: true });

circleOneTimeLine.fromTo(circleOne, { opacity: "0" }, { duration: 1, opacity: 1, stagger: 0.1 });
circleTwoTimeLine.fromTo(circleTwo, { opacity: "0" }, { duration: 1, opacity: 1, stagger: 0.1, reversed: true });