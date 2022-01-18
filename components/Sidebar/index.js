import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap, ExtLink, LogoWrapper, SidebarExternalLink } from './SidebarStyles'
import Image from 'next/image';

const Sidebar = ({isOpen,toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <LogoWrapper>
        <Image src="/LogoCarcara.png" width={70} height={70} />
      </LogoWrapper>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='discounts' onClick={toggle}>Vantagens</SidebarLink>
          <SidebarExternalLink href="https://www.instagram.com/aaacarcara/" target="blank" onClick={toggle}>Produtos</SidebarExternalLink>
          <SidebarExternalLink href="https://www.instagram.com/carcachoppada/" target="blank" onClick={toggle}>Carcachoppada</SidebarExternalLink>
          <SidebarExternalLink href="https://www.instagram.com/aaacarcara/" target="blank" onClick={toggle}>Instagram</SidebarExternalLink>
        </SidebarMenu>
        <SideBtnWrap>
          <ExtLink href="https://docs.google.com/forms/d/e/1FAIpQLSfMe8neKR43T-vYyPEYdByruInaEHywdsTKDO9qiXA91dMwjQ/viewform" target="blank" passHref >
            <SidebarRoute>Seja Sócio</SidebarRoute>
          </ExtLink>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
