import React, { useState } from 'react';

const Notifications = () => {
    const [notifications, setNotifications] = useState([]);

    const addNotification = (message) => {
        const newNotification = {
            message,
            date: new Date().toLocaleString(),
        };
        setNotifications([...notifications, newNotification]);
    };

    const handlePasswordUpdate = () => {
        addNotification('Contraseña actualizada correctamente.');
    };

    const handleLogin = () => {
        addNotification('Inicio de sesión exitoso.');
    };

    const handleAccountDeletion = () => {
        addNotification('Cuenta eliminada correctamente.');
    };

    return (
        <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4">Sistema de Notificaciones</h1>
            <div className="flex gap-4 mb-4">
                <button onClick={handlePasswordUpdate} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Actualizar Contraseña
                </button>
                <button onClick={handleLogin} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Iniciar Sesión
                </button>
                <button onClick={handleAccountDeletion} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Eliminar Cuenta
                </button>
            </div>
            <ul className="list-disc pl-4">
                {notifications.map((notification, index) => (
                    <li key={index} className="mb-2">
                        <span className="font-bold">{notification.message}</span> - {notification.date}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Notifications;
