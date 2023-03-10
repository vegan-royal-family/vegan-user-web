import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import Link from "next/link";
import { useRecoilValue } from "recoil";
import { authState } from "states/auth";
import Logo from "assets/Logo/Logo.png";
import Button from "./Button";

type MenuType = Array<{ route: string; name: string }>;

const UserProfileBox = ({ profile }) => {
  return (
    <>
      {profile?.id ? (
        <button onClick={() => {}}>로그아웃</button>
      ) : (
        <Link href="/login">
          <Button type="primary" size="sm">
            로그인
          </Button>
        </Link>
      )}
    </>
  );
};

export default function Header(props: { menus: MenuType }) {
  const { menus } = props;
  const theme = useTheme();
  const authValue = useRecoilValue(authState);

  return (
    <StyledHeader theme={theme}>
      <img src={Logo.src} alt="어쩌다보니비건 로고" width={200} height={28} />
      <Menu>
        {menus.map((item) => {
          return (
            <Link href={item?.route} key={item.route}>
              <MenuItem>{item?.name}</MenuItem>
            </Link>
          );
        })}
        <UserProfileBox profile={authValue} />
      </Menu>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  height: 80px;
  width: calc(100% - 96px);

  background: ${(p) => p.theme.palette.colors.primary[50]};

  display: flex;
  align-items: center;
  padding: 0px 48px;
`;

const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  gap: 32px;
`;

const MenuItem = styled.div`
  ${(p) => p.theme.typography.body1}
  ${(p) => p.theme.typography.weightBold}
  color: ${(p) => p.theme.palette.colors.basic.black};
  cursor: pointer;
`;
