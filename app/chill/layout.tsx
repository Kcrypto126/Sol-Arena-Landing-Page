const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="md:grid md:grid-cols-4">
            {children}
        </div>
    )
}
export default Layout