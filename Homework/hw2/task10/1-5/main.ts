let sessionsList: string[] = JSON.parse(localStorage.getItem('sessionsList') ?? '[]');

sessionsList.push(new Date().toISOString());

localStorage.setItem('sessionsList', JSON.stringify(sessionsList));
