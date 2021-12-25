import React from 'react';
import PageTitle from '../../components/layout/PageTitle';

const LearnRuby = () => {
  return (
    <div>
      <PageTitle>Learn Ruby</PageTitle>
      <p>In which I make a gameplan for learning Ruby</p>

      <h3>Crowd-sourced Learning Resource Aggregators</h3>
      <p>I&apos;m a big fan of crowd-sourced learning tools, but there&apos;s too many to choose from! Here&apos;s a short list while I figure out what I wanna use primarily.</p>
      <ul>
        <li>
          <a 
            href="https://learn-anything.xyz/programming/programming-languages/ruby"
            target="_blank"
            rel="noopener noreferrer"
          >learn-anything.xyz</a>
        </li>
        <li>
          <a
            href="https://hackr.io/tutorials/learn-ruby"
            target="_blank"
            rel="noopener noreferrer"
          >hackr.io</a>
        </li>
        <li>
          <a
            href="https://hacksource.xyz/subjects/ruby/tutorials"
            target="_blank"
            rel="noopener noreferrer"
          >hacksource.xyz</a>
        </li>
      </ul>

      <p>Special shoutout to <a href="https://alcamy.org/" target="_blank" rel="noopener noreferrer">alcamy.org</a> which is a bit more general than specific programming languages.</p>

      <h3>How to Ruby</h3>
      <ul>
        <li>(exercises) Exercism&apos;s <a href="https://exercism.org/tracks/ruby">Ruby track</a> seems like a great thing to work on and get mentor feedback on</li>
        <li>(intro) The Ruby docs have a great "<a href="https://www.ruby-lang.org/en/documentation/quickstart/">Ruby in 20 Minutes</a>" page</li>
        <li>(guide) The most popular guides seem to be <a href="http://rubykoans.com/">rubykoans</a> and <a href="http://rubymonk.com/">rubymonk</a>. I think I&apos;ll go with koans since it&apos;s enforced by the official page. A lot of people said it was by far the fastest method to pick up Ruby.</li>
      </ul>

      <h3>Learning Log</h3>
      <p><strong>2021_12dec22wed</strong>: Today I installed Ruby, did the hello world Exercism problem, and made a study plan.</p>
      <p><strong>2021_12dec23thu</strong>: Did a Exercism problem, learned how to define class methods and properties</p>
      <p><strong>2021_12dec24fri</strong>: Did another Exercism problem. Learned about instantiating. Using ? after getter methods is the cutest thing I&apos;ve ever seen in a language</p>
    </div>
  );
};

export default LearnRuby;
