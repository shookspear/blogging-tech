const { Post } = require('../models');

const postdata = [
    {
        title: 'The future of sales and the pervasiveness of technology',
        details: 'The strongest theme of the conference was the business imperative for advancing digital literacy, data literacy and ensuring that technology was firmly embedded in all sales learning programs. Digital literacy is best defined as an individual’s ability to find, evaluate, and clearly communicate information and knowledge through using diverse digital platforms. It is best evaluated by an individual’s interaction skills with technology, and includes: grammar, composition, typing skills, and the ability to produce text, images, audio, and designs using technology.',
        user_id: 1
    },
    {
        title: '5 ways big data and AI affect manufacturing processes',
        details: 'Supply chains of businesses are extremely complex. Multiple vendors, suppliers, customers, warehouses, and distribution centers are part of the supply chain. Managing such a complex network of moving parts is a cumbersome task. One mistake in the supply chain can have a cascading effect. ',
        user_id: 2
    },
    {
        title: 'The return of in-person conferences: developing an agile event strategy',
        details: 'While conference hosts want to bring in-person delivery models back into their event marketing mix, and many technology providers are keen to shift back to sponsored in-person events, the expanded reach of virtual delivery models means that a balanced approach to event strategies is necessary. Technology event marketers are now well aware of the critical importance of remaining agile. Through 2022, it will be critical for marketers and conference organizers to continuously monitor the environment and customer propensity and ability to travel, while also managing both stakeholder and attendee expectations.',
        user_id: 4
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;