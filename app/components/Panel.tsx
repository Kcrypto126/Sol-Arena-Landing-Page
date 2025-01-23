const OpenPanelIcon = <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="26" cy="26" r="24.7812" fill="#0085FF" fillOpacity="0.65" stroke="#88FFF8" strokeWidth="2.4375" />
    <path fillRule="evenodd" clipRule="evenodd" d="M13 19.5C13 15.9101 15.9101 13 19.5 13H32.5C36.0899 13 39 15.9101 39 19.5V32.5C39 36.0899 36.0899 39 32.5 39H19.5C15.9101 39 13 36.0899 13 32.5V19.5ZM33.2116 25.9098C33.2116 26.5081 32.7266 26.9932 32.1283 26.9932H27.0833V32.0381C27.0833 32.6364 26.5983 33.1214 26 33.1214C25.4017 33.1214 24.9167 32.6364 24.9167 32.0381V26.9932H19.8717C19.2734 26.9932 18.7884 26.5081 18.7884 25.9098C18.7884 25.3115 19.2734 24.8265 19.8717 24.8265H24.9167V19.7816C24.9167 19.1833 25.4017 18.6982 26 18.6982C26.5983 18.6982 27.0833 19.1833 27.0833 19.7816V24.8265H32.1283C32.7266 24.8265 33.2116 25.3115 33.2116 25.9098Z" fill="url(#paint0_linear_406_28237)" />
    <defs>
        <linearGradient id="paint0_linear_406_28237" x1="26" y1="13" x2="26" y2="39" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopColor="#DAFBFF" />
        </linearGradient>
    </defs>
</svg>

const ClosePanelIcon = <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="26" cy="26" r="24.7812" fill="#0085FF" fillOpacity="0.65" stroke="#88FFF8" strokeWidth="2.4375" />
    <path fillRule="evenodd" clipRule="evenodd" d="M13.001 20.3114C13.001 16.7216 15.9111 13.8114 19.501 13.8114H32.501C36.0908 13.8114 39.001 16.7216 39.001 20.3114V33.3114C39.001 36.9013 36.0908 39.8114 32.501 39.8114H19.501C15.9111 39.8114 13.001 36.9013 13.001 33.3114V20.3114ZM31.1012 21.6218C31.5243 22.0449 31.5243 22.7308 31.1012 23.1539L27.5339 26.7212L31.1012 30.2885C31.5243 30.7115 31.5243 31.3975 31.1012 31.8205C30.6782 32.2436 29.9922 32.2436 29.5692 31.8205L26.0019 28.2532L22.4346 31.8205C22.0115 32.2436 21.3256 32.2436 20.9025 31.8205C20.4794 31.3975 20.4794 30.7115 20.9025 30.2885L24.4698 26.7212L20.9025 23.1539C20.4794 22.7308 20.4794 22.0449 20.9025 21.6218C21.3256 21.1987 22.0115 21.1987 22.4346 21.6218L26.0019 25.1891L29.5692 21.6218C29.9922 21.1987 30.6782 21.1987 31.1012 21.6218Z" fill="url(#paint0_linear_406_28253)" />
    <defs>
        <linearGradient id="paint0_linear_406_28253" x1="26.001" y1="13.8114" x2="26.001" y2="39.8114" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopColor="#DAFBFF" />
        </linearGradient>
    </defs>
</svg>


interface PanelPropTypes {
    isOpen: boolean,
    setIsOpen: (f: boolean) => void
}
const Panel: React.FC<PanelPropTypes> = ({ isOpen, setIsOpen }) => {

    return (
        <div className=" fixed bottom-[20px] z-40 right-5 hover:cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? ClosePanelIcon : OpenPanelIcon}
        </div>
    )
}
export default Panel;