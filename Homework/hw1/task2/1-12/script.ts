

type Course = { title: string, monthDuration: number };

let coursesAndDurationArray: Course[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

const course1: Course = coursesAndDurationArray[0];

if (course1.monthDuration > 5) {
    console.log('super');
}

const asd: Course = coursesAndDurationArray[1];
if (asd.monthDuration > 5) {
    console.log('super');
}

if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('super');
}

console.log(asd);
