export function githubAuth() {
    return fetch('/api/auth/github')
        .then(res => res.json());
}
