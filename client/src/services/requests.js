import api from './api';

export const criarUsuario = async usuario => {
  try {
    const response = await api.post('users', {usuario});
    console.debug(response);
  } catch (e) {
    console.debug(e);
  }
};

export const login = async usuario => {
  try {
    const response = await api.post('session', {usuario});
    console.debug(response);
  } catch (e) {
    console.debug(e);
  }
};
