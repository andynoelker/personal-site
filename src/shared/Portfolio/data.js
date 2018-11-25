import React from 'react';

const data = {
  description: <div>I build web-based technologies professionally and on the side. Here is a sampling of some of my work. You can view more of my work on my <a href="https://github.com/andynoelker" target="_blank">GitHub profile</a>. I am also an active member of the programming Q&A site Stack Overflow and you can check out my contributions on my <a href="https://stackoverflow.com/users/5455309/andy-noelker" target="_blank">Stack Overflow profile</a>.</div>,
  projects: [
    {
      img: '/static/img/bh.jpg',
      img_alt: '/static/img/bh.jpg',
      title: 'BH Parts & Service',
      tech: [ 'React', 'Redux', 'Javascript', 'Laravel', 'PHP' ],
      website: 'https://support.bhnorthamerica.com',
      description: 'BH Parts & Service is the technical support website for BH Fitness equipment manufacturer. It features a full E-Commerce system for replacement parts, warranty registration, and warranty labor claim reimbursements. Frontend was built with React and Redux while the backend is a RESTful API built with Laravel on top of PHP.',
    },
    {
      img: '/static/img/frp-equipment.jpg',
      img_alt: '/static/img/frp-checkout.jpg',
      title: 'FitnessRepairParts.com',
      tech: [ 'React', 'Redux', 'Javascript', 'Laravel', 'PHP', 'HTML', 'CSS' ],
      website: 'https://www.fitnessrepairparts.com',
      description: 'FitnessRepairParts.com is an E-Commerce site dedicated to supplying repair parts for exercise machines and accessories. I have been the lead web developer on the website for 4 years, during which I have converted lots of legacy code into single-page applications with a React/Redux frontend that consumes a RESTful API I have built using Laravel and PHP.',
    },
    {
      img: '/static/img/aplos.png',
      img_alt: '/static/img/aplos.png',
      title: 'Aplos Theme',
      tech: [ 'Wordpress', 'PHP', 'HTML', 'CSS' ],
      website: 'https://wordpress.org/themes/aplos',
      description: 'Aplos is a custom theme for Wordpress used on thousands of websites. It is fully responsive and features many customization options such as layouts, color schemes, headers, and fonts.',
    },
    {
      img: '/static/img/cullen-bunn.jpg',
      img_alt: '/static/img/cullen-bunn.jpg',
      title: 'Cullen Bunn',
      tech: [ 'PHP', 'Wordpress', 'HTML', 'CSS' ],
      website: 'http://www.cullenbunn.com',
      description: 'Cullen Bunn is an award-winning comics writer and novelist best known for his work on Uncanny X-Men, X-Men: Blue, Magneto, and The Sixth Gun. I built his official website as a completely custom Wordpress theme using PHP, HTML, and CSS.',
    },
    {
      img: '/static/img/placeholder.png',
      img_alt: '/static/img/placeholder.png',
      title: 'Personal Site',
      tech: [ 'Node.js', 'Express', 'React', 'Javascript' ],
      website: 'http://andynoelker.com',
      description: 'My personal website is a universal app built on a Node.js backend using Express and a React frontend. It is fully responsive and built with according to the principles of Material Design.',
    },
  ]
};

export default data;
