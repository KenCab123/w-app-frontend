const URL = import.meta.env.VITE_BASE_API_URL

export const getStrains = () => {
    return fetch(`${URL}`).then((response) => response.json())
}

