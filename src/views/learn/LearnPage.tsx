import React from 'react';
import styled from 'styled-components';
import A from '../../components/A';
import PageTitle from '../../components/layout/PageTitle';

const Page = styled.div`
 & h3 {
   margin-top: 1rem;
 }
`;

interface Props {};

const lra = [
  {
    title: 'learn-anything.xyz',
    url: 'https://learn-anything.xyz/',
    source: 'https://github.com/learn-anything',
    description: 'No scope. Contributing is done through GitHub.',
    pros: [
      'Really cool tree-based organization.'
    ],
    cons: [
      'Scope is too broad and not enough contributions to make it worth learning. There\'s no guide on this site that is better than any other guide for that topic.',
      'Hard to find out what\'s actually available since the only way to access topics is by searching. Some way to sort by the number of contributions would go a long way.',
      'The tree-based organization for each tutorial is cool, but the fact that each topic is also arranged in a hierarchical tree makes the organization stiff and arbitrary. E.g. why is "decision making" under psychology and not game theory (especially when the resources provided for it are geared towards that version of decision making).',
    ],
  },
  {
    title: 'hackr.io',
    url: 'https://hackr.io/',
    description: 'Scope is limited to tech topics. ',
    pros: [
      'Scope works out since most topics have a fair bit of resources in them.',
      'Ability to upvote/downvote each resource allows you to easily sort by most useful. It also has great discovery tools with the ability to filter by free/paid, beginner/advanced, medium, etc.'
    ],
    cons: [

    ]
  },
  {
    title: 'hyperlink.academy',
    url: 'https://hyperlink.academy/'
  },
  {
    title: 'hacksource.xyz',
    url: 'https://hacksource.xyz/',
  },
  {
    title: 'learnxinyminutes.com',
    url: 'https://learnxinyminutes.com/',
    description: 'Scope is tech topics, mainly languages, but some tools and even math topics. Still community-driven, but specifically focused on giving as quick of an introduction as possible. Each topic\'s page is like a 5-15 minute read.'
  },
  {
    title: 'roadmap.sh',
    url: 'https://roadmap.sh/',
    description: 'Very limited scope (tech) and highly curated content. It\'s one of the most starred projects on GitHub. It has about a dozen guides and they each have really beautiful tree-like diagrams. Reminds me of the "Map of Science" series by Dominic Walliman.'
  },
  {
    title: 'alcamy.org',
    url: 'https://alcamy.org/',
  },
  {
    title: 'learnawesome.org',
    url: 'https://learnawesome.org/',
    description: 'No scope. Should be any sort of resource, but seems biased towards MOOCs. But it also has support for everything from articles and books to twitter feeds notes. For contributions, see their slack #meta channel.'
  }
];

const LearnPage: React.FC<Props> = () => {
  return (
    <Page>
      <PageTitle>Learn</PageTitle>
      <p>Every tech bro ever has the grand idea to create a site like this. Including me.</p>

      <h3>Learning Resource Aggregators</h3>
      <ul>
        {lra.map(({ title, url, description, pros, cons }) => (
          <li key={title}>
            <A href={url}>{title}</A>{description ? ` - ${description}` : ''}
            {pros && pros.length ? <>
              <div>Pros</div>
              <ul>
                {pros.map((pro, i) => <li key={i}>{pro}</li>)}
              </ul>
            </> : null}
            {cons && cons.length ? <>
              <div>Cons</div>
              <ul>
                {cons.map((con, i) => <li key={i}>{con}</li>)}
              </ul>
            </> : null}
          </li>
        ))}
      </ul>

      <h3>Aggregators of Specific Types of Learning Resources</h3>
      <ul>
        <li>
          <A href="https://github.com/bayandin/awesome-awesomeness">awesome-awesomeness</A> - An awesome list of other awesome lists
        </li>
        <li>
          There&apos;s two projects collecting all sorts of tech cheet sheats: <A href="https://codehouse.vercel.app/">codehouse</A> and <A href="http://www.cheat-sheets.org/">cheat-sheets.org</A>
        </li>
      </ul>

      <h3>Learning Resource Discovery</h3>
      <ul>
        <li>
          <A href="https://bestofjs.org/projects?tags=learning&sort=weekly">bestofjs.org</A>
        </li>
        <li>
          <A href="https://www.producthunt.com/topics/education">producthunt.com</A>
        </li>
      </ul>
    </Page>
  );
};

export default LearnPage;
