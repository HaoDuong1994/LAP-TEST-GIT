import "./Header.css";
function Header() {
  return (
    <div>
      <header className="header">
        <div>Logo</div>
        <nav className="nav-item">
          <div>Trang chủ</div>
          <div>Sản phẩm</div>
          <div>Phụ Kiện</div>
          <div>Liên hệ</div>
        </nav>
        <div>
          <input type="text" placeholder="Tìm kiếm sản phẩm" />
        </div>
        <div>
          <button>Sign up</button>
          <button>Sign in</button>
        </div>
        <div>Trang cá nhân</div>
      </header>
    </div>
  );
}

export default Header;
