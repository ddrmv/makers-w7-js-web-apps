class GithubView {
  constructor(model, api) {
    this.model = model;
    this.api = api;

    const submitButtonEl = document.querySelector('#submit-button');
    const repoInputEl = document.querySelector('#repo-name-input');

    submitButtonEl.addEventListener('click', () => {
      const repoName = repoInputEl.value;

      this.api.getRepoInfo(repoName, repoData => {
        console.log(repoData);
        this.model.setRepoInfo(repoData);
        this.display();
      });
    });
  }

  display() {
    const repoName = this.model.getRepoInfo().full_name;
    document.querySelector('#repo-name').textContent = repoName;

    const repoDescription = this.model.getRepoInfo().description;
    document.querySelector('#repo-description').textContent = repoDescription;

    const repoImageUrl = this.model.getRepoInfo().organization.avatar_url;
    document.querySelector('#repo-image').src = repoImageUrl;
  }
}

module.exports = GithubView;