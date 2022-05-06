(() => {
    const $fetch = document.getElementById("fetch"),
        $fragment = document.createDocumentFragment();

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.ok ? res.json() : Promise.reject(res))
        .then(json => {
            json.forEach(user => {
                const $li = document.createElement("li");
                $li.innerHTML = `${user.name} -- ${user.address.city}`;
                $fragment.appendChild($li);
            })
            $fetch.appendChild($fragment);
        })
        .catch(err => {
            let message = err.statusText || 'Ocurrió un error';
            $fetch.innerHTML = `Error ${err.status}: ${message}`;
        })
        .finally(() => {
            console.log('Termino de cargar');
        })
})();