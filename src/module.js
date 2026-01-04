var options = {
    method: 'GET',
    headers: {
        Accept: 'application/vnd.github+json',
        'x-GitHub-Api-Version': '2022-11-28'
    }
}
//octocat

export async function getUserInfo(username = "octocat") {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`, options)
        return await response.json();
    } catch (error) {
        alert(error.message);
    }
}

export function $(selector) {
    return document.querySelector(selector)
}


