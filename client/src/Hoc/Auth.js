import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authUser } from '../_Actions/User_action';

function Auth(SpecificComponent, option, adminRoute = null) {
  // null : 아무나 출입이 가능한 페이지
  // true : 로그인한 유저만 출입이 가능한 페이지
  // false : 로그인한 유저는 출입이 불가한 페이지
  const dispatch = useDispatch();
  function AuthenticationCheck(props) {
    useEffect(() => {
      dispatch(authUser()).then((res) => {
        if (!res.payload.isAuth) {
          if (option) {
            props.history.push('/login');
          }
        } else {
          if (adminRoute && !res.payload.isAdmin) {
            props.history.push('/');
          } else {
            if (option === false) {
              props.history.push('/');
            }
          }
        }
      });
    }, []);
    return <SpecificComponent />;
  }

  return AuthenticationCheck;
}

export default Auth;
