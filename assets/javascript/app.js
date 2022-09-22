// Get new posts function
function getNewPosts() {
  document.getElementById('output').innerHTML = ``;
  fetch('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty')
    .then(response => response.json())
    .then(storyIds => {
      storyIds.map(function (id) {
        return (
          fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
          .then(response => response.json())
          .then(story => {
            // Display time human readable
            let unixTimestamp = story.time;
            let milliseconds = unixTimestamp * 1000;
            let dateObject = new Date(milliseconds);
            let humanDateFormat = dateObject.toLocaleString();
            document.getElementById('output').innerHTML += `
          <div class="card mb-3">
            <h5 id="post-title" class="card-header data-title mb-1">${story.title}</h5>
            <div class="card-body">
              <p class="off-white-text mb-0">${story.type} by: ${story.by}</p>
              <p class="off-white-text mb-0">posted: ${humanDateFormat}</p>
              <p class="off-white-text mb-0">link to article:<a class="post-url" href="${story.url}" target="_blank"> Click here</a></p>
              </div>
          </div>
          `;
          })
        );
      });
    });
}

// Get top posts function
function getTopPosts() {
  document.getElementById('output').innerHTML = ``;
  fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
    .then(response => response.json())
    .then(storyIds => {
      storyIds.map(function (id) {
        return (
          fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
          .then(response => response.json())
          .then(story => {
            // Display time human readable
            let unixTimestamp = story.time;
            let milliseconds = unixTimestamp * 1000;
            let dateObject = new Date(milliseconds);
            let humanDateFormat = dateObject.toLocaleString();
            document.getElementById('output').innerHTML += `
          <div class="card mb-3">
            <h5 id="post-title" class="card-header data-title mb-1">${story.title}</h5>
            <div class="card-body">
              <p class="mb-0 off-white-text">${story.type} by: ${story.by}</p>
              <p class="mb-0 off-white-text">Posted: ${humanDateFormat}</p>
              <p class="mb-0 off-white-text">Link to article:<a class="post-url" href="${story.url}" target="_blank"> Click here</a></p>
              </div>
          </div>
          `;
          })
        );
      });
    });
}

function clearNews() {
  window.location.reload();
  // document.getElementById('output').innerHTML = ``;
}