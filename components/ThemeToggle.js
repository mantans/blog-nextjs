
import Toggle from 'react-toggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ThemeContext, themes } from 'context/ThemeContext';

const ThemeToggle = ({theme,onChange}) => 
<label>
<Toggle
  className="day-night-toggle"
  checked={!(theme == "light")}
  icons={{
    checked: <FontAwesomeIcon inverse icon="sun" />,
    unchecked: <FontAwesomeIcon   inverse icon="moon" />,
  }}
  onChange={onChange}
  
  /> 
  
</label>

export default ThemeToggle;