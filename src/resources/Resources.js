import React, {Component} from 'react';
import './Resources.css';

class Resources extends Component {
  render() {
    return (
      <div className="Resources">
        <div className="container">
          <h2>Resources</h2>
          <p className="tight">The unique nature of the AR Track Club means that we have a permanent and constantly-growing archive of knowledge at our disposal. We've collected links to the ones that our members have felt are the most useful and have them listed here for an easily-accessible repository of running knowledge on a variety of topics.</p>

          <div className="links row">
            <div className="col">
              <h4>Training Plans</h4>
              <ul>
                <li><a href="https://www.reddit.com/r/AdvancedRunning/comments/4qm6kr/the_summer_series_pete_pfitzinger/" target="_blank">Pfitzinger</a></li>
                <li><a href="https://www.reddit.com/r/AdvancedRunning/comments/4rnzpv/the_summer_series_jack_daniels/" target="_blank">Daniels</a></li>
                <li><a href="https://www.reddit.com/r/AdvancedRunning/comments/4twcbg/the_summer_series_hansons/" target="_blank">Hanson</a></li>
                <li><a href="https://www.reddit.com/r/AdvancedRunning/comments/4ssmfl/the_summer_series_arthur_lydiard/" target="_blank">Lydiard</a></li>
                <li><a href="https://www.reddit.com/r/AdvancedRunning/comments/4v0clh/the_summer_series_hal_higdon_and_friends/" target="_blank">Higdon & misc</a></li>
              </ul>
            </div>

            <div className="col">
              <h4>Race Day</h4>
              <ul>
                <li><a href="https://www.reddit.com/r/artc/comments/6rbm9a/the_summer_series_how_do_i_pr_in_the_5k/" target="_blank">How to PR in the 5K</a></li>
                <li><a href="https://www.reddit.com/r/AdvancedRunning/comments/51qtul/the_summer_series_how_do_i_pr_in_the_half_marathon" target="_blank">How to PR in the Half Marathon</a></li>
                <li><a href="https://www.reddit.com/r/AdvancedRunning/comments/50miq8/the_summer_series_how_do_i_bq/" target="_blank">How to BQ?</a></li>
                <li><a href="https://www.reddit.com/r/AdvancedRunning/comments/5ox4ss/the_winter_huddle_race_nutrition/" target="_blank">Nutrition</a></li>
              </ul>
            </div>

            <div className="col">
              <h4>Time Management</h4>
              <ul>
                <li><a href="https://www.reddit.com/r/AdvancedRunning/comments/5vpytc/the_winter_huddle_morning_running/" target="_blank">Morning Running</a></li>
                <li><a href="https://www.reddit.com/r/AdvancedRunning/comments/5zqhsa/the_winter_huddle_evening_night_running/" target="_blank">Evening/Night Running</a></li>
                <li><a href="https://www.reddit.com/r/AdvancedRunning/comments/5x2rlj/the_winter_huddle_running_traveling/" target="_blank">Running & Traveling</a></li>
              </ul>
            </div>

            <div className="col">
              <h4>The Other Stuff</h4>
              <ul>
                <li><a href="https://www.reddit.com/r/AdvancedRunning/comments/5m5rp5/the_winter_huddle_diet/" target="_blank">Diet</a></li>
                <li><a href="https://www.reddit.com/r/AdvancedRunning/comments/5ueu9d/the_winter_huddle_head_games/" target="_blank">Head Games</a></li>
                <li><a href="https://www.reddit.com/r/AdvancedRunning/comments/5jqkkf/the_winter_huddle_1222/" target="_blank">Strength Training</a></li>
                <li><a href="https://www.reddit.com/r/AdvancedRunning/comments/4zi84y/the_summer_series_recovery_runs/" target="_blank">Recovery</a></li>
                <li><a href="https://www.reddit.com/r/AdvancedRunning/comments/63sges/the_spring_symposium_return_from_injury/" target="_blank">Returning from Injury</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resources;