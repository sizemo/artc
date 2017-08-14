import React, {Component} from 'react';
import './About.css';





class About extends Component {

  render() {
    return (
      <div className="About">
        <div className="container">
          <h1><i>We are the Advanced Running Track Club.</i></h1>
          <p>Welcome to the ARTC website. We are delighted to explain to you what on earth we are.</p>
          <p>We’re a running club. We’re scattered around the globe, though. This makes us a little different from most running clubs, because they’re traditionally location-based. We’ve never been location-based, though. We started out as a bunch of strangers on the internet.</p>
          <p>We huddle around a subreddit called <a href="https://www.reddit.com/r/artc" target="_blank">/r/artc</a>.  There are many running subreddits, but we found a smaller community of people who are really into running as a competitive sport, rather than just running as a means of getting fit, where we talk about training, the pros, and racing.</p>
          <p>Over time, the community became more active and the discussion and camaraderie flourished. People offered up both their PRs and their failed race reports, and as we shared our training cycles and our goals, we got to know each other as more than just usernames on a forum. A Strava group was created, After that, ideas for an official Advanced Running racing singlet started. So one of our own singlehandedly organized an international shipment of ARTC singlets. Then we decided we wanted another singlet, and some hats and some decals and some patches and suddenly we looked more like a legit running club than just an offshoot of a subreddit. Somewhere in all of that, ARTC was born.</p>

          <h1><i>Okay, so what's with the moose?</i></h1>
          <p>ARTC’s mascot is a moose. We throw up the moose antlers as we cross the finish line (when we remember). We #RUNTHEMOOSE on Instagram, and we refer to each other as fellow ‘meese’. But moose aren’t particularly fast. They’re not historically related to running in any way. So, why a moose?</p>
          <p>Honestly, we wish the story were more mysterious and cloaked in running lore. The upvote button on our subreddit is a rabbit. One of the members commented that it looked kind of like a moose, so a little CSS work later and the downvote button was suddenly a moose. When we were coming up with ideas for our first ARTC singlet, someone designed a moose logo and it was the favorite. That’s how we adopted the moose as our mascot.</p>

          <h1><i>How do I join?</i></h1>
          <p>Make a reddit username and come hang out with us at <a href="https://www.reddit.com/r/artc" target="_blank">/r/artc</a>. We’ve got a great collection of weekly posts where you can introduce yourself and tell everyone what you’re training for. Join the <a href="https://www.strava.com/clubs/artc" target="_blank">Strava</a> group if you’d like! Get yourself some moose gear and post some pictures of your training or races on Instagram and tag us at @artrackclub or use #RUNTHEMOOSE and we’ll share your picture on our club account.</p>
          <p>Just remember: it’s not about pace. It’s not about distance. It’s about the mindset.</p>
        </div>
      </div>
    );
  }
}

export default About;