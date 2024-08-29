export function alternatingCaps(text) {
    return text.split('').map((char, index) => (index % 2 === 0 ? char.toUpperCase() : char.toLowerCase())).join('');
}

