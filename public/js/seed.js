
function Seed(){
    const submissions = [
        {
            id: 1,
            title: 'Yellow Pail',
            description: 'On-demand sand castle construction expertise.',
            url: '#',
            votes: 16,
            avatar: 'public/images/avatars/daniel.jpg',
            picture: 'public/images/submissions/image-yellow.png'
        },
        {
            id: 2,
            title: 'Pour la limitation des budgets des clubs de foot',
            description: 'Fixer un plafond aux dépenses des clubs de football afin de favoriser l\'équité sportive.',
            url: '#',
            votes: 128,
            avatar: 'public/images/avatars/kristy.png',
            picture: 'public/images/submissions/image-steel.png'
        },
        {
            id: 3,
            title: 'Pour l\'autorisation des punitions corporelles',
            description: 'Autoriser les parents à punir physiquement leurs enfants lorsque ceux-ci sont insensibles aux punitions et menaces verbales.',
            url: '#',
            votes: 17,
            avatar: 'public/images/avatars/veronika.jpg',
            picture: 'public/images/submissions/image-rose.png'
        },

    ];
    return {
        submissions:submissions
    };
}