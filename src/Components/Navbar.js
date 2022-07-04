import './Navbar.css';
import CartWidget from './CartWidget';
const NavBar = () =>{
    return(
        <nav className="navbar1 navbar-expand-lg navbar">
            <div className='titulo'>
                <h1>Armate.ino</h1>
            </div>
            <button class="color-boton navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="spanw navbar-toggler-icon"><img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTE3LjIsNDAuMTMzMzNjLTIuMDY3NjUsLTAuMDI5MjQgLTMuOTkwODcsMS4wNTcwOSAtNS4wMzMyMiwyLjg0M2MtMS4wNDIzNiwxLjc4NTkyIC0xLjA0MjM2LDMuOTk0NzQgMCw1Ljc4MDY2YzEuMDQyMzYsMS43ODU5MiAyLjk2NTU4LDIuODcyMjUgNS4wMzMyMiwyLjg0M2gxMzcuNmMyLjA2NzY1LDAuMDI5MjQgMy45OTA4NywtMS4wNTcwOSA1LjAzMzIyLC0yLjg0M2MxLjA0MjM2LC0xLjc4NTkyIDEuMDQyMzYsLTMuOTk0NzQgMCwtNS43ODA2NmMtMS4wNDIzNiwtMS43ODU5MiAtMi45NjU1OCwtMi44NzIyNSAtNS4wMzMyMiwtMi44NDN6TTE3LjIsODAuMjY2NjdjLTIuMDY3NjUsLTAuMDI5MjQgLTMuOTkwODcsMS4wNTcwOSAtNS4wMzMyMiwyLjg0M2MtMS4wNDIzNiwxLjc4NTkyIC0xLjA0MjM2LDMuOTk0NzQgMCw1Ljc4MDY2YzEuMDQyMzYsMS43ODU5MiAyLjk2NTU4LDIuODcyMjUgNS4wMzMyMiwyLjg0M2gxMzcuNmMyLjA2NzY1LDAuMDI5MjQgMy45OTA4NywtMS4wNTcwOSA1LjAzMzIyLC0yLjg0M2MxLjA0MjM2LC0xLjc4NTkyIDEuMDQyMzYsLTMuOTk0NzQgMCwtNS43ODA2NmMtMS4wNDIzNiwtMS43ODU5MiAtMi45NjU1OCwtMi44NzIyNSAtNS4wMzMyMiwtMi44NDN6TTE3LjIsMTIwLjRjLTIuMDY3NjUsLTAuMDI5MjQgLTMuOTkwODcsMS4wNTcwOSAtNS4wMzMyMiwyLjg0M2MtMS4wNDIzNiwxLjc4NTkyIC0xLjA0MjM2LDMuOTk0NzQgMCw1Ljc4MDY2YzEuMDQyMzYsMS43ODU5MiAyLjk2NTU4LDIuODcyMjUgNS4wMzMyMiwyLjg0M2gxMzcuNmMyLjA2NzY1LDAuMDI5MjQgMy45OTA4NywtMS4wNTcwOSA1LjAzMzIyLC0yLjg0M2MxLjA0MjM2LC0xLjc4NTkyIDEuMDQyMzYsLTMuOTk0NzQgMCwtNS43ODA2NmMtMS4wNDIzNiwtMS43ODU5MiAtMi45NjU1OCwtMi44NzIyNSAtNS4wMzMyMiwtMi44NDN6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4="/></span>
            </button>
            <div className='contenedor collapse navbar-collapse' id="navbarNav">
                <ul className='lista navbar-nav'>
                    <li className='item nav-item'>
                        <a className='enlase nav-link' href='#'>Home</a>
                    </li>
                    <li className='item'>
                        <a className='enlase nav-link' href='#'>Nosotros</a>
                    </li>
                    <li className='item'>
                        <a className='enlase nav-link' href='#'>Deseados</a>
                    </li>
                    <li className='item-ultimo'>
                        <CartWidget className="cart"/>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;