interface HeaderProps {
    header : string
}
const Header = (props : HeaderProps) => {
    return (
        <div className='text-center'>
            <div className="text-4xl relative inline-block text-center mb-12 text-gray-700">
                {props.header}
                <span className="absolute top-full left-0 h-0.5 bg-gradient-to-r from-gray-700 to-transparent rounded-lg w-full"></span>
            </div>
        </div>
    )
}

export default Header
