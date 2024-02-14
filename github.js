// İSTEKLERİ ATTIĞIMIZ KISIM
class GitHub {
  constructor() {
    this.client_id = "91d0ea719b14a5d4a4de";
    this.client_secret = "2f6e46a9cda35d91526b8b00dd92949d4d4899c0";
    this.repo_count = 40;
    this.repo_sort = "asc";
  }

  async getUser(user) {
    // api e istek atma
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    // kullanıcının repoları çekme

    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repo_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    // json a çevirme
    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    console.log(repos);
    return { profile, repos };
  }
}

export default GitHub;
