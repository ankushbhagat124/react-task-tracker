import PropTypes from 'prop-types'
import Button from './Button'

const Header = ( {title, onAdd, showAdd} ) => {

    
    return (
        <header className='header'>
            <h2>TASK TRACKER</h2>
            <Button color={showAdd? 'red':'green'} text={showAdd ? 'Close':'ADD'} onClick = {onAdd} />
            {/* <h2 style = {HeadingStyle}>{props.title}</h2> */}
           
        </header>
        
    )
}

Header.defaultProps = {
    title: 'Hello'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}
// CSS IN JS
// const HeadingStyle = {
//     color: 'red',
//     backgroundColor:'black',
// }
export default Header
