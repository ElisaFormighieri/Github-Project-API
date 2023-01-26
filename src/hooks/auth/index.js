import { atom, useAtom } from 'jotai';

const userAtom = atom(JSON.parse(localStorage.getItem('user')));

export const useAuth = () => {
  const [user, setUser] = useAtom(userAtom);

  async function signIn(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) throw new Error('Tente outro usuário!');

    const userData = await response.json();
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  }

  function signOut() {
    localStorage.clear();
    setUser(null);
  }

  return { user, signIn, signOut };
};
