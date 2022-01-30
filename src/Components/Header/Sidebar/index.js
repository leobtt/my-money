import { Link } from 'react-router-dom'
import {
  AccountBalance as HomeIcon,
  AssessmentOutlined as AnalyticsIcon,
} from '@mui/icons-material/'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/" className="link">
        <HomeIcon fontSize="large" />
      </Link>
      <Link to="/" className="link ">
        <AnalyticsIcon fontSize="large" />
      </Link>
    </div>
  )
}

export default Sidebar
