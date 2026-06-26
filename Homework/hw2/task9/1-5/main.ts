
interface Course77 {
    title: string;
    monthDuration: number;
    hourDuration: number;
    modules: string[];
}

let coursesArray0:Course77[] = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

for ( const course of coursesArray ) {
    let div:HTMLDivElement = document.createElement('div');

    let title:HTMLDivElement = document.createElement('div');
    title.innerText = `title: ${course.title}`;

    let month:HTMLDivElement = document.createElement('div');
    month.innerText = `monthDuration: ${course.monthDuration}`;

    let hour:HTMLDivElement = document.createElement('div');
    hour.innerText = `hourDuration: ${course.hourDuration}`;

    let ul:HTMLUListElement = document.createElement('ul');
    for ( const module of course.modules ) {
        let li:HTMLLIElement = document.createElement('li');
        li.innerText = module;
        ul.appendChild(li);
    }
    div.append(title, month, hour, ul);

    document.body.appendChild(div);
}
