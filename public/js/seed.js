
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

    ];
    return {
        submissions:submissions
    };
}