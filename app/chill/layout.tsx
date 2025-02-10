const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="lg:grid lg:grid-cols-4 relative">
            {children}
        </div>
    )
}
export default Layout