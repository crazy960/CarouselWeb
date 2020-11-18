// 액션타입 정의
export const AUTHENTICATE = 'Navbar/AUTHENTICATE';
export const AUTHENTICATED_SUCCESS = 'Navbar/AUTHENTICATED_SUCCESS';
export const AUTHENTICATE_REQUEST = 'Navbar/AUTHENTICATE_REQUEST';
export const AUTHENTICATE_FAILURE = 'Navbar/AUTHENTICATE_FAILURE';

export const LOGOUT = 'Navbar/LOGOUT';
export const LOGOUT_SUCCESS = 'Navbar/LOGOUT_SUCCESS';
export const LOGOUT_REQUEST = 'Navbar/AUTHENTICATE_REQUEST';
export const LOGOUT_FAILURE = 'Navbar/AUTHENTICATE_FAILURE';





// 액션 생성 함수 정의
export const Autenticate = () => ({ type : AUTHENTICATE });
export const Autenticated_Success = () => ({ type : AUTHENTICATED_SUCCESS  });
export const Autenticate_Request = () => ({ type : AUTHENTICATE_REQUEST});
export const Autenticate_Failure = () => ({ type : AUTHENTICATE_FAILURE });

export const Logout = () => ({ type : LOGOUT });
export const Logout_Success = () => ({ type : LOGOUT_SUCCESS });
export const Logout_Request = () => ({ type : LOGOUT_REQUEST});
export const Logout_Failure = () => ({ type : LOGOUT_FAILURE });


