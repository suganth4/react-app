export function fetchlivescore() {
    return fetch("https://livescore6.p.rapidapi.com/matches/v2/list-live?Category=cricket&&Timezone=5.5", {
        headers: {
            'X-RapidAPI-Key': 'hPq1NScczpcJXMwHcP3TbJp7yn3WkJio',
            'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
          },
        
    }).then((res) => {
        return res.json()
    })
}