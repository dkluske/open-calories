function databaseExists() {
    navigator.storage.getDirectory().then(root => {
        root.getFileHandle("opencalories.db").catch(() => {
            alert("No database found");
        })
    })
}

export {databaseExists};