// Fetch Random Dog Image
document.getElementById("fetchDog").addEventListener("click", async () => {
    const URL = "https://dog.ceo/api/breeds/image/random";
    
    try {
        const response = await fetch(URL);
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        
        document.getElementById("dogImage").innerHTML = `<img src="${data.message}" alt="Dog Image">`;
    } catch (error) {
        document.getElementById("dogImage").innerHTML = "Failed to load image 🐾";
        console.error("Error:", error);
    }
});

// Create a New User (POST Request)
document.getElementById("createUser").addEventListener("click", async () => {
    const URL = "https://jsonplaceholder.typicode.com/users";
    const user = {
        name: "John Doe",
        email: "john@example.com"
    };

    try {
        const response = await fetch(URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        });

        const data = await response.json();
        document.getElementById("response").innerText = `User Created: ${JSON.stringify(data)}`;
    } catch (error) {
        console.error("Error:", error);
    }
});

// Update User (PUT Request)
document.getElementById("updateUser").addEventListener("click", async () => {
    const URL = "https://jsonplaceholder.typicode.com/users/1";
    const updatedUser = {
        name: "John Wick",
        email: "johnwick@example.com"
    };

    try {
        const response = await fetch(URL, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedUser)
        });

        const data = await response.json();
        document.getElementById("response").innerText = `User Updated: ${JSON.stringify(data)}`;
    } catch (error) {
        console.error("Error:", error);
    }
});

// Delete User (DELETE Request)
document.getElementById("deleteUser").addEventListener("click", async () => {
    const URL = "https://jsonplaceholder.typicode.com/users/1";

    try {
        const response = await fetch(URL, { method: "DELETE" });

        if (response.ok) {
            document.getElementById("response").innerText = "User Deleted Successfully!";
        } else {
            throw new Error("Failed to delete user");
        }
    } catch (error) {
        console.error("Error:", error);
    }
});
