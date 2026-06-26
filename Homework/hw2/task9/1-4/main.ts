
let coursesAndDurationArray11: Course33[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for ( const course of coursesAndDurationArray ) {
    const div:HTMLDivElement = document.createElement('div');
    const h1:HTMLHeadingElement = document.createElement('h1');
    h1.innerText = course.title;
    const p:HTMLParagraphElement = document.createElement('p');
    // p.innerText = String(course.monthDuration);
    p.innerText =course.monthDuration.toString();

    div.append(h1, p);

    document.body.appendChild(div);
}
