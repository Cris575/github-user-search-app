var options = {
    method: 'GET',
    headers: {
        Accept: 'application/vnd.github+json',
        'x-GitHub-Api-Version': '2022-11-28'
    }
}

export async function getUserInfo(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`, options);

        if (!response.ok) {
            throw new Error(response.status === 404 ? "User not found" : "Error de API");
        }

        return await response.json();

    } catch (error) {
        throw error;
    }
}

export function $(selector) {
    return document.querySelector(selector)
}


