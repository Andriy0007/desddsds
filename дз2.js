async function createPost() {
    const newPost = {
        title: 'Новий пост',
        body: 'Це зміст нового поста',
        userId: 1
    };

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPost)
        });
        if (!response.ok) {
            throw new Error(`Помилка при відправці даних: ${response.status}`);
        }
        const data = await response.json();
        console.log('Новий пост створено:', data);
    } catch (error) {
        console.error('Помилка:', error);
    }
}

createPost();
