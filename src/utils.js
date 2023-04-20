export function fetchData () {
    return fetch("https://krds-assignment.github.io/aoc/api-assets/data.json").then((res)=> res.json())
}