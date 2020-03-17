const fullStar = "★";
const emptyStar = "☆";

onst queryRepoList = `
{
  viewer {
    name
		repos: repositories (first: 10, orderBy: {field: CREATED_AT, direction: DESC}) {
      totalCount
      nodes {
        name
        id
        starred: viewerHasStarred
        pullRequests (states: OPEN) {
          totalCount
        }
        issues (states: OPEN) {
          totalCount
        }
        ... commitFragment
      }
    }    
  }
}` + commitFragment;

<<<<<<< Updated upstream
const queryRepoList = `
query {
  viewer {
    name
    repositories(first: 9, orderBy: {field: CREATED_AT, direction: DESC}) {
      totalCount
      nodes {
        name
      }
    }
  }
}
`;
=======
>>>>>>> Stashed changes

let mutationAddStar;

let mutationRemoveStar;

function gqlRequest(query, variables, onSuccess) {
  // MAKE GRAPHQL REQUEST
  $.post({
    url: "https://api.github.com/graphql",
<<<<<<< Updated upstream
    contentType: "application/json",
    headers: {
      Authorization: `bearer ${env.GITHUB_PERSONAL_ACCESS_TOKEN}`
    },
=======
    headers: {
      Authorization: `bearer ${env.GITHUB_PERSONAL_ACCESS_TOKEN}`
    },
    contentType: "application/json",
>>>>>>> Stashed changes
    data: JSON.stringify({
      query: query,
      variables: variables
    }),
    success: (response) => {
<<<<<<< Updated upstream
      console.log(response);
      onSuccess(response);
    }
=======
      if (response.errors) {
        console.log(response.errors);
      } else {
        onSuccess(response);
      }
    },
    error: (error) => console.log(error)
>>>>>>> Stashed changes
  });
}

function starHandler(element) {
  // STAR OR UNSTAR REPO BASED ON ELEMENT STATE

}

$(window).ready(function() {
  // GET NAME AND REPOSITORIES FOR VIEWER
<<<<<<< Updated upstream
  gqlRequest(queryRepoList, null, (response) => {
    $('header h2').text(`Hello ${response.data.viewer.name}`);
    const repos = response.data.viewer.repositories;
    if (repos.totalCount > 0) {
      $('ul.repos').empty();
      repos.nodes.forEach((repo) => {
        const card = `<h3>${repo.name}</h3>`;
        $('ul.repos').append(`<li><div>${card}</div></li>`);
      });
    }
  });
=======
  gqlRequest(queryRepoList, {},
    (response) => {
      $('header h2').text(`Hello ${response.data.viewer.name}`);
      const repos = response.data.viewer.repos;
      if (repos.totalCount > 0) {
        $('ul').empty();
      }
      repos.nodes.forEach((repo) => {
        const star = repo.starred? fullStar : emptyStar;
        const card = `
        <h3>
          ${repo.name}
          <span id=${repo.id} class="star" onClick="starHandler(this)">${star}</span>
        </h3>
        <p>${repo.pullRequests.totalCount} open PRs</p>
        <p>${repo.issues.totalCount} open issues</p>
        <p>${repo.ref.target.history.totalCount} commits</p>
        `;
        $("ul.repos").append(`<li><div>${card}</div></li>`)
      });
    });
>>>>>>> Stashed changes
});