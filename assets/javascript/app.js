// Top stories and new stories variables 
const hn_host = 'https://hacker-news.firebaseio.com/v0';
const hn_topStories = 'topstories.json';
const hn_newStories = 'newstories.json';

// Fetch New Stories 
const fetchNewStoriesIds = async () => {
  document.getElementById('output').innerHTML = ``;
  const response = await fetch(`${hn_host}/${hn_newStories}`)
  const topStoriesIds = await response.json()
    .then(storyIds => {
      storyIds.map(function (story) {
        return (
          fetch(`https://hacker-news.firebaseio.com/v0/item/${story}.json?print=pretty`)
          .then(response => response.json())
          .then(story => {
            // Display time human readable
            let unixTimestamp = story.time;
            let milliseconds = unixTimestamp * 1000;
            let dateObject = new Date(milliseconds);
            let humanDateFormat = dateObject.toLocaleString();
            // Generate each news story card
            document.getElementById('output').innerHTML += `
            <div>
              <div class="card mb-3">
                <h5 id="post-title" class="card-header data-title mb-1">${story.title}</h5>
                  <div class="card-body">
                    <p class="mb-0 off-white-text">${story.type} by: ${story.by}</p>
                    <p class="mb-0 off-white-text">Posted: ${humanDateFormat}</p>
                    <p class="mb-0 off-white-text">Link to article:<a class="post-url" href="${story.url}" target="_blank"> Click here</a></p>
                  </div>
              </div>
            </div>
            `
          })
        )
      })
    })
}

const fetchTopStoriesIds = async () => {
  document.getElementById('output').innerHTML = ``;
  const response = await fetch(`${hn_host}/${hn_topStories}`)
  const topStoriesIds = await response.json()
    .then(storyIds => {
      storyIds.map(function (story) {
        return (
          fetch(`https://hacker-news.firebaseio.com/v0/item/${story}.json?print=pretty`)
          .then(response => response.json())
          .then(story => {
            // Display time human readable
            let unixTimestamp = story.time;
            let milliseconds = unixTimestamp * 1000;
            let dateObject = new Date(milliseconds);
            let humanDateFormat = dateObject.toLocaleString();
            // Generate each news story card
            document.getElementById('output').innerHTML += `
            <div>
              <div class="card mb-3">
                <h5 id="post-title" class="card-header data-title mb-1">${story.title}</h5>
                  <div class="card-body">
                    <p class="mb-0 off-white-text">${story.type} by: ${story.by}</p>
                    <p class="mb-0 off-white-text">Posted: ${humanDateFormat}</p>
                    <p class="mb-0 off-white-text">Link to article:<a class="post-url" href="${story.url}" target="_blank"> Click here</a></p>
                  </div>
              </div>
            </div>
            `
          })
        )
      })
    })
}

// Reset all news
function clearNews() {
  window.location.reload();
}