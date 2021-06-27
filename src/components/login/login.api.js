export function githubAuth() {
    return fetch('/api/auth/github')
        .then(res => res.json());
}

export function getUser() {
    return fetch('/api/get-user-data', {
        method: 'GET',
        credentials: 'include'
    })
        .then(res => res.json());
}
