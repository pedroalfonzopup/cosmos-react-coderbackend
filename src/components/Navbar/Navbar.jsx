function Navbar() {
    return (
        <>
            <nav class="MyNavbar">
                <a class="MyNavbar-logo" href="http://localhost:8080/">COSMOS</a>
                <ul class="MyNavbar-list">
                    <li id="real-nav"><a href="/products/real">REAL</a></li>
                    <li id="form-nav"><a href="/products/form">FORM</a></li>
                    <li id="cart-nav"><a href="/orders/">MY CART</a></li>
                    <li id="register-nav"><a href="/sessions/register">REGISTER</a></li>
                    <li id="login-nav"><a href="/sessions/login">LOGIN</a></li>
                </ul>
                <button id="signout" class="MyNavbar-signout">SIGN OUT</button>
            </nav>
        </>
    )
}

export default Navbar