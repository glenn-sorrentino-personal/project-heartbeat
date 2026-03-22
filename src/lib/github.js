const GITHUB_API = "https://api.github.com";

export async function fetchRepositories(token) {
  const response = await fetch(`${GITHUB_API}/user/repos?per_page=100&sort=updated`, {
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`
    }
  });

  if (!response.ok) {
    throw new Error(`GitHub request failed with ${response.status}. Check token scopes and try again.`);
  }

  const repositories = await response.json();
  return repositories
    .map((repository) => ({
      id: repository.id,
      name: repository.name,
      full_name: repository.full_name,
      private: repository.private
    }))
    .sort((left, right) => left.full_name.localeCompare(right.full_name));
}

