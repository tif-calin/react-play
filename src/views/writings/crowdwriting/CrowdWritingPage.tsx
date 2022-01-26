import React from 'react';
import styled from 'styled-components';
import PageTitle from '../../../components/layout/PageTitle';
import FloatingNav from './FloatingNav';

const path = '/crowd-writing';

const Page = styled.div`
  --black: #212529;
  --white: #f8f9fa;
  --blue: #0087bd;
  --green: #009f6b;
  --yellow: #ffd300;
  --red: #c40233;

  --shadow-color: 0deg 0% 80%;
  --shadow-medium:
    0.3px 0.5px 0.5px hsl(var(--shadow-color) / 0.26),
    0.7px 1px 1.1px -1.2px hsl(var(--shadow-color) / 0.22),
    1.9px 2.7px 3.1px -2.5px hsl(var(--shadow-color) / 0.18),
    4.9px 7.2px 8.2px -3.7px hsl(var(--shadow-color) / 0.13)
  ;
  --shadow-high:
    0.3px 0.5px 0.5px hsl(var(--shadow-color) / 0.24),
    0.7px 1.1px 1.2px -0.5px hsl(var(--shadow-color) / 0.22),
    1.3px 1.9px 2.2px -1.1px hsl(var(--shadow-color) / 0.2),
    2.3px 3.4px 3.8px -1.6px hsl(var(--shadow-color) / 0.18),
    4px 5.9px 6.7px -2.1px hsl(var(--shadow-color) / 0.16),
    6.7px 9.9px 11.2px -2.7px hsl(var(--shadow-color) / 0.14),
    10.7px 15.7px 17.8px -3.2px hsl(var(--shadow-color) / 0.12),
    16.3px 23.9px 27.1px -3.7px hsl(var(--shadow-color) / 0.1)
  ;

  background: var(--white);
  padding: 2rem;
  border-radius: 0.25rem;
  box-shadow: var(--shadow-medium);

  color: var(--black);
  font-weight: 450;
  font-family: 'Inconsolata', monospace;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  & a {
    color: var(--blue);
    font-weight: 600;
    transition: color 0.1s ease-in-out;

    &:hover {
      color: inherit;
    }
  }
`;

interface Props { };

const anchors = [
  'top',
  'comments',
  'beyond',
  'structure',
  'what'
];

