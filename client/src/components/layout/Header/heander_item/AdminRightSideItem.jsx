import React from 'react'
import LinkTo from '../../../ui/Link/LinkTo';
import IncludeRedPage from '../../../../util/IncludeRedPage';
import { ROUTES } from '../../../../router/Routes';
import { useSelector } from 'react-redux';
import { RightSide } from '../Headers.style';

// const linkDatas = {
//   right_side: [
//     {
//       to: ROUTES.REGISTER.path,
//       name: "회원가입",
//     },
//     {
//       to: ROUTES.MYPAGE.path,
//       name: "마이페이지",
//     },
//   ],
//   left_side: [
//     {
//       to: ROUTES.ORDER.path,
//       name: "MENU",
//     },
//     {
//       to: ROUTES.RECIPE.path,
//       name: "꿀조합",
//     },
//   ],
// };

const items = [
  {
    to: ROUTES.ADMINORDER.path,
    name: "관리자 페이지"
  },
  {
    to: ROUTES.LOGOUT.path,
    name: "로그아웃"
  }
]


function AdminRightSideItem(props) {
  const isLogin = useSelector((state) => state.login.loginState);

  const transLog = !isLogin ? "로그인" : "로그아웃";
  const transPath = !isLogin ? ROUTES.LOGIN.path : ROUTES.LOGOUT.path;


  const style = {
    textDecoration: "none",
    textAlign: "center",
    color: `${IncludeRedPage(props.location) ? "#191414" : "#f5f5f5"}`,
    fontSize: "15px",
    fontWeight: "400",
    margin: "27px",
    cursor: "pointer",
  };

  return (
    <RightSide>
     <LinkTo
            there={{ to: `${transPath}`, name: `${transLog}` }}
            style={style}
          />

          {items.map((link) => {
            return (
              <LinkTo there={{ to: link.to, name: link.name }} style={style} />
            );
          })}
    </RightSide>
  )
}

export default AdminRightSideItem
