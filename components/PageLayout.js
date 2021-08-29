
import { Container } from "react-bootstrap";
import Navbar from './Navbar';
import { useTheme } from 'providers/ThemeProvider';
import ScrollTopArrow from "./ScrollTopArrow";



export default function PageLayout({children, className}) {
    const { theme, toggleTheme} = useTheme();
    return (
        <div className={theme.type}>
        <Container>
            <ScrollTopArrow />
            <Navbar 
              theme={theme}
              toggleTheme={toggleTheme}
            />
            <div className={`page-wrapper ${className}`}>
                {children}
            </div>
            <footer className="page-footer">
            <div>
                <a href="#">courses</a>{' | '}
                <a href="#">github</a>{' | '}
                <a href="#">facebook</a>
                </div>
            </footer>  
        </Container>
        <style jsx global>{`
          html, body {
              background: ${theme.background};
              color: ${theme.fontColor};
              transition: color 0.2s ease-out, background 0.2s ease-out 0s;
          }
        `}
        </style>
    </div>
    )
}