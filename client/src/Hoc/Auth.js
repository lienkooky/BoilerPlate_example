import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authUser } from '../_Actions/User_action';

function Auth(SpecificComponent, option, adminRoute = null) {
  // null : 아무나 출입이 가능한 페이지
  // true : 로그인한 유저만 출입이 가능한 페이지
  // false : 로그인한 유저는 출입이 불가한 페이지
  function AuthenticationCheck(props) {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(authUser()).then((res) => {
        console.log(res);
        //로그인안한 상태
        if (!res.payload.isAuth) {
          if (option) {
            props.history.push('/login');
          }
        } else {
          // 로그인한 상태
          if (adminRoute && !res.payload.isAdmin) {
            props.history.push('/');
          } else {
            if (option === false) {
              props.history.push('/');
            }
          }
        }
      });
    }, [dispatch, props.history]);
    return <SpecificComponent />;
  }

  return AuthenticationCheck;
}

export default Auth;
