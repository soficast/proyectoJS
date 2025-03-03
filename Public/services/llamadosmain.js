// GET
async function getConsultas() {
    try {
        const response = await fetch('http://localhost:3000/consultas', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching users');
        }

        const users = await response.json();
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}

export { getConsultas };

// POST
async function  postConsultas(userName, nombreEstudiante, consulta, horaSolicitud, ) {
    try {
        const userData = {
            userName,
            nombreEstudiante,
            consulta,
            horaSolicitud
        };

        const response = await fetch("http://localhost:3000/consultas", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        return await response.json();
    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}

export { postConsultas };

// UPDATE
async function updateConsultas(userName, nombreEstudiante, consulta, horaSolicitud, id) {
    try {
        const userData = {
            userName,
            nombreEstudiante,
            consulta,
            horaSolicitud
        };

        const response = await fetch(`http://localhost:3000/consultas/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        return await response.json();
    } catch (error) {
        console.error('Error update user:', error);
        throw error;
    }
}

export { updateConsultas };

// DELETE
async function deleteConsultas(id) {
    try {
        const response = await fetch(`http://localhost:3000/consultas/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
consulta        }

        return { message: `User with id ${id} deleted successfully` };
    } catch (error) {
        console.error('Error deleting consulta:', error);
        throw error;
    }
}

export { deleteConsultas };