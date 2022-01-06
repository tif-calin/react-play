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
      <p><strong>2021_12dec25sat</strong>: Did two more Exercism problems. Ruby has a ton of useful built-in string methods. Also rubocop :O</p>
      <p><strong>2021_12dec30thu</strong>: Did an Exercism problem that taught conditionals and the TwoFer exercise. Getting quite used to the syntax at this point. Everybody says the koans are the best way to learn Ruby but I haven't really gotten a chance to try them out with the holidays and all that. And I've actualyl really been enjoying Exercism so far.</p>
      <p><strong>2022_01jan02sun</strong>: More Exercism 2 today and 2 yesterday because I'm at a cabin and won't have much time till I get back on Tue/Wed. I want to start the koans soon, but I just got to the point in Exercism where I got passed all the tutorial-y ones and I can work on more complex challenges and can ask for mentoring to get real feedback on my code. I learned some more cool built-in enumeration techniques and also about OpenStruct shortcuts. I also learned about the difference between modules and classes in Ruby. Modules just seem like a way to get the benefits of namespaces without having to use classes</p>
      <p><strong>2022_01jan03mon</strong>: I started on a problem that was meant to teach error-handling in Ruby yesterday but didn't finish until this morning. Ruby's `unless` keyword comes in handy with error raising logic.</p>

      <h3>Project Plan</h3>
      <ol>
        <li>Write RCV algorithm in Ruby</li>
        <li>Write the backend for a Kipo API in Ruby</li>
      </ol>
    </div>
  );
};

export default LearnRuby;
