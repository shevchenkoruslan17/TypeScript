
interface Course33 {
    title: string;
    monthDuration: number;
}


let coursesAndDurationArray22:Course33[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for ( const course of coursesAndDurationArray22 ) {
    const div:HTMLDivElement = document.createElement('div');
    div.innerText = `${course.title} ${course.monthDuration}`
    document.body.appendChild(div);
}