const CrowdWritingPage: React.FC<Props> = () => {
  const [showNav, setShowNav] = React.useState(false);

  React.useEffect(() => {
    const body = document.body;

    const handleScroll = () => setShowNav(body.scrollTop > 100);

    window.addEventListener('scroll', handleScroll, true);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Page id="top">
      <FloatingNav path={path} anchors={anchors} atTop={showNav}/>
      <PageTitle>Crowd-writing</PageTitle>
      <p>I just wanna get some random thoughts down about what I&apos;d like my ideal blog to be like.</p>
      <p>I&apos;m very inspired by applications of explorable explanations like the amazing machine learning journal <a href="https://distill.pub/">distill.pub</a> or one of the first people to get me interesting in web development <a href="https://ncase.me/">Nicky Case</a>.</p>
      <p>However, I also kinda... hate blogs. I hate them for the same reason I take issue with most forms of writing. It&apos;s usually centered around a single person&apos;s take. Published material is a little better because there&apos;s editors and often other experts who look through it to make sure everything is sourced and well-argued for. However, with that comes the centralization of knowledge which is the one things blog stand against which I appreciate.</p>
      <p>The thing is, I really do wanna blog. I&apos;m sure we&apos;ve all had the experience of reading something that really captures you and really wanting to contribute to the spread of those ideas. And most of the time, there&apos;s usually someone out there who&apos;s echoed the message much more eloquently than you could have and you&apos;re better off magnifying that effort than starting a new one. However, there&apos;s also many cases where you&apos;ve read multiple things and synthesized them in a way that&apos;s certainly unique and worth talking about. Unique, not because of your big wrinkly brain, but because you happened to be at the intersection of two strains of thought that rarely interact. Like when you realize that Portuguese man o&apos; wars and lichens actually have a lot to teach us about politics. Or that Sylvia Federici&apos;s analysis of medieval European witch hunts has a lot of implications for Mariana Mazzucato&apos;s economic analysis in <i>The Entrepreneurial State</i>.</p>

      <h3 id="comments">Comments<a href={`${path}#comments`}>#</a></h3>
      <p>The other thing is: I also know I&apos;m never gonna be the most knowledgeable person out there on such a wide variety of topics. So I always knew if I had a blog I really wanted to center the community reading it. For a long time I thought the solution was highly emphasizing comments. I had some ideas and inspiration that I still value for ways to achieve this. I wanted the comments to be rich. I like the way Reddit lets you sort through comments easily, but I wanted to expand on that. Reddit has a simple up/down vote system. But platforms like Steam allow you to rate game reviews by "funny", "useful", or other more semantically meaningful categories. I even thought it&apos;d be cool to let users create custom voting categories when none of the default options let them. This is also similar to how many platforms today are expanding to allow you to react to messages with any emoji.</p>
      <p>I also want really rich sorting capabilities. You should be able to sort by "most funny" or "most useful" for all time. But I also want these blog posts to be timeless and always able to grow in different directions even years later. So I want to be able to limit it to comments (or votes) in the past week, month, etc and sort by new or old. Or even sort by "hot" which would give more recent votes more weight than older ones (e.g. a vote that happened yesterday might be weighed 5x as much as a vote that happened 2 years ago). Tying the saliency of comments to time and recency is one strategy to make sure each blog post remains a living document that continues to grow and develop new and deeper discussions.</p>
      <p>Another inspiring commenting system I&apos;ve come across really makes sense for larger works. One issue I have with crowd-sourced sites like Reddit is that somebody can post a 20 page pdf, but because of the length of the work, most of the discussions end up anchoring on some specific parts of it (usually the ending or some really controversial part). The other issue with this is that you&apos;re all alone while reading it until you reach the end and read a comment that points out some issue, some extra background info, or even an alternative take that could&apos;ve made your reading experience much richer.</p>
      <p>I came across a really awesome technical blog by <a href="https://www.simeongriggs.dev/the-guide-to-useeffect-i-wish-i-had">Simeon Griggs</a> recently that had some really cool functionality. Every single paragraph on there had a comment button to it&apos;s right. This allows readers to focus their discussions around particular points of the article and create rich discussions off of small parts of the post that might otherwise get overshadowed by larger points. As a chronic nitpicker, this really appeals to me. The music lyric annotation website Genius has a feature where you can highlight certain text and write an annotation about it (which people can comment on, so it&apos;s almost like a comment system). Annotation functionality seems to be increasingly common in e-book reading software and even some online blogs and publications like MIT&apos;s Journal of Design and Science (<a href="https://jods.mitpress.mit.edu/pub/lewis-arista-pechawis-kite/release/1">for example</a>). There&apos;s also things like SoundCloud which let people comment at specific points of a given audiotrack. I&apos;d love to make a synthesis of these systems that allow people to comment at specific points in the article and uses some fancy math to decide which of the nearest and highest voted comments at any point of the article should be primarily displayed.</p>

      <h3 id="beyond">Beyond comments<a href={`${path}#beyond`}>#</a></h3>
      <p>All of these functionalities are really great for showcasing and platforming user contributions as much as possible instead of purely prioritizing the source material like a traditional publication would. But in the end, comments don&apos;t really fundamentally subvert the writer-reader relationship inherent in most forms of writing.</p>
      <p>For a while I started doubting myself and thinking if all I&apos;m really trying to do is recreate Wikipedia or Notion. Or perhaps an improved forum model or even just richer chat messaging systems. And while it&apos;s true that all of those are very important tools for knowledge dispersal and communication, I think most people, including myself, wouldn&apos;t argue that we don&apos;t need Medium or Substack (or WriteFreely) because we already have those tools. And I think there&apos; a missing ingredient to those platforms that makes them irreplaceable: structure.</p>
      <p>The inventor of the Elm programming language, Evan Czaplicki, gave a talk in 2018 called <a href="https://www.youtube.com/watch?v=o_4EX4dPppA">"The Hard Parts of Open-Source"</a> that garnered a lot of attention. It kinda has big-brain energy because he runs through the history of cybernetics, <i>Machines of Loving Grace</i>, and advertising psychology all to make some points about what&apos;s missing in online communication. (But tbh it&apos;s also exactly the kind of stuff I&apos;d like to be writing). But he makes a really important point about how the lack of structure of certain platforms is often conflated with freedom. But we didn&apos;t evolve in a structureless world. And their lack of structure often obfuscates that the resulting choice architectures are far from neutral. It&apos;s like when you tell someone who grew up poor that they should&apos;ve went to community college instead of going for that manager position at Subway and that we have a fair and neutral political system where people can choose their destiny. But that person&apos;s life has structure to it that interacts with the system. Perhaps quitting Subway would&apos;ve meant they could no longer financially support their single mother who&apos;s currently in the hospitol and 3 younger siblings. <b>Lack of structure doesn&apos;t mean freedom</b>.</p>

      <h3 id="structure">Towards structure<a href={`${path}#structure`}>#</a></h3>
      <p>Something I&apos;ve been trying to be more critical about recently is to analyze the underlying structures of the things I want to write about. Something I realized is that most of my inspiration to write comes when I gathered a lot of cool anecdotes or data points from disparate fields that don&apos;t often interact.</p>
      <p>I said earlier that I&apos;m probably not the most knowledgeable person about the subjects I want to write about. Well I&apos;m also probably not the best writer either lol. I come across really cool pieces of evidence that seem to fit together to form a larger narrative, but it feels a bit conceded to think that I&apos;d be the best one at putting it all together. Consider this collection of facts/points:</p>
      <ul>
        <li>When oxygen first appeared on Earth in large quantities 2.4-2 billion years ago (thanks to cyanobacteria), it killed 99% of life on Earth. Today almost every complex creature depends on oxygen.</li>
        <li>Saponins are plant-derived organic chemicals that are often very toxic to animals. Saponins are present in legumes, garlic and onion, spinach, and meany others. Humans can safely consume these plants because we&apos;ve evolved to avoid digesting some of the most common saponins found in foods.</li>
        <li>Similarly, oxalic acid can kill your dog but will probably not harm you. Unless you&apos;ve taken antibiotics that have killed off the gut bacteria that allows you to handle it. Oxalic acid is found in many common foods and very healthy foods like leafy greens.</li>
        <li>The creosote bush is very toxic. There are 2 populations of a single species of desert woodmice in the Mojave desert. One of these populations would die if they ate the bush. For the other, the creosote bush is a staple crop. They have an oral bacteria that has allowed them to neutralize the resins and oxalic acid that makes it poisonous.</li>
      </ul>
      <p>To me, what I gather from this list of points is that poisons are a lack of adaptation. If there was a button to add my own point to this list I might add one about that massive study looking at the genes of bacteria across the globe and finding that a quarter of them contained at least one gene for producing enzymes that could break down at least 1 of 10 types of plastic tested for. The number and type of enzymes discovered clearly matched the amount and types of plastic pollution in their area. A clear example of how an environmental poison like plastic, is being adapted to because of abundency. (I might also talk about the research showing antibiotic resistences to be lost over time if we stop using them).</p>
      <p>But someone else reading those points might have a different takeaway. Somebody might&apos;ve recognized that saponins are actually the key active chemicals in herbs like Ginseng and Jiaogulan. They may also recognize that high oxalic acid foods have often been used medicinally as a laxative. Or maybe point out recent research finding that we have much more oxalic acid in our blood than previously thought which points that it could have a more active role in our body like being used to trigger a burst of phagocytes that can engulf and break down foreign particles. So their grand takeaway might be that the same things that make something a poison can often be what makes it a medicine. And if they had a button to add their own anecdotes or evidence, they might talk about zoopharmacognosy. They might point out that chimps have been seen to eat a toxic plant called <i>Aspilla</i> in order to treat infections of intestinal parasitic nematodes. Or that cats will eat grass, which they cannot digest, in order to make themselves puke if they ate something bad. Or that cat&apos;s attraction to catnip is actually likely due to the effect of catnip repelling mosquitoes. (sorry I have a lot of these).</p>
      <p>To give a third example (sorry I swear there&apos;s a point to why this is being dragged out so long), someone might read those points and use them to reinforce their views that everything natural is safe and everything synthetic is dangerous. Maybe they&apos;d add a valid point about the harms of pesticides on humans or other creatures. While this may not seem, like the best take, that&apos;s exactly where the crowd-source aspects of this will hopefully shine the most.</p>
      <p>Okay sorry for the long takes, but I actually did have a reason for it. There&apos;s another little idea I had here. Often when I&apos;m considering writing something, I have a lot of evidence to pool from that I think is really awesome and cool and wanna talk about, but I often have to triage for what I think will be the most effective or popular with the readers. Well there&apos;s a very clear structure to points like this. Just like a highschool essay, you have some underlying pieces of evidence and a summary of it all that synthesizes them to make an overall point. What if I could just add all of the pieces of evidence I wanted to my heart&apos;s content and people could only read as much as they wanted. Perhaps it&apos;d be three bullet points of the highest rated pieces of evidence and a button to "show more" if you&apos;re particularly captivated by them and won&apos;t flee the article because of the length? People very often just want to skim an article. What if we put the power into the hands of the user of how much they need to read to be convinced of a take?</p>
      <p>The proposal I had is to organize these blocks into two parts: the evidences, and their synthesis. Both can be crowdsourced and rated and discussed. And if a reader wants to look at what&apos;s happening under the hood they could dig into those discussions and ratings, but, if not, then they could just enjoy the article in the way that the crowd deemed the highest quality. The ratings on the pieces of evidence would be based on how well they support the given synthesis and the ratings on the syntheses can use the system mentioned before where people can rate (both negatively and positively) based on "thoughtful", "funny", or any other custom dimension.</p>

      <h3 id="what">What is this? A manifesto?<a href={`${path}#what`}>#</a></h3>
      <p>To be honest, although these ideas have been floating around in my journals for a long time, I wrote this whole post in around 30 minutes from a random bout of inspiration. I mostly just intended to get these ideas all in one place. But after seeing them here it&apos;s inspired me to clean this up a bit (maybe add some pics?) and share it around to see if I could gather any other people interested in building such a project. I think my next steps will be to rebuild my blog and build it with functionality like this in mind and see if I can expand it from there. But if anyone reading this is interested in working on something like this together or perhaps even just contributing another idea or take, I&apos;d love to hear any feedback! You can email me <a href="mailto:culitif@tuta.io">here</a> :)</p>
      <p>-culi</p>
    </Page>
  );
};

export default CrowdWritingPage;
