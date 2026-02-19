export const setUser = (user: any) => {
    localStorage.setItem('user_info', JSON.stringify(user));
};

export const getUser = () => {
    if (typeof window !== 'undefined') {
        const user = localStorage.getItem('user_info');
        return user ? JSON.parse(user) : null;
    }
    return null;
};

export const logout = () => {
    localStorage.removeItem('user_info');
    window.location.href = '/login';
};