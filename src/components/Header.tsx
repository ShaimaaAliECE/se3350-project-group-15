const Header = () => {
  return (
    <div className="header-container">
      <div className="header-body">
        <div className="header-left"></div>
        <div className="header-right">
          <div className="user-frame">
            <img
              src={require('@/assets/svg/avatar.svg')}
              alt="placeholder+image"
            />
            <span>Jack</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
